import React, { useContext } from "react";
import { Context } from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";

const EditScreen = ({ route }) => {
  const { state } = useContext(Context);
  const { id } = route.params;
  const blogPost = state.find((blogPost) => blogPost.id === id);

  return <BlogPostForm />;
};

export default EditScreen;
