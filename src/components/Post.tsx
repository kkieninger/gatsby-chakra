import React from 'react';
import { Link } from 'gatsby';
import { Box, Heading, Text, Divider, chakra } from '@chakra-ui/react';
import { PostData } from '../types';

const ChakraLink = chakra(Link, {
  baseStyle: {
    hr: {
      maxW: '40px',
      transition: 'all 0.3s ease',
    },
    _hover: {
      textDecoration: 'none',
      hr: {
        maxW: '60px',
        transition: 'all 0.3s ease',
      }
    },
  },
})

const Post = ({ fields, frontmatter, excerpt }: PostData) => {
  return (
    <Box
      as="article"
      itemScope
      itemType="http://schema.org/Article"
      mb="6"
    >
      <ChakraLink to={fields.slug} itemProp="url">
      <Box as="header" mb="1">
        <Heading
          as="h2"
          fontSize="lg"
          fontWeight="600"
          mb="1"
          itemProp="headline"
        >
          {frontmatter.title}
        </Heading>
        <Text
          as="span"
          fontWeight="300"
          fontSize="sm"
          color="text"
        >
          {frontmatter.date}
        </Text>
      </Box>
      <Divider
        borderColor="primary"
        borderWidth="4px"
        mb="3"
      />
      <Box as="section">
        <Text
          dangerouslySetInnerHTML={{
            __html: frontmatter.description || excerpt,
          }}
          color="text"
          itemProp="description"
        />
      </Box>
      </ChakraLink>
    </Box>
  );
};

export default Post;
