// export type AuthStore = {
//   token: string | null | undefined;
//   addToken: (token: string | null | undefined) => void;
// };
// export const createAuthStore = (): AuthStore => {
//   return {
//     token: null,
//     addToken(token) {
//       this.token = token;
//     },
//   };
// };

import { computed, makeObservable, observable, action } from "mobx";

export class AuthStore {
  token: undefined | null | string = null;

  constructor() {
    makeObservable(this, {
      token: observable,
      session: computed,
      setToken: action,
    });
  }

  get session() {
    return {
      token: this.token,
    };
  }
  setToken(value: string | null | undefined) {
    this.token = value;
  }
}
