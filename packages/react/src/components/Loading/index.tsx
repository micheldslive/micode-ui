import { CircleNotch } from "phosphor-react";
import type { ComponentProps } from "react";

import { keyframes, styled } from "../../styles";

const spin = keyframes({
  from: {
    rotate: "0deg",
  },
  to: {
    rotate: "360deg",
  },
});

export const Loading = styled(CircleNotch, {
  color: "currentColor",
  animation: `${spin} 1s linear infinite`,

  variants: {
    size: {
      sm: {
        width: "$3",
        height: "$3",
      },
      md: {
        width: "$4",
        height: "$4",
      },
      lg: {
        width: "$6",
        height: "$6",
      },
      xl: {
        width: "$8",
        height: "$8",
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
});

Loading.displayName = "Loading";
Loading.defaultProps = {
  "aria-label": "Loading...",
};

export type LoadingProps = ComponentProps<typeof Loading>
