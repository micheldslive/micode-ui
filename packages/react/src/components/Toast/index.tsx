import * as ToastPrimitive from "@radix-ui/react-toast";
import { X } from "phosphor-react";
import { Close, Description, Root, Title, Viewport } from "./styles";

const Provider = ToastPrimitive.Provider;

export interface ToastProps extends ToastPrimitive.ToastProps {
  title?: string;
  swipeDirection?: ToastPrimitive.SwipeDirection;
}

export const Toast = ({
  title,
  content,
  swipeDirection = "right",
  ...props
}: ToastProps) => {
  return (
    <Provider swipeDirection={swipeDirection}>
      <Root {...props}>
        <Title>{title}</Title>
        <Description>{content}</Description>
        <Close asChild>
          <X />
        </Close>
      </Root>

      <Viewport />
    </Provider>
  );
};

Toast.displayName = "Toast";
