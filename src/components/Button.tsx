import { Button as Button_, ButtonProps } from "flowbite-react";

export const Button: React.FC<ButtonProps> = (props) => {
  return <Button_ {...props}>{props.label}</Button_>;
};
