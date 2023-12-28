import type { Meta, StoryObj } from "@storybook/react";

import { Dashboard as Component } from "../assets/pages/Dashboard";

const meta: Meta<typeof Component> = {
  title: "Pages/Dashboard",
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
