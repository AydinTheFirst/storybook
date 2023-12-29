import type { Meta, StoryObj } from "@storybook/react";

import { Colors as Component } from "../components/Colors";

const meta: Meta<typeof Component> = {
  title: "Atoms/Colors",
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
    styles: [
      {
        bgColor: "bg-blue-500",
        textColor: "text-white",
      },
      {
        bgColor: "bg-blue-600",
        textColor: "text-white",
      },
      {
        bgColor: "bg-blue-700",
        textColor: "text-white",
      },
    ],
  },
};

export const Info: Story = {
  args: {
    styles: [
      {
        bgColor: "bg-cyan-500",
        textColor: "text-white",
      },
      {
        bgColor: "bg-cyan-600",
        textColor: "text-white",
      },
      {
        bgColor: "bg-cyan-700",
        textColor: "text-white",
      },
    ],
  },
};

export const Success: Story = {
  args: {
    styles: [
      {
        bgColor: "bg-green-500",
        textColor: "text-white",
      },
      {
        bgColor: "bg-green-600",
        textColor: "text-white",
      },
      {
        bgColor: "bg-green-700",
        textColor: "text-white",
      },
    ],
  },
};

export const Warning: Story = {
  args: {
    styles: [
      {
        bgColor: "bg-yellow-400",
        textColor: "text-white",
      },
      {
        bgColor: "bg-yellow-500",
        textColor: "text-white",
      },
      {
        bgColor: "bg-yellow-600",
        textColor: "text-white",
      },
    ],
  },
};

export const Danger: Story = {
  args: {
    styles: [
      {
        bgColor: "bg-red-500",
        textColor: "text-white",
      },
      {
        bgColor: "bg-red-600",
        textColor: "text-white",
      },
      {
        bgColor: "bg-red-700",
        textColor: "text-white",
      },
    ],
  },
};

export const Light: Story = {
  args: {
    styles: [
      {
        bgColor: "bg-gray-100",
        textColor: "text-gray-800",
      },
      {
        bgColor: "bg-gray-200",
        textColor: "text-gray-800",
      },
      {
        bgColor: "bg-gray-300",
        textColor: "text-gray-800",
      },
    ],
  },
};

export const Dark: Story = {
  args: {
    styles: [
      {
        bgColor: "bg-gray-700",
        textColor: "text-white",
      },
      {
        bgColor: "bg-gray-800",
        textColor: "text-white",
      },
      {
        bgColor: "bg-gray-900",
        textColor: "text-white",
      },
    ],
  },
};
