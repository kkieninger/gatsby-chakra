import React, { FC } from 'react';
import Header from './header';
import Footer from './footer';

const Layout: FC = ({ children }) => {
  const links = [
    { path: '/', label: 'home' },
    { path: '/writing', label: 'writing' },
    { path: '/about', label: 'about' },
  ];

  return (
    <div className="global-wrapper">
      <Header { ...{ links } } />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
