import { Button, CustomFlowbiteTheme, Tooltip } from "flowbite-react";
import React from "react";
import { FaBackspace } from "react-icons/fa";

const theme: CustomFlowbiteTheme["button"] = {
  color: {
    default:
      "enabled:focus:ring-0 text-gray-400 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-50",
  },
};

interface Props {
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  onClick: () => void;
}

export const ClearButton: React.FC<Props> = (props) => {
  return (
    <Tooltip content="Clear Input">
      <Button {...props} color="default" theme={theme} title="Clear">
        <FaBackspace />
        <span className="sr-only">Close</span>
      </Button>
    </Tooltip>
  );
};
