import React, { FC } from 'react';
import { graphql, PageProps } from 'gatsby';
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"

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

const AboutPage: FC<PageProps<DataProps>> = ({ data }) => {
  // const photo = data.photo.childImageSharp.fixed;
  const photo = data.photo?.childImageSharp.gatsbyImageData;

  return (
    <Layout>
      <SEO title="About" />
      <main>
        <h1>about</h1>
        <h2>
          hi, i&#39;m <span>kevin.</span>
        </h2>
        <p>
          i&#39;m a full-stack software engineer, with a strong focus in front-end development. i&#39;m <strong>passionate</strong> about software craftsmanship, engineering leadership,
          and solving problems at the intersection between product and technical challenges.
        </p>
        <p>
          <strong>outside of work</strong>, i&#39;m an avid baseball fan, music fanatic, bibliophile, and sci-fi geek. lately you can find me unwinding with a good video game, attempting to golf
          (and failing miserably at it), and slowly amassing a <a href="https://boardgamegeek.com/collection/user/kkieninger?own=1&subtype=boardgame&ff=1" target="_blank" rel="noopener">board game collection</a> to
          collect dust on my shelves.
        </p>
        <p>and as for <strong>vices</strong>? i&#39;m a whiskey aficionado, an amateur mixologist and a cocktail enthusiast. &#x1F943;</p>
        {photo && (
          <div>
            <GatsbyImage image={photo} alt="Kevin Profile Picture" />
          </div>
        )}
        <h2>technology</h2>
        <p>
          a few of my favorite tools and technologies:
        </p>
        <Technologies />
        <p>
          <strong>this site</strong> was built using gatsby, react, typescript, and emotion. the blogs are written with simple markdown files, and the whole thing
          is deployed via netlify. you can find the <a href="https://github.com/kkieninger/gatsby-site" target="_blank" rel="noopener">full source code here</a>, or you can
          build your own with this <a href="https://github.com/kkieninger/gatsby-typescript-blog-starter" target="_blank" rel="noopener">template</a>, which is an extension of
          the <a href="https://github.com/gatsbyjs/gatsby-starter-blog" target="_blank" rel="noopener">fantastic gatsby starter</a>, with a few of my own preferences baked in.
          if you have any questions or if you find any problems, please feel free to open up an issue on github.
        </p>
        <h2>contact</h2>
        <p>
          i&#39;m not much for social media these days, but i try my best to monitor my handles below. if you have a project you want to work on together, or just want to chat, i&#39;d love to hear from you.</p>
        <p>
          email: <a href="mailto:ktkienin@gmail.com">ktkienin@gmail.com</a>
        </p>
      </main>
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
