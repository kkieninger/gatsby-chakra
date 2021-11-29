import React, { FC } from 'react';
import { Link } from 'gatsby';
import { PostData } from '../types';

const Post: FC<PostData> = (props) => {
  return (
    <article
      className="post-list-item"
      itemScope
      itemType="http://schema.org/Article"
    >
      <header>
        <h2>
          <Link
            to={props.fields.slug}
            itemProp="url"
          >
            <span itemProp="headline">{props.frontmatter.title}</span>
          </Link>
        </h2>
        <span>{props.frontmatter.date}</span>
      </header>
      <section>
        <p
          dangerouslySetInnerHTML={{
            __html: props.frontmatter.description || props.excerpt,
          }}
          itemProp="description"
        />
      </section>
    </article>
  );
};

export default Post;
