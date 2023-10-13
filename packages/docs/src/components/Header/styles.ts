import Image from 'next/image';
import { List } from 'phosphor-react';
import { styled } from '../../styles/stitches';

export const Wrapper = styled('header', {
  backdropFilter: 'blur(3px)',
  backgroundColor: 'transparent',
  position: 'sticky',
  top: 0,
  zIndex: 2,
  height: '80px',
  borderBottom: '1px solid rgba(255, 255, 255, 0.137) ',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0 100px',

  '@media (max-width: 768px)': {
    padding: '0 20px'
  }
});

export const StyledIcon = styled(Image, {
  transition: '0.2s',
  cursor: 'pointer',

  '&:hover': {
    transition: '0.2s',
    transform: 'scale(1.15) rotate(-45deg)'
  }
});

export const Links = styled('div', {
  gap: '20px',
  display: 'flex',

  '@media (max-width: 605px)': {
    display: 'none'
  }
});

export const Dropdown = styled('div', {
  position: 'relative',
  display: 'inline-block',

  variants: {
    variant: {
      mobile: {
        border: 'rgba(255, 255, 255, 0.137) solid 1px',
        position: 'fixed',
        top: '80px',
        right: 0,
        width: '50%',
        height: '100%',
        zIndex: 2,
        backdropFilter: 'blur(4px)',
        backgroundColor: 'transparent',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: '20px',
        gap: '20px'
      }
    }
  }
});

export const Item = styled('a', {
  textDecoration: 'none',
  paddingBottom: '5px',
  color: 'inherit',
  background: 'linear-gradient(135deg, #9942FE, #3378FF)',
  backgroundSize: '100% 0.1em, 0 0.1em',
  backgroundPosition: '100% 100%, 0 100%',
  backgroundRepeat: 'no-repeat',
  transition: 'background-size 400ms',
  fontSize: '20px',
  cursor: 'pointer',

  '&:hover, &:focus': {
    backgroundSize: '0 0.1em, 100% 0.1em'
  }
});

export const MobileMenu = styled(List, {
  cursor: 'pointer',
  display: 'none',
  fontSize: '32px',

  '@media (max-width: 605px)': {
    display: 'block'
  }
});
