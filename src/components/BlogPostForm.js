import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import React, { useContext, useState } from "react";
import { Context } from "../context/BlogContext";

const BlogPostForm = ({ onSubmit, initialValues }) => {
  const [title, setTitle] = useState(initialValues.title);
  const [description, setDescription] = useState(initialValues.description);

  return (
    <View>
      <Text style={styles.label}>Enter Title</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <Text style={styles.label}>Enter Description</Text>
      <TextInput
        style={styles.input}
        value={description}
        onChangeText={(text) => setDescription(text)}
      />
      <View style={styles.buttonView}>
        <Button
          color="#000000"
          title="Save Post"
          onPress={() => onSubmit(title, description)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 20,
    marginBottom: 10,
    padding: 5,
  },
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: "grey",
    marginLeft: 5,
    marginRight: 5,
  },
  buttonView: {
    marginTop: 20,
    marginLeft: 50,
    marginRight: 50,
    borderRadius: 20,
    overflow: "hidden",
  },
});

export default BlogPostForm;
