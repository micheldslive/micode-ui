import { Box, Button, Toast, type ToastProps } from "@micode-ui/react";
import type { Meta } from "@storybook/react";
import { useState } from "react";

export default {
  title: "Feedback/Toast",
  component: Toast,
  argTypes: {
    isToastOpen: {
      type: "boolean",
      defaultValue: false,
    },
  },
  decorators: [
    (Story) => (
      <Box
        css={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "$gray900",
        }}
      >
        {Story()}
      </Box>
    ),
  ],
} as Meta<ToastProps>;

export const Default = () => {
  const [open, onOpenChange] = useState(false);

  return (
    <>
      <Button onClick={() => onOpenChange(true)}>Add to Cart</Button>
      <Toast
        open={open}
        onOpenChange={onOpenChange}
        title="Added to cart"
        content="You can now continue shipping"
        duration={5000}
      />
    </>
  );
};
