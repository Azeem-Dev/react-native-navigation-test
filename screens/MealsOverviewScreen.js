import { View, Text, StyleSheet, FlatList } from "react-native";
import React, { useEffect, useLayoutEffect } from "react";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import { MealItem, MealsList } from "../components";

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

  return <MealsList meals={meals} />;
};

export default MealsOverviewScreen;
