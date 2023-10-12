import { Button, type ButtonProps } from "@micode-ui/react";
import type { Meta, StoryObj, StoryFn } from "@storybook/react";
import { ArrowRight } from "phosphor-react";

export default {
  title: "Form/Button",
  component: Button,
  args: {
    children: "LABEL",
    variant: "primary",
    size: "md",
  },
  argTypes: {
    variant: {
      options: ["primary", "secondary", "tertiary", "danger"],
      control: {
        type: "inline-radio",
      },
    },
    size: {
      options: ["sm", "md", "lg"],
      control: {
        type: "inline-radio",
      },
    },
    full: {
      type: "boolean",
      defaultValue: false,
    },
    disabled: {
      type: "boolean",
      defaultValue: false,
    },
    loading: {
      type: "boolean",
      defaultValue: false,
    },
  },
} as Meta<ButtonProps>;

const args = {
  full: false,
  disabled: false,
  loading: false,
};

export const Primary: StoryObj<ButtonProps> = { args };

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    variant: "secondary",
    ...args,
  },
};

export const Tertiary: StoryObj<ButtonProps> = {
  args: {
    variant: "tertiary",
    ...args,
  },
};

export const Danger: StoryObj<ButtonProps> = {
  args: {
    variant: "danger",
    ...args,
  },
};

export const Disabled: StoryObj<ButtonProps> = {
  args: {
    ...args,
    disabled: true,
  },
};

export const Full: StoryObj<ButtonProps> = {
  args: {
    ...args,
    full: true,
  },
};

export const Loading: StoryObj<ButtonProps> = {
  args: {
    ...args,
    loading: true,
  },
};

export const WithIcon: StoryFn<ButtonProps> = () => (
  <Button>
    Next Step
    <Button.RightIcon
      css={{
        transition: "transform 0.3s ease",

        '&[data-hover="true"]': {
          transform: "translateX(5px)",
        },
      }}
    >
      <ArrowRight weight="bold" />
    </Button.RightIcon>
  </Button>
);

export const AsAnchor: StoryFn<ButtonProps> = () => (
  <Button as="a">I&apos;m an anchor!</Button>
);
