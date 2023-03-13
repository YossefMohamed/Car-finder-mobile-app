import { create } from "zustand";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { devtools } from "zustand/middleware";

interface AuthStore {
  isAuthenticated: boolean;
  token: string;
  login: (token: string) => Promise<void>;
  logout: () => Promise<void>;
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

    return {
      isAuthenticated: false,
      token: "",
      login: async (token: string) => {
        await AsyncStorage.setItem("token", token);
        set((state) => ({ ...state, token, isAuthenticated: true }));
      },
      logout: async () => {
        await AsyncStorage.removeItem("token");
        set((state) => ({ ...state, token: "", isAuthenticated: false }));
      },
    };
  })
);
