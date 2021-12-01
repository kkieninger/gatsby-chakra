import React from 'react';
import { Link } from 'gatsby';
import { PostData } from '../types';

const Post = ({ fields, frontmatter, excerpt }: PostData) => {
  return (
    <article
      className="post-list-item"
      itemScope
      itemType="http://schema.org/Article"
    >
      <header>
        <h2>
          <Link
            to={fields.slug}
            itemProp="url"
          >
            <span itemProp="headline">{frontmatter.title}</span>
          </Link>
        </h2>
        <span>{frontmatter.date}</span>
      </header>
      <section>
        <p
          dangerouslySetInnerHTML={{
            __html: frontmatter.description || excerpt,
          }}
          itemProp="description"
        />
      </section>
    </article>
  );
};

export default Post;
