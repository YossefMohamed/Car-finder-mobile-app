import { create } from "zustand";

export type AuthStore = {
  user: string | null;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
};

export type UserStore = {
  userData: UserData | null;
  fetchUserData: (userId: string) => Promise<void>;
};

export type SettingsStore = {
  darkMode: boolean;
  toggleDarkMode: () => void;
};

export type UserData = {
  id: string;
  name: string;
  email: string;
};

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  login: async (username: string, password: string) => {
    // This is where you would check the credentials against a database or API
    // For this example, we'll just hardcode a user
    const user = { id: "1", username: "testuser", password: "password" };
    if (username === user.username && password === user.password) {
      set({ user: user.id });
    } else {
      throw new Error("Invalid username or password");
    }
  },
  logout: () => set({ user: null }),
}));

export const useUserStore = create<UserStore>((set) => ({
  userData: null,
  fetchUserData: async (userId: string) => {
    // This is where you would fetch the user data from a database or API
    // For this example, we'll just hardcode the user data
    const userData = {
      id: "1",
      name: "Test User",
      email: "testuser@example.com",
    };
    set({ userData });
  },
}));

export const useSettingsStore = create<SettingsStore>((set) => ({
  darkMode: false,
  toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
}));
