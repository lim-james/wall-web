import { ReactElement, useState } from "react";

import PostList from "./PostList";
import PostListHeader from "./PostListHeader";
import { SortTypes, sortMethods } from 'api/postUtils';
import usePosts from "hooks/usePosts";
import { PostModel } from 'models/models';

interface PostListControllerProps {
  filterPredicate: (post: PostModel) => boolean;
}

const PostListController = ({
  filterPredicate,
}: PostListControllerProps): ReactElement => {
  const posts = usePosts();
  const [sort, setSortMethod] = useState<SortTypes>('time');

  const handleSortOptionChange = (event: React.MouseEvent<HTMLElement>, newSortOption: SortTypes) => {
    if (newSortOption) {
      setSortMethod(newSortOption);
    }
  };

  if (!posts) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <PostListHeader
        postCount={posts.length}
        sortMethod={sort}
        onSortChange={handleSortOptionChange}
      />
      <PostList posts={posts.filter(filterPredicate).sort(sortMethods[sort])} />
    </>
  )
}

export default PostListController;