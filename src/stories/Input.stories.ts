import type { Meta, StoryObj } from "@storybook/react";

import { Input as Component } from "../components/Input";

const meta: Meta<typeof Component> = {
  title: "Atoms/Input",
  component: Component,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Component>;

export const Base: Story = {
  args: {
    placeholder: "Placeholder",
    sizing: "md",
    helperText: "Helper text",
  },
};

export const Error: Story = {
  args: {
    color: "failure",
    placeholder: "Placeholder",
    sizing: "md",
    helperText: "This is invalid input",
  },
};

export const Success: Story = {
  args: {
    color: "success",
    placeholder: "Placeholder",
    sizing: "md",
    helperText: "This is valid input",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: "Placeholder",
    sizing: "md",
    helperText: "This is disabled input",
  },
};

export const Password: Story = {
  args: {
    type: "password",
    placeholder: "Placeholder",
    sizing: "md",
    helperText: "This is password input",
  },
};
