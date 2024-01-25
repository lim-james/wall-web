import { ReactElement } from 'react';
import { List } from '@mui/material';

import Post from './Post';
import { PostModel } from 'models/models';

interface PostListProps {
  posts: PostModel[];
}

const PostList = ({ 
  posts,
}: PostListProps): ReactElement => {
  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      {posts.map((post: PostModel) => (
        <Post key={post.post_id} post={post} />
      ))}
    </List>
  );
};

export default PostList;