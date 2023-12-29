import { TextInput, TextInputProps } from "flowbite-react";
import React from "react";

export const Input: React.FC<TextInputProps> = (props) => {
  return <TextInput {...props} />;
};
