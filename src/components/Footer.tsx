import React, { FC } from 'react';

import GitHubIcon from '../components/icons/GitHubIcon';
import LinkedInIcon from '../components/icons/LinkedInIcon';
import TwitterIcon from '../components/icons/TwitterIcon';

const Footer: FC = () => {
  return (
    <footer>
      <span>kevin kieninger | {new Date().getFullYear()}</span>
      <nav>
        <a
          href="//github.com/kkieninger"
          target="_blank"
          rel="noopener"
        >
          <GitHubIcon />
          <span>Link to GitHub</span>
        </a>
        <a
          href="//linkedin.com/in/kkieninger"
          target="_blank"
          rel="noopener"
        >
          <LinkedInIcon />
          <span>Link to LinkedIn</span>
        </a>
        <a
          href="//twitter.com/kevinkieninger"
          target="_blank"
          rel="noopener"
        >
          <TwitterIcon />
          <span>Link to Twitter</span>
        </a>
      </nav>
    </footer>
  );
};

export default Footer;
