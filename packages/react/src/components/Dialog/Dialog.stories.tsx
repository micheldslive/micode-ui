/* eslint-disable react/jsx-key */
import { Button, Dialog, type DialogRootProps } from "@micode-ui/react";
import { useArgs } from "@storybook/client-api";
import type { Meta, StoryFn } from "@storybook/react";

export default {
  title: "Overlay/Dialog",
  component: Dialog.Root,
  args: {
    open: false,
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
    open: {
      control: "boolean",
    },
  },
} as Meta;

export const Default: StoryFn<DialogRootProps> = () => {
  const [args, updateArgs] = useArgs();

  return (
    <Dialog.Root onOpenChange={(open) => updateArgs({ open })} {...args}>
      <Dialog.Trigger key="1">
        <Button>Open Dialog</Button>
      </Dialog.Trigger>
      <Dialog.Content key="2">
        <Dialog.Title>Mussum Ipsum cacilds</Dialog.Title>
        <Dialog.Description>
          Mussum Ipsum, cacilds vidis litro abertis. Nulla id gravida magna, ut
          semper sapien
        </Dialog.Description>
      </Dialog.Content>
    </Dialog.Root>
  );
};
