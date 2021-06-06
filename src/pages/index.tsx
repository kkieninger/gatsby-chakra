import React, { FC } from 'react';
import { graphql, PageProps } from 'gatsby';

// Types
import { Job } from '../types';
// Components
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

const HomePage: FC<PageProps<DataProps>> = ({ data }) => {
  const currentJobs = data.currentJobs.nodes;
  const previousJobs = data.previousJobs.nodes;

  return (
    <Layout>
      <SEO title="Home" />
      <section>
        <p>
          hello, I'm <span>kevin</span>, a software engineer based
          in metro detroit. I love to build tools for the modern web, and I specialize in lots of
          flavors of javascript, but namely reactjs, vuejs, typescript, nodejs, and graphql.
        </p>
      </section>
      <section>
        <h3>current</h3>
        {currentJobs.map((job, index) => <JobListing key={index} {...job} />)}
        <h3>previous</h3>
        {previousJobs.map((job, index) => <JobListing key={index} {...job} />)}
      </section>
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
