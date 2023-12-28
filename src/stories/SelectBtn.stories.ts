import type { Meta, StoryObj } from "@storybook/react";

import { SelectButton as Component } from "../components/SelectBtn";

const meta: Meta<typeof Component> = {
  title: "Atoms/Select&Button",
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
