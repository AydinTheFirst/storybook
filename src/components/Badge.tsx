import { Badge as Badge_, BadgeProps } from "flowbite-react";
import React from "react";

export const Badge: React.FC<BadgeProps> = (props) => {
  return <Badge_ {...props}>{props.color || "Badge"}</Badge_>;
};
