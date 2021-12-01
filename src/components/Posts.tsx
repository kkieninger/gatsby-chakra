import React from 'react';
import { OrderedList, ListItem } from '@chakra-ui/react';
import { PostData } from '../types';
import Post from './Post';

interface Props {
  posts: PostData[];
}

const Posts = ({ posts }: Props) => (
  <OrderedList styleType="none" ml="0">
    {posts.map((post) =>
      <ListItem key={post.fields.slug}>
        <Post {...post} />
      </ListItem>
    )}
  </OrderedList>
);

export default Posts;
