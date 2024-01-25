import React, { useState } from 'react';
import {
  ListItemButton,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Typography,
  Divider
} from '@mui/material';

import PostDetailsDialog from './PostDetailsDialog';
import { formatTimestamp } from 'api/dateUtils';
import { PostModel } from 'models/models';

interface PostProps {
  post: PostModel;
}

const Post: React.FC<PostProps> = ({ post }) => {
  const [openDialog, setOpenDialog] = useState(false);

  const handleCardClick = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <>
      <ListItemButton alignItems="flex-start" onClick={handleCardClick}>
        <ListItemAvatar>
          <Avatar alt={post.username} src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary={post.title}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {post.username} • {formatTimestamp(post.creation_time)}  {" "}
              </Typography>
              {post.body}
            </React.Fragment>
          }
        />
      </ListItemButton>
      <Divider variant="inset" component="li" />
      <PostDetailsDialog
        open={openDialog}
        onClose={handleCloseDialog}
        post_id={post.post_id}
      />
    </>
  );
};

export default Post;
