import { JsonForms } from "@jsonforms/react";
import {
  globalajv,
  globalCells,
  globalRenderer,
} from "../constants/jsonforms.constants";
import { LOGIN_SCHEMA, LOGIN_UI_SCHEMA } from "../constants/authConstants";
import { useEffect, useState } from "react";
import { LoginCredentials } from "../models/auth.models";
import { useString } from "../hooks/useInput";
import { observer } from "mobx-react-lite";
import { useAuthStore } from "./auth.context";

const AccessComponent = observer(() => {
  // const { state: authState, dispatch: dispatchOnAuth } = useAuthContext();
  const [saveBtnProps, setSaveBtnProps] = useState<
    Record<string, number | string | boolean>
  >({});
  const authStore = useAuthStore();
  const { setValue: setUsername, value: username } = useString("");
  const { setValue: setPassword, value: password } = useString("");
  const [data] = useState<LoginCredentials>({
    username: "",
    password: "",
  });

  const handleClick = () => {
    authStore.setToken("mockTokenFromAPICallPromise");
  };

  useEffect(() => {
    const validate = globalajv.compile(LOGIN_SCHEMA);
    const valid = validate({
      username: username,
      password: password,
    });
    setSaveBtnProps({
      className: !valid
        ? "uk-button uk-button-default"
        : "uk-button uk-button-primary",
      disabled: !valid,
    });
  }, [username, password]);

  return (
    <>
      <div className="uk-margin">
        <JsonForms
          schema={LOGIN_SCHEMA}
          uischema={LOGIN_UI_SCHEMA}
          data={data}
          renderers={globalRenderer}
          cells={globalCells}
          onChange={({ errors, data }) => {
            setUsername(data.username);
            setPassword(data.password);
          }}
          ajv={globalajv}
        ></JsonForms>
      </div>
      <button type="button" onClick={handleClick} {...saveBtnProps}>
        {authStore.token ? "Update Credentials" : "Save Credentials"}
      </button>
    </>
  );
});

export default AccessComponent;
