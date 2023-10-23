import React, { useContext, useEffect } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
} from "react-native";
import { ScrollView } from "react-native-virtualized-view";
import { Context } from "../context/BlogContext";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const IndexScreen = () => {
  const { state, deleteBlogPost } = useContext(Context);
  const navigation = useNavigation();

  React.useEffect(() => {
    // Use `setOptions` to update the button that we previously specified
    // Now the button includes an `onPress` handler to update the count
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate("Create Post")}>
          <Feather name="plus" size={30} />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <View>
      <View style={styles.listView}>
        <ScrollView>
          {state.length === 0 ? (
            <View style={styles.textView}>
              <Text style={styles.text}>There are no posts yet</Text>
            </View>
          ) : (
            <FlatList
              data={state}
              keyExtractor={(blogPost) => blogPost.title}
              renderItem={({ item }) => {
                return (
                  <TouchableOpacity
                    onPress={() => navigation.navigate("Blog", { id: item.id })}
                  >
                    <View style={styles.row}>
                      <Text>
                        {item.title} - {item.id}
                      </Text>
                      <TouchableOpacity>
                        <Feather
                          onPress={() => deleteBlogPost(item.id)}
                          style={styles.icon}
                          name="trash"
                        />
                      </TouchableOpacity>
                    </View>
                  </TouchableOpacity>
                );
              }}
            />
          )}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textView: {
    marginTop: 10,
    overflow: "hidden",
  },
  text: {
    alignSelf: "center",
    fontSize: 15,
  },
  listView: {
    marginTop: 20,
    height: 500,
    // borderWidth: 1,
    // borderColor: "grey",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderColor: "gray",
  },
  title: {
    fontSize: 24,
  },
  icon: {
    fontSize: 24,
  },
});

export default IndexScreen;
