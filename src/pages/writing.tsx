import React from 'react';
import { graphql, PageProps } from 'gatsby';
import { Heading, Text } from '@chakra-ui/react';
import { PostData } from '../types';

import Layout from '../components/Layout';
import Seo from '../components/seo';
import Posts from '../components/Posts';

interface DataProps {
  allMarkdownRemark: {
    nodes: PostData[];
  };
}

const WritingPage = ({ data }: PageProps<DataProps>) => {
  const posts = data.allMarkdownRemark.nodes;

  return (
    <Layout>
      <Seo title="All posts" />
      <Heading fontSize="4xl" mb="8">writing</Heading>
      {posts.length ? (
        <Posts posts={posts} />
      ) : (
        <Text>there's either no blog posts available right now, or we had trouble fetching them. please try again later.</Text>
      )}
    </Layout>
  );
};

export default WritingPage;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`;
