import { View, Text, StyleSheet, FlatList } from "react-native";
import React, { useEffect ,useLayoutEffect} from "react";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import { MealItem } from "../components";

const MealsOverviewScreen = ({ route, navigation }) => {
  const { categoryId } = route.params;

  useLayoutEffect(() => {
    const categoryTitle =
      CATEGORIES.find((c) => c.id == categoryId)?.title ?? "";

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [categoryId, navigation]);

  const meals = MEALS.filter((c) => c.categoryIds.includes(categoryId));

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

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
