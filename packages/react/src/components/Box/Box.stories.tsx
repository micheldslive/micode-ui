import { Box, type BoxProps } from "@micode-ui/react";
import type { Meta, StoryFn } from "@storybook/react";

export default {
  title: "Layout/Box",
  component: Box,
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<BoxProps>;

export const Primary: StoryFn<BoxProps> = () => (
  <Box
    css={{
      width: "20rem",
      height: "20rem",
      backgroundColor: "$gray700",
      "&:hover": {
        backgroundColor: "$gray600",
      },
    }}
  />
);
