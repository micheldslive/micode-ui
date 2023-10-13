import { useState } from 'react';
import {
  Dropdown,
  Item,
  Links,
  MobileMenu,
  StyledIcon,
  Wrapper
} from './styles';

type Link = {
  href?: string;
  label: string;
  content?: Link[];
};

interface HeaderProps {
  links: Link[];
}

export const Header = ({ links }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(state => !state);
  };

  return (
    <>
      <Wrapper>
        <a href='/'>
          <StyledIcon src='/favicon.svg' alt='Favicon' width={45} height={45} />
        </a>

        <Links>
          {links.map(link => (
            <Item href={link.href}>{link.label}</Item>
          ))}
        </Links>

        <MobileMenu onClick={toggleOpen} />
      </Wrapper>
      {isOpen && (
        <>
          <Dropdown variant='mobile'>
            {links.map(link => (
              <Item key={link.label} href={link.href}>
                {link.label}
              </Item>
            ))}
          </Dropdown>
        </>
      )}
    </>
  );
};
