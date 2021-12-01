import React from 'react';
import { graphql, Link } from 'gatsby';
import { Heading, Text } from '@chakra-ui/react';
import Layout from '../components/Layout';
import Seo from '../components/seo';

const NotFoundPage = () => {
  return (
    <Layout>
      <Seo title="404: Not Found" />
      <Heading fontSize="4xl" mb="8">404</Heading>
      <Heading fontSize="2xl" mb="6">the page you were looking for doesn&#39;t exist</Heading>
      <Text>You landed on a page that doesn&#39;t exist... click below to head back to the home page.</Text>
      <Link to="/">back to home</Link>
    </Layout>
  );
};

export default NotFoundPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
