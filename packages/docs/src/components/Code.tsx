import { styled } from '../styles/stitches';

export const Code = styled('code', {
  fontFamily: 'Fira Code',
  fontSize: '$md',
  whiteSpace: 'nowrap',
  padding: '0 3px 2px 3px',
  borderRadius: 0,
  margin: 0,
  height: '$6',

  variants: {
    variant: {
      gray: {
        backgroundColor: '$gray800',
        color: '$gray400'
      },
      violet: {
        backgroundColor: '#251e40',
        color: '#9e8cfc'
      }
    }
  },
  defaultVariants: {
    variant: 'violet'
  }
});
