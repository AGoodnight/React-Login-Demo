import { createContext, useContext } from "react";
import { createAuthStore } from "./auth.store";
import { useLocalObservable } from "mobx-react-lite";
import useStorage from "../hooks/useStorage";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const { authStorage } = useStorage();
  const authStore = useLocalObservable(createAuthStore);
  authStore.addToken(authStorage().token || null);
  return (
    <AuthContext.Provider value={authStore}>{children}</AuthContext.Provider>
  );
};

export const useAuthStore = () => useContext(AuthContext);

// import { AUTH_INITIAL_CONTEXT } from "../constants/authConstants";
// import {
//   AuthRedux,
//   AuthState,
//   AuthActionTypes,
//   AuthValueType,
// } from "../models/auth.models";

// const authReducer = (
//   state: AuthState,
//   action: {
//     type: AuthActionTypes;
//     value: AuthValueType;
//   }
// ) => {
//   let _state = { ...state };
//   switch (action.type) {
//     case "setToken":
//       return Object.assign({}, _state, {
//         token: action.value as string,
//       });
//     case "setAWSCreds": {
//       const _value = action.value as Record<string, string>;
//       return Object.assign({}, _state, {
//         key: _value.key || "",
//         signature: _value.signature || "",
//       });
//     }
//     default:
//       return _state;
//   }
// };

// const getLocalAuthState = () => {
//   const localState = localStorage.getItem("authState");
//   return localState ? JSON.parse(localState) : AUTH_INITIAL_CONTEXT;
// };

// export const AuthContext = createContext<AuthRedux>(
//   getLocalAuthState() as AuthRedux
// );

// export const AuthProvider: React.FC = ({ children }) => {
//   const [state, dispatch] = useReducer(authReducer, getLocalAuthState());
//   const value = { state, dispatch };

//   useEffect(() => {
//     localStorage.setItem("authState", JSON.stringify(state));
//   }, [state]);

//   return (
//     <AuthContext.Provider value={value as AuthRedux}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuthContext = () => {
//   const context = useContext(AuthContext);
//   if (context === undefined) {
//     throw new Error("useAuthContext must be used within a AuthProvider");
//   }
//   return context;
// };
