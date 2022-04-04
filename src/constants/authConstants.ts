export const AUTH_INITIAL_CONTEXT = {
  token: null,
};

export const AUTH_MESSAGES: Record<string, string> = {
  EMAIL_VALIDATION: "Please enter valid email address",
  PASSWORD_STRONG: "Enter strong password",
};

export const LOGIN_SCHEMA = {
  type: "object",
  properties: {
    username: {
      type: "string",
      minLength: 3,
      format: "emailAddress",
      errorMessage: { format: AUTH_MESSAGES.EMAIL_VALIDATION },
    },
    password: {
      type: "string",
      minLength: 1,
    },
  },
  required: ["username", "password"],
};

export const LOGIN_UI_SCHEMA = {
  type: "VerticalLayout",
  elements: [
    {
      type: "Control",
      scope: "#/properties/username",
    },
    {
      type: "Control",
      scope: "#/properties/password",
    },
  ],
};
