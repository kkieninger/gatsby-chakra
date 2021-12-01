import React from 'react';
import { WordMarkLink, NavItem } from './Header.styles';
import { Box, Flex } from '@chakra-ui/react';

interface Props {
  links: {
    path: string;
    label: string;
  }[];
}

const Header = ({ links }: Props) => (
  <Flex
    as="header"
    justifyContent="space-between"
    alignItems="center"
    my="8"
  >
    <WordMarkLink to="/">
      kevin kieninger.
    </WordMarkLink>

    <Box as="nav">
      {links.map(link => (
        <NavItem
          key={link.path}
          to={link.path}
          activeStyle={{ color: 'var(--chakra-colors-primary)' }}
        >{link.label}</NavItem>
      ))}
    </Box>
  </Flex>
);

export default Header;
