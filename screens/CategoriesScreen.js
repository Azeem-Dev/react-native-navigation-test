import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";
import { CATEGORIES } from "../data/dummy-data";
import { CategoryGridTile } from "../components";

const CategoriesScreen = ({ navigation }) => {


  const renderCategoryItem = (itemData) => {

    const pressHandler = () => {
      navigation.navigate("MealsOverview",{
        categoryId:itemData.item.id
      });
    };


    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  };

  return (
    <View style={styles.categoriesContainer}>
      <FlatList
        data={CATEGORIES}
        renderItem={renderCategoryItem}
        keyExtractor={(category) => category.id}
        numColumns={2}
      />
    </View>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  categoriesContainer: {
    flex: 1,
  },
});
