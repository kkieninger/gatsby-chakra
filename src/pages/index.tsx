import React from 'react';
import { graphql, PageProps } from 'gatsby';
import { Box, Heading, Text } from '@chakra-ui/react';

import { Job } from '../types';

import Layout from '../components/Layout';
import SEO from '../components/seo';
import { JobListing } from '../components/JobListing';


interface DataProps {
  site: {
    siteMetadata: {
      title: string;
    }
  }
  currentJobs: {
    nodes: Job[];
  }
  previousJobs: {
    nodes: Job[];
  }
}

const HomePage = ({ data }: PageProps<DataProps>) => {
  const currentJobs = data.currentJobs.nodes;
  const previousJobs = data.previousJobs.nodes;

  return (
    <Layout>
      <SEO title="Home" />
      <Box as="section" mb="8">
        <Text fontSize="2xl" fontWeight="600">
          hello, I'm <Text as="span" color="primary">kevin</Text>, a software engineer based
          in metro detroit. I love to build tools for the modern web, and I specialize in lots of
          flavors of javascript, but namely reactjs, vuejs, typescript, nodejs, and graphql.
        </Text>
      </Box>
      <Box as="section">
        <Heading fontSize="3xl" mt="3" mb="5">current</Heading>
        {currentJobs.map((job, index) => <JobListing key={index} {...job} />)}
        <Heading fontSize="3xl" mt="3" mb="5">previous</Heading>
        {previousJobs.map((job, index) => <JobListing key={index} {...job} />)}
      </Box>
    </Layout>
  );
};

export default HomePage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    currentJobs: allJobs(filter: {current: {eq: true}}) {
      nodes {
        company
        current
        description
        title
        years
      }
    }
    previousJobs: allJobs(filter: {current: {eq: false}}) {
      nodes {
        company
        current
        description
        title
        years
      }
    }
  }
`
