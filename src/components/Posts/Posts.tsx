import React, { useEffect } from "react";
import "./Posts.css";
import { getPosts } from "../../services/posts";
import { usePostsStateValue } from "../../contexts/PostsContext";
import PostCard from "../PostCard/PostCard";

const Posts = () => {
  const {
    postsState: { posts },
    postsDispatch,
  } = usePostsStateValue();
  useEffect(() => {
    const fetchPosts = async () => {
      const result = await getPosts({ page: "1", limit: "10" });
      console.log("RESULT", result);
      postsDispatch({ type: "setPosts", payload: result.data });
    };
    fetchPosts();
  }, []);
  return (
    <div className="posts-container">
      {posts.map((post: any) => (
        <PostCard post={post} />
      ))}
    </div>
  );
};

export default Posts;
