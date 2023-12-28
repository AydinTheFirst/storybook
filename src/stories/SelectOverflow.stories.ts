import type { Meta, StoryObj } from "@storybook/react";
import { SelectOverflow as Component } from "../components/SelectOverflow";

const meta: Meta<typeof Component> = {
  title: "Atoms/SelectOverflow",
  component: Component,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Component>;

export const Primary: Story = {
  args: {
    buttonLabel: "Submit",
  },
};
