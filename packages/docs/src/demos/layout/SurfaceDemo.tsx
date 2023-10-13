/** @jsxImportSource react */
import { Surface } from '@micode-ui/react';

export const SurfaceDemo = () => {
  return (
    <Surface
      css={{
        display: 'flex',
        alignItems: 'center',
        gap: 20,
        width: '100%',
        height: '60px',
        color: '$black',
        backgroundColor:'$gray700'
      }}
    >
      Your code here
    </Surface>
  );
};
