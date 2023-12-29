import type { Meta, StoryObj } from "@storybook/react";
import { List as Component } from "../components/List";
import { FaCheck } from "react-icons/fa";

const meta: Meta<typeof Component> = {
  title: "Atoms/List",
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

export const WithIcon: Story = {
  args: {
    item: {
      icon: FaCheck,
    },
  },
};

export const AsLink: Story = {
  args: {
    item: {
      icon: FaCheck,
      href: "#",
    },
  },
};
