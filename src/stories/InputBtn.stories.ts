import type { Meta, StoryObj } from "@storybook/react";

import { InputButton as Component } from "../components/InputBtn";

const meta: Meta<typeof Component> = {
  title: "Atoms/Input&Button",
  component: Component,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Component>;

export const Primary: Story = {
  args: {},
};
