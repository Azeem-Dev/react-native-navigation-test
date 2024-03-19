import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";
import MealItem from "./MealItem";

const MealsList = ({meals}) => {
  const renderMealItem = (itemData) => {
    const { item } = itemData;

    return <MealItem {...item} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={meals}
        keyExtractor={(itemData) => itemData.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

export default MealsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
