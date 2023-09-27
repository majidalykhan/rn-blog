import React from "react";

const BlogContext = React.createContext();

const BlogPosts = [{ title: "Blog Post - 1" }, { title: "Blog Post - 2" }];

export const BlogProvider = ({ children }) => {
  return (
    <BlogContext.Provider value={BlogPosts}>{children}</BlogContext.Provider>
  );
};

export default BlogContext;
