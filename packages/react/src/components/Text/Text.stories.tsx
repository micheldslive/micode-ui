import { Text, type TextProps } from "@micode-ui/react";
import type { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Typography/Text",
  component: Text,
  args: {
    children:
      "Mussum Ipsum, cacilds vidis litro abertis. Nulla id gravida magna, ut semper sapien. Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis.",
    size: "md",
  },
  argTypes: {
    size: {
      options: [
        "xxs",
        "xs",
        "sm",
        "md",
        "lg",
        "xl",
        "2xl",
        "4xl",
        "5xl",
        "6xl",
        "7xl",
        "8xl",
        "9xl",
      ],
      control: {
        type: "inline-radio",
      },
    },
  },
} as Meta<TextProps>;

export const Primary: StoryObj<TextProps> = {};

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: "StrongText",
    as: "strong",
  },
};
