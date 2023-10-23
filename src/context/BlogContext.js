import createDataContext from "./createDataContext";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "delete_blogPost":
      return state.filter((blogPost) => blogPost.id !== action.payload);
    case "add_blogPost":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 99999),
          title: action.payload.title,
          description: action.payload.description,
        },
      ];
    case "edit_blogPost":
      return state.map((blogPost) => {
        return blogPost.id === action.payload.id ? action.payload : blogPost;
      });
    default:
      return state;
  }
};

const addBlogPost = (dispatch) => {
  return (title, description, callback) => {
    dispatch({ type: "add_blogPost", payload: { title, description } });
    if (callback) {
      callback();
    }
  };
};

const deleteBlogPost = (dispatch) => {
  return (id) => {
    dispatch({ type: "delete_blogPost", payload: id });
  };
};

const editBlogPost = (dispatch) => {
  return (id, title, description, callback) => {
    dispatch({
      type: "edit_blogPost",
      payload: { id, title, description },
    });
    if (callback) {
      callback();
    }
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost, editBlogPost },
  []
);
