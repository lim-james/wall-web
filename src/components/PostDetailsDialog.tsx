import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
  IconButton,
  Button,
  Box,
} from '@mui/material';
import styled from '@mui/material/styles/styled';
import CloseIcon from '@mui/icons-material/Close';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import FileCopyIcon from '@mui/icons-material/FileCopy';

import Comment from './Comment'; 
import { fetchPostByID } from 'api/api';
import { formatTimestamp } from 'api/dateUtils'; 
import { 
  PostDetailsModel
} from 'models/models';


const ActionButtons = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginTop: theme.spacing(2),
}));

interface PostDetailsDialogProps {
  open: boolean;
  onClose: () => void;
  post_id: number;
}

const PostDetailsDialog: React.FC<PostDetailsDialogProps> = ({
  open,
  onClose,
  post_id,
}) => {
  const [post, setPost] = useState<PostDetailsModel>({
    post_id,
    username: '',
    title: '',
    body: '',
    creation_time: '',
    is_edited: false,
    last_edited_time: '',
    like_count: 0,
    comments: [],
  });

  useEffect(() => {
    const fetchComments = async () => {
      try {
        setPost(await fetchPostByID(post_id));
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };

    fetchComments();
  }, [post_id]);

  const handleLikeClick = () => {
    // Implement your logic for liking the post here
    // You can make an API request or update the likes in your Redux store.
  };

  // Handler for the "subscribe" button
  const handleSubscribeClick = () => {
    // Implement your logic for subscribing to the user here
    // You can make an API request or update the subscription status in your Redux store.
  };

  // Handler for the "copy link" button
  const handleCopyLinkClick = () => {
    // Implement your logic for copying the post link here
    // You can use the Clipboard API or any other method to copy the link.
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>
        <Typography variant="h6">{post.title}</Typography>
        <IconButton
          edge="end"
          color="inherit"
          onClick={onClose}
          aria-label="close"
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Typography variant="caption" color="textSecondary">
          {post.username + ' ' + formatTimestamp(post.creation_time) + (post.is_edited ? ' (edited)' : '')}
        </Typography>
        <Typography variant="body2">{post.body}</Typography>
        <ActionButtons>
          <Button startIcon={<FavoriteIcon />} onClick={handleLikeClick}>
            Like ({post.like_count})
          </Button>
          <Button startIcon={<SubscriptionsIcon />} onClick={handleSubscribeClick}>
            Subscribe
          </Button>
          <Button startIcon={<FileCopyIcon />} onClick={handleCopyLinkClick}>
            Copy Link
          </Button>
        </ActionButtons>
        <div>
          <Typography variant="overline" gutterBottom>
            Comments ({post.comments.length})
          </Typography>
          {post.comments.map((comment) => (
            <Comment key={comment.comment_id} comment={comment} /> 
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PostDetailsDialog;
