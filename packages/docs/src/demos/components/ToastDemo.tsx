import { Button, Surface, Toast } from "@micode-ui/react";
import { useState } from "react";

export const ToastDemo = () => {
  const [open, onOpenChange] = useState(false);
  return (
    <Surface>
      <Button onClick={() => onOpenChange(true)}>Add to Cart</Button>
      <Toast
        open={open}
        onOpenChange={onOpenChange}
        title="Added to cart"
        content="You can now continue shipping"
        duration={5000}
      />
    </Surface>
  );
};
