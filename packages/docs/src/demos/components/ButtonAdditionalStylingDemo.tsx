/** @jsxImportSource react */
import { Button } from '@micode-ui/react';

export const ButtonAdditionalStylingDemo = () => {
  return (
    <Button
      css={{
        background: '#00875f',
        '&:not(:disabled):hover': {
          background: '#015f43'
        }
      }}
    >
      Hello World!
    </Button>
  );
};
