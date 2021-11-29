import React, { FC } from 'react';
import { Container } from '@chakra-ui/react';
import Header from './Header';
import Footer from './Footer';
import { Box } from '@chakra-ui/react';

const Layout: FC = ({ children }) => {
  const links = [
    { path: '/', label: 'home' },
    { path: '/writing', label: 'writing' },
    { path: '/about', label: 'about' },
  ];

  return (
    <Container maxW="900" minH="100vh" display="flex" flexDirection="column">
      <Header { ...{ links } } />
      <Box as="main" mt="12" flexGrow={1}>{children}</Box>
      <Footer />
    </Container>
  )
}

export default Layout
