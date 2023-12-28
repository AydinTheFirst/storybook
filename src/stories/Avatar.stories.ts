import type { Meta, StoryObj } from "@storybook/react";

import { AvatarBox as Component } from "../components/AvatarBox";

const meta: Meta<typeof Component> = {
  title: "Atoms/Avatar",
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
