import React, { useContext } from "react";
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

const IndexScreen = () => {
  const { state, addBlogPost, deleteBlogPost } = useContext(Context);
  return (
    <View>
      <View style={styles.listView}>
        <ScrollView>
          <FlatList
            data={state}
            keyExtractor={(blogPost) => blogPost.title}
            renderItem={({ item }) => {
              return (
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
              );
            }}
          />
        </ScrollView>
      </View>
      <View style={styles.buttonView}>
        <Button color="#000000" title="Add Post" onPress={addBlogPost} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  listView: {
    marginTop: 20,
    height: 500,
    borderWidth: 1,
    borderColor: "grey",
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
  buttonView: {
    marginTop: 20,
    marginLeft: 50,
    marginRight: 50,
    borderRadius: 20,
    overflow: "hidden",
  },
});

export default IndexScreen;
