const initialPostsState = {
  posts: [],
};

const postsReducer = (state, action) => {
  switch (action.type) {
    case "setPosts": {
      return {
        ...state,
        posts: action.payload,
      };
    }
    default:
      return state;
  }
};
export { initialPostsState, postsReducer };
