import { Box } from '@micode-ui/react';

interface Props {
  css?: any;
  children?: React.ReactNode;
}

export const HeroContainer = ({ css, children }: Props) => {
  return (
    <Box
      role='presentation'
      css={{
        backgroundColor: '#1a1a1a',
        position: 'relative',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: '100px 0',
        borderTopLeftRadius: '$md',
        borderTopRightRadius: '$md',
        border: 0,
        marginTop: '$2',
        ...(css as any)
      }}
    >
      {children}
    </Box>
  );
};
