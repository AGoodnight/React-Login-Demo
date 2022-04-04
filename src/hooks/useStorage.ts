import { AuthStorageValues } from "../models/auth.models";
const useStorage = () => {
  const authStorage = (): AuthStorageValues => {
    return {
      token: window.localStorage.getItem("token"),
    };
  };
  return { authStorage };
};

export default useStorage;
