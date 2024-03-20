import { View, Text, StyleSheet } from "react-native";
import React, { useContext, useLayoutEffect, useState } from "react";
import { MealsList } from "../components";
// import { FavourtiesContext } from "../store/context/favourites-context";
import { MEALS } from "../data/dummy-data";
import { useSelector } from "react-redux";

const FavouritesScreen = () => {
  //   const favourtieMealCtx = useContext(FavourtiesContext);
  const [meals, setMeals] = useState([]);

  const favIds = useSelector((state) => state.favouriteMeals.ids);

  useLayoutEffect(() => {
    setMeals(MEALS.filter((meal) => favIds.includes(meal.id)));
  }, [favIds]);

  return <MealsList meals={meals} />;
};

export default FavouritesScreen;
const styles = StyleSheet.create({});
