import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Pressable,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { List, MealDetails, SubTitle } from "../components";
import Ionicons from "@expo/vector-icons/Ionicons";
import { MEALS } from "../data/dummy-data";

const MealDetailScreen = ({ route, navigation }) => {
  const {
    params: { meal },
  } = route;

  const FavouriteTheMeal = () => {
    meal.isFavourite = !meal.isFavourite;
    MEALS.find((c) => c.id === meal.id).isFavourite = meal.isFavourite;
  };
  const getPressableFavouriteButton = () => {
    return (
      <View style={styles.iconContainer}>
        <Pressable onPress={FavouriteTheMeal} android_ripple={{ color: "red" }}>
          <Ionicons
            name="heart-outline"
            size={24}
            color="black"
            style={!meal.isFavourite ? styles.iconColor : styles.mealFavourted}
          />
        </Pressable>
      </View>
    );
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: meal.title ?? "",
      headerRight: getPressableFavouriteButton,
    });
  }, [meal, navigation]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image source={{ uri: meal.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{meal.title}</Text>
      <MealDetails
        complexity={meal.complexity}
        affordability={meal.affordability}
        duration={meal.duration}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listInnerContainer}>
          <SubTitle>Ingredients</SubTitle>
          <List list={meal.ingredients} />
          <SubTitle>Steps</SubTitle>
          <List list={meal.steps} />
        </View>
      </View>
    </ScrollView>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 30,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
  listOuterContainer: {
    alignItems: "center",
  },
  listInnerContainer: {
    width: "80%",
  },
  iconContainer: {
    overflow: "hidden",
    elevation: 4,
    width: 24,
    height: 24,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
  },
  iconColor: {
    color: "white",
    width: "100%",
    height: "100%",
  },
  mealFavourted: {
    color: "red",
    width: "100%",
    height: "100%",
  },
});
