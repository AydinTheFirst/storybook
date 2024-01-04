import { Label, TextInput as TextInput_ } from "flowbite-react";
import React from "react";

import { IconType } from "react-icons";
import { ClearButton } from "./ClearButton";

interface Props {
  id: string;
  type?: "text" | "email" | "password" | "number" | "search" | "tel";
  size?: "sm" | "md" | "lg";
  label?: string;
  buttonLabel?: string;
  placeholder?: string;
  icon?: IconType;
  onClick: () => void;
}

export const InputButton: React.FC<Props> = (props) => {
  return (
    <div>
      <div className="mb-2 block">
        <Label htmlFor={props.id} value={props.label} />
      </div>
      <div className={"relative"}>
        <TextInput_
          id={props.id}
          name={props.id}
          type={props.type}
          sizing={props.size}
          icon={props.icon}
          placeholder={props.placeholder}
        />
        <div className="absolute top-0 right-0">
          <ClearButton onClick={props.onClick} />
        </div>{" "}
      </div>
    </div>
  );
};
