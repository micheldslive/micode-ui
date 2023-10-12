import { type ComponentProps } from "react";

import { Container, Fallback, Image } from "./styles";

type AvatarRootProps = ComponentProps<typeof Image>;

const AvatarRoot = ({ children, ...props }: AvatarRootProps) => {
  return (
    <Container>
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      <Image {...props} />

      {children}
    </Container>
  );
};

AvatarRoot.displayName = "Avatar";

/* ----------------------------------------------------------------------------------------------- */

type AvatarFallbackProps = ComponentProps<typeof Fallback>;

const AvatarFallback = ({ children, ...props }: AvatarFallbackProps) => {
  return <Fallback {...props}>{children}</Fallback>;
};

AvatarFallback.displayName = "Avatar.Fallback";

/* ----------------------------------------------------------------------------------------------- */

export const Avatar = Object.assign(AvatarRoot, {
  Root: AvatarRoot,
  Fallback: AvatarFallback,
});

export type { AvatarRootProps, AvatarFallbackProps };
