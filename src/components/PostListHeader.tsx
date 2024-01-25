import { ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import { ReactElement } from "react";

interface PostListHeaderProps {
  postCount: number;
  sortMethod: string;
  onSortChange: ((event: React.MouseEvent<HTMLElement, MouseEvent>, value: any) => void) | undefined
}

const PostListHeader = ({
  postCount,
  sortMethod,
  onSortChange,
}: PostListHeaderProps): ReactElement => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <Typography variant="overline" gutterBottom component="div">
        {postCount} posts
      </Typography>
      <ToggleButtonGroup
        value={sortMethod}
        exclusive
        onChange={onSortChange}
        aria-label="sort option"
      >
        <ToggleButton value="time" aria-label="sort by time">
          By Time
        </ToggleButton>
        <ToggleButton value="likes" aria-label="sort by likes">
          By Likes
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  )
}

export default PostListHeader;