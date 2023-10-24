import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import { Feather } from "@expo/vector-icons";
import { Context } from "../context/BlogContext";
import { useNavigation } from "@react-navigation/native";

const ShowScreen = ({ route }) => {
  const { state } = useContext(Context);
  const { id } = route.params;
  const blogPost = state.find((blogPost) => blogPost.id === id);

  const navigation = useNavigation();

  React.useEffect(() => {
    // Use `setOptions` to update the button that we previously specified
    // Now the button includes an `onPress` handler to update the count
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() => navigation.navigate("Edit Post", { id: id })}
        >
          <Feather name="edit" size={20} />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.view}>
      <Text style={styles.title}>{blogPost.title}</Text>
      <Text style={styles.description}>{blogPost.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    alignItems: "center",
    backgroundColor: "#ffffff",
    height: "100%",
  },
  title: {
    fontSize: 30,
    fontWeight: "500",
    marginTop: 20,
  },
  description: {
    fontSize: 15,
    marginTop: 20,
    borderWidth: 2,
    borderColor: "grey",
    borderRadius: 10,
    padding: 20,
    width: "90%",
    textAlign: "center",
  },
});

export default ShowScreen;
