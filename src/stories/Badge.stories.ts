import type { Meta, StoryObj } from "@storybook/react";
import { Badge as Component } from "../components/Badge";

const meta: Meta<typeof Component> = {
  title: "Atoms/Badge",
  component: Component,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Component>;

export const Default: Story = {
  args: {},
};

export const Success: Story = {
  args: {
    color: "success",
  },
};

export const Failure: Story = {
  args: {
    color: "failure",
  },
};

export const Warning: Story = {
  args: {
    color: "warning",
  },
};

export const Info: Story = {
  args: {
    color: "info",
  },
};

export const Gray: Story = {
  args: {
    color: "gray",
  },
};

export const Light: Story = {
  args: {
    color: "light",
  },
};
