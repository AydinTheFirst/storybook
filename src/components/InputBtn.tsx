import { Button, Label, TextInput as TextInput_ } from "flowbite-react";
import React from "react";

import { IconType } from "react-icons";

interface Props {
  id: string;
  type?: "text" | "email" | "password" | "number" | "search" | "tel";
  size?: "sm" | "md" | "lg";
  label?: string;
  buttonLabel?: string;
  placeholder?: string;
  icon?: IconType;
  onClick?: () => void;
}

export const InputButton: React.FC<Props> = (props) => {
  return (
    <div>
      <div className="mb-2 block">
        <Label htmlFor={props.id} value={props.label} />
      </div>
      <div className={"flex gap-1 items-center"}>
        <TextInput_
          id={props.id}
          name={props.id}
          type={props.type}
          sizing={props.size}
          icon={props.icon}
          placeholder={props.placeholder}
        />
        <Button size={props.size}>{props.buttonLabel}</Button>
      </div>
    </div>
  );
};
