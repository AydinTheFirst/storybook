import type { Meta, StoryObj } from "@storybook/react";

import { DateRangePicker as Component } from "../components/DateRangePicker";

const meta: Meta<typeof Component> = {
  title: "Atoms/DateRangePicker",
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
