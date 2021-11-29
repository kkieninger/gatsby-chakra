import { Link } from 'gatsby';
import { chakra } from '@chakra-ui/react';

export const WordMarkLink = chakra(Link, {
  baseStyle: {
    fontSize: 'xl',
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
    ml: '3',
    _hover: {
      color: 'primary',
    },
  },
});
