import { View, Text, StyleSheet } from "react-native";
import React from "react";

const List = ({ list }) => {
  return list.map((item) => {
    return (
      <View style={styles.listItem} key={item}>
        <Text style={styles.itemText}>{item}</Text>
      </View>
    );
  });
};

export default List;

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: "#e2b497",
  },
  itemText: {
    color: "#351401",
    textAlign:'center'
  },
});
