import React from 'react';
import { Typography } from '@mui/material';
import { formatTimestamp } from 'api/dateUtils';
import { CommentModel } from 'models/models';

interface CommentProps {
  comment: CommentModel;
}

const CommentComponent: React.FC<CommentProps> = ({ comment }) => {
  return (
    <div key={comment.comment_id}>
      <Typography variant="caption" color="textSecondary">
        {comment.username} {formatTimestamp(comment.creation_time)}
        {comment.is_edited ? ' (edited)' : ''}
      </Typography>
      <Typography variant="body2">{comment.text}</Typography>
    </div>
  );
};

export default CommentComponent;
