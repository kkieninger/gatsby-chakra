import { Link } from 'gatsby';
import { chakra } from '@chakra-ui/react';

export const WordMarkLink = chakra(Link, {
  baseStyle: {
    fontSize: {
      base: 'lg',
      sm: 'xl',
    },
    fontWeight: 600,
    color: 'primary',
    _hover: {
      textDecoration: 'none',
    },
  },
});

export const NavItem = chakra(Link, {
  baseStyle: {
    color: 'text',
    fontSize: {
      base: 'sm',
      sm: 'md',
    },
    ml: '3',
    _hover: {
      color: 'primary',
      textDecoration: 'none',
    },
  },
});
