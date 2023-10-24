import React, { useContext } from "react";
import { Context } from "../context/BlogContext";
import { useNavigation } from "@react-navigation/native";
import BlogPostForm from "../components/BlogPostForm";

const CreateScreen = () => {
  const { addBlogPost } = useContext(Context);

  const navigation = useNavigation();

  return (
    <BlogPostForm
      text={{ title: "Enter Title", description: "Enter Description" }}
      onSubmit={(title, description) => {
        addBlogPost(title, description, () => navigation.navigate("Blogs"));
      }}
    />
  );
};

export default CreateScreen;
