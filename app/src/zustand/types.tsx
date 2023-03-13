export interface AuthStore {
  isAuthenticated: boolean;
  token: string;
  login: (token: string) => Promise<void>;
  logout: () => Promise<void>;
}
