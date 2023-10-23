import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { Context } from "../context/BlogContext";

const EditScreen = ({ route }) => {
  //   const { state } = useContext(Context);
  const { id } = route.params;
  //   const blogPost = state.find((blogPost) => blogPost.id === id);

  return (
    <View>
      <Text>Edit Screen - {id}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default EditScreen;
