import React, { FC } from 'react';

import JavaScriptIcon from '../components/icons/JavaScriptIcon';
import TypeScriptIcon from '../components/icons/TypeScriptIcon';
import ReactIcon from '../components/icons/ReactIcon';
import NodeIcon from '../components/icons/NodeIcon';
import GraphQLIcon from '../components/icons/GraphQLIcon';
import VueIcon from '../components/icons/VueIcon';
import HTMLIcon from '../components/icons/HTMLIcon';
import CSSIcon from '../components/icons/CSSIcon';
import SassIcon from '../components/icons/SassIcon';
import PostgresIcon from '../components/icons/PostgresIcon';

const Technologies: FC = () => {
  return (
    <section>
      <JavaScriptIcon />
      <TypeScriptIcon />
      <ReactIcon />
      <NodeIcon />
      <GraphQLIcon />
      <VueIcon />
      <HTMLIcon />
      <CSSIcon />
      <SassIcon />
      <PostgresIcon />
    </section>
  );
};

export default Technologies;
