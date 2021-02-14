import React, { createContext, useContext, useReducer } from "react";
import { postsReducer, initialPostsState } from "../reducers/PostsReducer";

const PostsContext = createContext();
const usePostsStateValue = () => useContext(PostsContext);

const PostsProvider = ({ children }) => {
  const [postsState, postsDispatch] = useReducer(
    postsReducer,
    initialPostsState
  );
  return (
    <PostsContext.Provider value={{ postsState, postsDispatch }}>
      {children}
    </PostsContext.Provider>
  );
};
export { usePostsStateValue, PostsProvider };
