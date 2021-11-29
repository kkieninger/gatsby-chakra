import React, { FC } from 'react';
import { WordMarkLink, NavItem } from './styles';
import { Box, Flex } from '@chakra-ui/react';

interface Props {
  links: {
    path: string;
    label: string;
  }[];
}

const Header: FC<Props> = ({ links }) => (
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
      {links.map((link, index) => (
        <NavItem
          key={index}
          to={link.path}
        >{link.label}</NavItem>
      ))}
    </Box>
  </Flex>
);

export default Header;
