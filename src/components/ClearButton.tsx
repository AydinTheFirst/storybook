import { Button, Tooltip } from "flowbite-react";
import React from "react";
import { FaBackspace } from "react-icons/fa";
import { buttonTheme } from "../contants";

interface Props {
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  onClick: () => void;
}

export const ClearButton: React.FC<Props> = (props) => {
  return (
    <Tooltip content="Clear Input">
      <Button
        size={"lg"}
        {...props}
        color="default"
        theme={buttonTheme}
        title="Clear"
      >
        <FaBackspace />
        <span className="sr-only">Close</span>
      </Button>
    </Tooltip>
  );
};
