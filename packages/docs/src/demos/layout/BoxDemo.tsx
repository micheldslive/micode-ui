/** @jsxImportSource react */
import { Box } from '@micode-ui/react';

export const BoxDemo = () => {
  return (
    <Box
      css={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '20rem',
        height: '20rem',
        color: '$black',
        backgroundColor:'$gray700'
      }}
    >
      Your code here
    </Box>
  );
};
