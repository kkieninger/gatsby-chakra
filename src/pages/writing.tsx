import React, { FC } from 'react';
import { graphql, PageProps } from 'gatsby';

import { PostData } from '../types';

import Layout from '../components/Layout';
import Seo from '../components/seo';
import Posts from '../components/Posts';

interface DataProps {
  allMarkdownRemark: {
    nodes: PostData[];
  };
}

const WritingPage: FC<PageProps<DataProps>> = ({ data }) => {
  const posts = data.allMarkdownRemark.nodes;

  return (
    <Layout>
      <Seo title="All posts" />
      <h1>writing</h1>
      <Posts posts={posts} />

      {!posts.length &&
        <p>there's either no blog posts available right now, or we had trouble fetching them. please try again later.</p>
      }
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
