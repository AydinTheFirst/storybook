import { CustomFlowbiteTheme } from "flowbite-react";

export const baseClass =
  "flex gap-1 items-center px-1 dark:bg-gray-700 border-b rounded-t bg-gray-50";

const baseTheme = "focus:border-none focus:outline-none bg-gray-50";

export const textInputTheme: CustomFlowbiteTheme["textInput"] = {
  field: {
    input: {
      base: baseTheme,
    },
  },
};

export const selectInputTheme: CustomFlowbiteTheme["select"] = {
  field: {
    select: {
      base: baseTheme,
    },
  },
};
