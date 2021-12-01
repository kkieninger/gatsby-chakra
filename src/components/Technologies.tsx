import React from 'react';
import { Flex, Text } from '@chakra-ui/react';
import {
  JavaScriptIcon,
  TypeScriptIcon,
  ReactIcon,
  NodeIcon,
  GraphQLIcon,
  VueIcon,
  HTMLIcon,
  CSSIcon,
  SassIcon,
  PostgresIcon,
} from '../components/icons/technology';

const iconStyles = {
  boxSize: '50px',
};

const technologies = [
  { name: 'javascript', icon: JavaScriptIcon },
  { name: 'typescript', icon: TypeScriptIcon },
  { name: 'react', icon: ReactIcon },
  { name: 'node.js', icon: NodeIcon },
  { name: 'graphql', icon: GraphQLIcon },
  { name: 'vue.js', icon: VueIcon },
  { name: 'html', icon: HTMLIcon },
  { name: 'css', icon: CSSIcon },
  { name: 'sass', icon: SassIcon },
  { name: 'postgresql', icon: PostgresIcon },
];

const Technologies = () => (
  <Flex
    as="section"
    wrap="wrap"
    justify="center"
    align="center"
    my={4}
  >
    {technologies.map(tech => (
      <Flex
        direction="column"
        align="center"
        justify="center"
        flex={{ base: '0 1 33%', md: '0 1 15%' }}
        my={3}
      >
        {<tech.icon {...iconStyles} />}
        <Text>{tech.name}</Text>
      </Flex>
    ))}
  </Flex>
);

export default Technologies;
