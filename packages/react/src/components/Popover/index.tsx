import * as PopoverPrimitive from "@radix-ui/react-popover";
import { X } from "phosphor-react";
import {
  type ComponentProps,
  type ElementRef,
  forwardRef,
  useState,
} from "react";

import type { CSS } from "../../styles";
import { Close, StyledArrow, StyledContent } from "./styles";

const Root = PopoverPrimitive.Root;
const Portal = PopoverPrimitive.Portal;
const Trigger = PopoverPrimitive.Trigger;

type PopoverProps = ComponentProps<typeof PopoverPrimitive.Root>;

const PopoverRoot = ({ children, defaultOpen, ...props }: PopoverProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  return (
    <Root open={isOpen} onOpenChange={setIsOpen} {...props}>
      {children}
    </Root>
  );
};

PopoverRoot.displayName = "Popover.Root";

/* ----------------------------------------------------------------------------------------------- */

type PopoverContentProps = ComponentProps<typeof StyledContent> & {
  css?: CSS;
  hideArrow?: boolean;
  hideClose?: boolean;
};

const PopoverContent = forwardRef<
  ElementRef<typeof StyledContent>,
  PopoverContentProps
>(
  (
    { children, hideArrow = false, hideClose = false, ...props },
    fowardedRef
  ) => (
    <Portal>
      <StyledContent sideOffset={2} {...props} ref={fowardedRef}>
        {children}
        {!hideArrow && <StyledArrow />}
        {!hideClose && (
          <Close asChild>
            <X />
          </Close>
        )}
      </StyledContent>
    </Portal>
  )
);

PopoverContent.displayName = "Popover.Content";

/* ----------------------------------------------------------------------------------------------- */

Trigger.displayName = "Popover.Trigger";

export const Popover = Object.assign(PopoverRoot, {
  Root: PopoverRoot,
  Trigger,
  Content: PopoverContent,
});

export type { PopoverProps, PopoverContentProps };
