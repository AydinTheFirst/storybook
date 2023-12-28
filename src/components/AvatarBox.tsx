import { Avatar, AvatarProps } from "flowbite-react";
import React from "react";

export const AvatarBox: React.FC<AvatarProps> = (props) => {
  return (
    <Avatar
      {...props}
      alt="user"
      img="https://avatars.githubusercontent.com/u/84444757?v=4"
    />
  );
};
