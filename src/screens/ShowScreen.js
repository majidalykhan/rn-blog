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
        <TouchableOpacity onPress={() => navigation.navigate("Edit Post")}>
          <Feather name="edit" size={20} />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <View>
      <Text>{blogPost.title}</Text>
      <Text>{blogPost.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ShowScreen;
