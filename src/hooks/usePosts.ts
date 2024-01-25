import { useState, useEffect } from "react";

import { fetchAllPosts } from "api/api";
import { PostModel } from "models/models";

const usePosts = (): PostModel[] | undefined => {
  const [posts, setPosts] = useState<PostModel[]>();

  useEffect(() => {
    fetchAllPosts()
      .then(setPosts)
      .catch(err => console.error("Error fetching project", err));
  }, []);

  return posts;
};

export default usePosts;