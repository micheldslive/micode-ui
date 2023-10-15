import { Box, Text, Tooltip, type TooltipProps } from "@micode-ui/react";
import type { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Feedback/Tooltip",
  component: Tooltip,
  args: {
    content: "Hello, World!",
    children: (
      <Box css={{ width: "fit-content" }}>
        <Text>Hover me</Text>
      </Box>
    ),
  },
} as Meta<TooltipProps>;

export const Default: StoryObj<TooltipProps> = {};
