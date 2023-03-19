import { create } from "zustand";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { devtools } from "zustand/middleware";

interface AuthStore {
  isAuthenticated: boolean;
  token: string;
  refreshToken: string;
  login: (token: string, refreshToken: string) => Promise<void>;
  logout: () => Promise<void>;
  useRefreshToken: (token: string) => Promise<void>;
}

export const useAuthStore = create<AuthStore>()(
  devtools((set) => {
    // Get token from storage on initialization
    AsyncStorage.getItem("token")
      .then((token) => {
        if (token) {
          set({ isAuthenticated: true, token });
        }
      })
      .catch((error) =>
        console.error("Error getting token from storage:", error)
      );
    AsyncStorage.getItem("refreshToken")
      .then((refreshToken) => {
        if (refreshToken) {
          set({ refreshToken });
        }
      })
      .catch((error) =>
        console.error("Error getting token from storage:", error)
      );

    return {
      isAuthenticated: false,
      token: "",
      refreshToken: "",
      login: async (token: string, refreshToken: string) => {
        await AsyncStorage.setItem("token", token);
        await AsyncStorage.setItem("refreshToken", refreshToken);
        set((state) => ({
          ...state,
          token,
          isAuthenticated: true,
          refreshToken,
        }));
      },
      logout: async () => {
        await AsyncStorage.removeItem("token");
        await AsyncStorage.removeItem("refreshToken");
        set((state) => ({
          ...state,
          token: "",
          isAuthenticated: false,
          refreshToken: "",
        }));
      },
      useRefreshToken: async (token: string) => {
        await AsyncStorage.setItem("token", token);
        set((state) => ({
          ...state,
          token,
          isAuthenticated: true,
        }));
      },
    };
  })
);
