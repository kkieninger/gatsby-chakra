import React, { FC } from 'react';
import { Link } from 'gatsby';

interface Props {
  links: {
    path: string;
    label: string;
  }[];
}

const Header: FC<Props> = ({ links }) => {

  return (
    <header>
      <Link
        to="/"
      >
        <span>kevin kieninger.</span>
      </Link>

      <nav>
        {/* this is throwing */}
        {links.map((link, index) => (
          <Link
            key={index}
            to={link.path}
          >{link.label}</Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
