import { Avatar, type AvatarRootProps, Box } from "@micode-ui/react";
import type { Meta, StoryFn, StoryObj } from "@storybook/react";
import { User } from "phosphor-react";

export default {
  title: "Data Display/Avatar",
  component: Avatar,
  args: {
    src: "https://github.com/micheldslive.png",
    alt: "Michel Domingos",
  },
  decorators: [(Story) => <Box>{Story()}</Box>],
} as Meta<AvatarRootProps>;

export const Primary: StoryObj<AvatarRootProps> = {};

export const WithFallback: StoryFn<AvatarRootProps> = () => (
  <Avatar>
    <Avatar.Fallback>MD</Avatar.Fallback>
  </Avatar>
);

export const WithFallbackIcon: StoryFn<AvatarRootProps> = () => (
  <Avatar>
    <Avatar.Fallback>
      <User color="#fff" />
    </Avatar.Fallback>
  </Avatar>
);
