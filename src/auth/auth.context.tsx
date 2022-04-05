import React, { ReactNode } from "react";
import { useLocalStore } from "mobx-react-lite";
import { AuthStore, createAuthStore } from "./auth.store";

const AuthContext = React.createContext<AuthStore | null>(null);
export const AuthStoreProvider = ({ children }: { children: ReactNode }) => {
  const store = useLocalStore(createAuthStore);
  return <AuthContext.Provider value={store}>{children}</AuthContext.Provider>;
};
export const useAuthStore = () => {
  const store = React.useContext(AuthContext);
  if (!store) {
    throw new Error("useAuthStore must be used in a AuthStoreProvider");
  } else {
    return store;
  }
};
