import { IconButton, type IconButtonProps } from "@micode-ui/react";
import type { Meta, StoryObj } from "@storybook/react";
import { Plus, Trash, User } from "phosphor-react";

const iconArgType = {
  options: ["noIcon", "Plus", "Plus", "Trash"],
  mapping: {
    noIcon: null,
    User: <User />,
    Plus: <Plus />,
    Trash: <Trash />,
  },
  control: {
    type: "select",
    labels: {
      noIcon: "No Icon",
    },
  },
};

export default {
  title: "Form/IconButton",
  component: IconButton,
  args: {
    children: <Plus />,
    variant: "primary",
    size: "md",
  },
  argTypes: {
    variant: {
      options: ["primary", "secondary", "tertiary"],
      control: {
        type: "inline-radio",
      },
    },
    size: {
      options: ["xs", "sm", "md", "lg"],
      control: {
        type: "inline-radio",
      },
    },
    disabled: {
      type: "boolean",
      defaultValue: false,
    },
    loading: {
      type: "boolean",
      defaultValue: false,
    },
    children: iconArgType,
  },
} as Meta<IconButtonProps>;

const args = {
  disabled: false,
  loading: false,
};

export const Primary: StoryObj<IconButtonProps> = { args };

export const Secondary: StoryObj<IconButtonProps> = {
  args: {
    variant: "secondary",
    ...args,
  },
};

export const Tertiary: StoryObj<IconButtonProps> = {
  args: {
    variant: "tertiary",
    ...args,
  },
};

export const Disabled: StoryObj<IconButtonProps> = {
  args: {
    ...args,
    disabled: true,
  },
};

export const Loading: StoryObj<IconButtonProps> = {
  args: {
    ...args,
    loading: true,
  },
};
