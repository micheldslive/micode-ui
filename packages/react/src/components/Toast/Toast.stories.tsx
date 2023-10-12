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
    (Story: () => unknown) => (
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
  const [isToastOpen, setIsToastOpen] = useState(false);

  const setToastIsOpen = (boolean: boolean) => {
    setIsToastOpen(boolean);
  };

  return (
    <>
      <Button onClick={() => setToastIsOpen(true)}>Add to Cart</Button>
      <Toast
        isOpen={isToastOpen}
        setIsOpen={setToastIsOpen}
        title="Added to cart"
        content="You can now continue shipping"
      />
    </>
  );
};
