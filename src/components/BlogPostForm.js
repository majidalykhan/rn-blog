import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import React, { useContext, useState } from "react";
import { Context } from "../context/BlogContext";

const BlogPostForm = ({ onSubmit, initialValues, text }) => {
  const [title, setTitle] = useState(initialValues.title);
  const [description, setDescription] = useState(initialValues.description);

  return (
    <View style={styles.view}>
      <Text style={styles.label}>{text.title}</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <Text style={styles.label}>{text.description}</Text>
      <TextInput
        multiline
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

BlogPostForm.defaultProps = {
  initialValues: {
    title: "",
    description: "",
  },
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: "#ffffff",
    height: "100%",
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
    padding: 5,
  },
  input: {
    fontSize: 15,
    borderWidth: 1,
    borderColor: "grey",
    marginLeft: 5,
    marginRight: 5,
    padding: 5,
    height: "fit-content",
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
