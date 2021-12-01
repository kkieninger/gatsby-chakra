import React from 'react';
import { graphql, PageProps } from 'gatsby';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import { Box, Center, Text, Heading, Link } from '@chakra-ui/react';

import Layout from '../components/Layout';
import SEO from '../components/seo';
import Technologies from '../components/Technologies';

interface DataProps {
  photo: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData
    } | null;
  }
}

const AboutPage = ({ data }: PageProps<DataProps>) => {
  const photo = data.photo?.childImageSharp.gatsbyImageData;

  return (
    <Layout>
      <SEO title="About" />
      <Box as="section">
        <Heading fontSize="4xl" mb="8">about</Heading>
        <Heading fontSize="2xl" mb="6">
          hi, i&#39;m <Text as="span" color="primary">kevin.</Text>
        </Heading>
        <Text mb="3">
          i&#39;m a full-stack software engineer, with a strong focus in front-end development. i&#39;m <Text as="strong">passionate</Text> about software craftsmanship, engineering leadership,
          and solving problems at the intersection between product and technical challenges.
        </Text>
        <Text mb="3">
          <Text as="strong">outside of work</Text>, i&#39;m an avid baseball fan, music fanatic, bibliophile, and sci-fi geek. lately you can find me unwinding with a good video game, attempting to golf
          (and failing miserably at it), and slowly amassing a <Link href="https://boardgamegeek.com/collection/user/kkieninger?own=1&subtype=boardgame&ff=1" isExternal>board game collection</Link> to
          collect dust on my shelves.
        </Text>
        <Text mb="3">and as for <Text as="strong">vices</Text>? i&#39;m a whiskey aficionado, an amateur mixologist and a cocktail enthusiast. &#x1F943;</Text>
        {photo && (
          <Center my="6">
            <GatsbyImage image={photo} alt="Kevin Profile Picture" />
          </Center>
        )}
        <Heading fontSize="2xl" mb="6">technology</Heading>
        <Text mb="3">
          a few of my favorite tools and technologies:
        </Text>
        <Technologies />
        <Text mb="3">
          <Text as="strong">this site</Text> was built using gatsby, react, typescript, and chakra-ui. the blogs are written with simple markdown files, and the whole thing
          is deployed via gatsby cloud. you can find the <Link href="https://github.com/kkieninger/gatsby-chakra" isExternal>full source code here</Link>, or you can
          build your own with this <Link href="https://github.com/gatsbyjs/gatsby-starter-blog" isExternal>fantastic gatsby starter</Link>.
        </Text>
        <Heading fontSize="2xl" my="6">contact</Heading>
        <Text mb="3">
          i&#39;m not much for social media these days, but i try my best to monitor my handles below. if you have a project you want to work on together, or just want to chat, i&#39;d love to hear from you.
        </Text>
        <Text mb="3">
          email: <Link href="mailto:ktkienin@gmail.com">ktkienin(at)gmail.com</Link>
        </Text>
      </Box>
    </Layout>
  );
};

export default AboutPage;

export const pageQuery = graphql`
  query {
    photo: file(absolutePath: {regex: "/kev.png/"}) {
      childImageSharp {
        gatsbyImageData(layout: FIXED)
      }
    }
  }
`;
