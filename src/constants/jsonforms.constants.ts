import { createAjv, JsonSchema } from "@jsonforms/core";
import {
  materialCells,
  materialRenderers,
} from "@jsonforms/material-renderers";

type JsonSchemaWithComponent = JsonSchema & { component: string };

export const globalRenderer = [...materialRenderers];

export const globalCells = materialCells;

export const REGEX_MATCHERS: Record<string, RegExp> = {
  passwordValidator:
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8}/,
  emailValidator: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
};

export const globalajv = createAjv({
  schemaId: "auto",
  allErrors: true,
  jsonPointers: true,
  errorDataPath: "property",
});

globalajv.addFormat("emailAddress", (email: string): boolean => {
  try {
    return email.match(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,63}$/im)
      ? true
      : false;
  } catch (_) {
    return false;
  }
});
