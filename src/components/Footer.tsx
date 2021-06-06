import React, { FC } from 'react';
import { Flex, Divider, Link, Text } from '@chakra-ui/react';
import { GitHubIcon, LinkedInIcon, TwitterIcon } from './icons/social';

const iconStyles = {
  transition: 'all 0.2s ease',
  _hover: { color: 'primary' },
};

const socialLinks = [
  {
    platform: 'GitHub',
    href: 'https://github.com/kkieninger',
    icon: <GitHubIcon {...iconStyles} />,
  },
  {
    platform: 'LinkedIn',
    href: 'https://linkedin.com/in/kkieninger',
    icon: <LinkedInIcon {...iconStyles} />,
  },
  {
    platform: 'Twitter',
    href: 'https://twitter.com/kevinkieninger',
    icon: <TwitterIcon {...iconStyles} />,
  },
];

const Footer: FC = () => (
  <Flex
    as="footer"
    direction="column"
    align="center"
    my="10"
    p="3"
  >
    <Divider width="95px" borderColor="text" mb="5" />
    <Text fontWeight="300">kevin kieninger | {new Date().getFullYear()}</Text>
    <Flex as="nav" my="4">
      {socialLinks.map(link => (
        <Link href={link.href} isExternal mx="3">
          {link.icon}
          <Text fontSize="0">Link to {link.platform}</Text>
        </Link>  
      ))}
    </Flex>
  </Flex>
);

export default Footer;
