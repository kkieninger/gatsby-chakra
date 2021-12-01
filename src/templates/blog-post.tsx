import React from 'react';
import { Link, graphql, PageProps } from 'gatsby';
import { Box, Heading } from '@chakra-ui/react';

import { PostData } from '../types';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import { ArrowLeftIcon } from '../components/icons/utils';

interface Props {
  site: {
    siteMetadata: {
      title: string;
    }
  }
  markdownRemark: PostData;
}

const BlogPostTemplate = ({ data }: PageProps<Props>) => {
  const post = data.markdownRemark;

  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <Box as="article" itemScope itemType="http://schema.org/Article">
        <Box as="header" mb="4">
          <Heading
            as="h1"
            fontSize="4xl"
            mb="8"
            itemProp="headline"
          >
            {post.frontmatter.title}
          </Heading>
          <Heading
            fontSize="2xl"
            mb="6"
            color="primary"
          >
            {post.frontmatter.date}
          </Heading>
        </Box>
        <Box as="section"
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
        />
      </Box>
      <Box as="nav" my="6">
        <Link to="/writing">
          <ArrowLeftIcon verticalAlign="0.063rem" mr="1" boxSize="2" />
          back to writing
        </Link>
      </Box>
    </Layout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($id: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`;
