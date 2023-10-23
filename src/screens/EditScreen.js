import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import React, { useContext, useState } from "react";
import { Context } from "../context/BlogContext";

const EditScreen = ({ route }) => {
  const { state } = useContext(Context);
  const { id } = route.params;
  const blogPost = state.find((blogPost) => blogPost.id === id);

  const [title, setTitle] = useState(blogPost.title);
  const [description, setDescription] = useState(blogPost.description);

  return (
    <View>
      <Text style={styles.label}>Enter New Title</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <Text style={styles.label}>Enter New Description</Text>
      <TextInput
        style={styles.input}
        value={description}
        onChangeText={(text) => setDescription(text)}
      />
      <View style={styles.buttonView}>
        <Button
          color="#000000"
          title="Update Post"
          onPress={() => console.log()}
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

export default EditScreen;
