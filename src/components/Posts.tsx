import React from 'react';
import { PostData } from '../types';
import Post from './Post';

interface Props {
  posts: PostData[];
}

const Posts = ({ posts }: Props) => (
  <ol>
    {posts.map((post) =>
      <li key={post.fields.slug}>
        <Post {...post} />
      </li>
    )}
  </ol>
);

export default Posts;
