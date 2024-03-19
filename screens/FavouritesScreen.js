import { View, Text, StyleSheet } from "react-native";
import React, { useContext } from "react";
import { MealsList } from "../components";
import { FavourtiesContext } from "../store/context/favourites-context";
import { MEALS } from "../data/dummy-data";

const FavouritesScreen = () => {
  const favourtieMealCtx = useContext(FavourtiesContext);
  let meals = MEALS.filter((meal) => favourtieMealCtx.ids.includes(meal.id));
  return <MealsList meals={meals} />;
};

export default FavouritesScreen;
const styles = StyleSheet.create({});
