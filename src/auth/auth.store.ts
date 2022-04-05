export type AuthStore = {
  token: string | null | undefined;
  setToken: (value: string) => void;
  getToken: () => void;
};

export const createAuthStore = (): AuthStore => {
  return {
    token: window.localStorage.getItem("token") || null,
    setToken(value: string) {
      this.token = value;
      window.localStorage.setItem("token", value);
    },
    getToken() {
      return this.token;
    },
  };
};
