import React, { FC } from 'react';

import { PostData } from '../types';
import Post from './Post';

interface Props {
  posts: PostData[];
}

const Posts: FC<Props> = ({ posts }) => (
  <ol>
    {posts.map((post) =>
      <li key={post.fields.slug}>
        <Post {...post} />
      </li>
    )}
  </ol>
);

export default Posts;
