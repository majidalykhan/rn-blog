import React, { useContext } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import BlogContext from "../context/BlogContext";

const IndexScreen = () => {
  const BlogPosts = useContext(BlogContext);
  return (
    <View>
      <Text>Index Screen</Text>
      <FlatList
        data={BlogPosts}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default IndexScreen;
