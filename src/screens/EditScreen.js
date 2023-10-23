import React, { useContext } from "react";
import { Context } from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";
import { useNavigation } from "@react-navigation/native";

const EditScreen = ({ route }) => {
  const { state, editBlogPost } = useContext(Context);
  const { id } = route.params;
  const blogPost = state.find((blogPost) => blogPost.id === id);
  const navigation = useNavigation();

  return (
    <BlogPostForm
      initialValues={{
        title: blogPost.title,
        description: blogPost.description,
      }}
      onSubmit={(title, description) => {
        editBlogPost(id, title, description, () =>
          navigation.navigate("Blogs")
        );
      }}
    />
  );
};

export default EditScreen;
