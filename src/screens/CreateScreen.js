import { StyleSheet, Text, TextInput, View, Button } from "react-native";
import React, { useContext, useState } from "react";
import { Context } from "../context/BlogContext";
import { useNavigation } from "@react-navigation/native";

const CreateScreen = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { addBlogPost } = useContext(Context);

  const navigation = useNavigation();

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
          title="Add Post"
          onPress={() =>
            addBlogPost(title, description, () => navigation.navigate("Blogs"))
          }
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

export default CreateScreen;
