import { JsonForms } from "@jsonforms/react";
import {
  globalajv,
  globalCells,
  globalRenderer,
} from "../constants/jsonforms.constants";
import { LOGIN_SCHEMA, LOGIN_UI_SCHEMA } from "../constants/authConstants";
import { useEffect, useState } from "react";
import { AuthStorageValues } from "../models/auth.models";
import { useString } from "../hooks/useInput";
import { observer } from "mobx-react-lite";
import { AuthStore } from "./auth.store";

const AccessComponent = observer(({ authStore }: { authStore: AuthStore }) => {
  // const { state: authState, dispatch: dispatchOnAuth } = useAuthContext();
  const {};
  const [saveBtnProps, setSaveBtnProps] = useState<
    Record<string, number | string | boolean>
  >({});
  const { setValue: setKey, value: accessKey } = useString("");
  const { setValue: setSignature, value: signature } = useString("");
  const [data] = useState<AuthStorageValues>({
    key: accessKey,
    signature: signature,
  });

  const handleClick = () => {
    dispatchOnAuth({
      type: "setAWSCreds",
      value: {
        key: accessKey,
        signature,
      },
    });
  };

  useEffect(() => {
    const validate = globalajv.compile(LOGIN_SCHEMA);
    const valid = validate({
      key: accessKey,
      signature: signature,
    });
    setSaveBtnProps({
      className: !valid
        ? "uk-button uk-button-default"
        : "uk-button uk-button-primary",
      disabled: !valid,
    });
  }, [accessKey, signature]);

  return (
    <>
      <h2>Getting Started</h2>
      {(!authState.key || !authState.signature) && (
        <p>
          To get started, you will need access to the Wizard, please provide the
          Access Key and a Signature you were provided. After which you will see
          the wizard tab appear and can begin.
        </p>
      )}
      {authState.key && authState.signature && (
        <p>
          You have an Access Key and Signature saved to your browser, however
          you can update it at anytime below.
        </p>
      )}
      <div className="uk-margin">
        <JsonForms
          schema={LOGIN_SCHEMA}
          uischema={LOGIN_UI_SCHEMA}
          data={data}
          renderers={globalRenderer}
          cells={globalCells}
          onChange={({ errors, data }) => {
            setKey(data.key);
            setSignature(data.signature);
          }}
          ajv={globalajv}
        ></JsonForms>
      </div>
      <button type="button" onClick={handleClick} {...saveBtnProps}>
        {authState.key && authState.signature
          ? "Update Credentials"
          : "Save Credentials"}
      </button>
    </>
  );
});

export default AccessComponent;
