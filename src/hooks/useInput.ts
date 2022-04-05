import { useState } from "react";

export const useInput = (initialValue: string | number | undefined) => {
  const [value, setValue] = useState(initialValue);

  return {
    value,
    setValue,
    reset: () => setValue(undefined),
    bind: {
      value,
      onChange: (event: any) => {
        setValue(event.target.value);
      },
    },
  };
};

export const useNumber = (initialValue: number | undefined) => {
  const [value, setValue] = useState(initialValue);

  return {
    value,
    setValue,
    reset: () => setValue(undefined),
    bind: {
      value,
      onChange: (event: any) => {
        setValue(parseFloat(event.target.value));
      },
    },
  };
};

export const useString = (initialValue: string) => {
  const [value, setValue] = useState(initialValue);

  return {
    value,
    setValue,
    reset: () => setValue(""),
    bind: {
      value,
      onChange: (event: any) => {
        setValue(event.target.value);
      },
    },
  };
};

export const usePhoneNumber = (initialValue: string) => {
  const [value, setValue] = useState(initialValue);

  return {
    value,
    setValue,
    reset: () => setValue(""),
    bind: {
      value,
      onChange: (event: any) => {
        // transform value to phone format "000-000-0000 ext 0000"
        setValue(event.target.value);
      },
    },
  };
};
