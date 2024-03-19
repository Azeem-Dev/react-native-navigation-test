import { View, Text } from "react-native";
import React, { useLayoutEffect } from "react";

const MealDetailScreen = ({ route, navigation }) => {
  const { params:{meal} } = route;

  useLayoutEffect(() => {
    console.log(meal);
    navigation.setOptions({
      title: meal.title ?? "",
    });
  }, [meal, navigation]);

  return (
    <View>
      <Text>MealDetailScreen</Text>
    </View>
  );
};

export default MealDetailScreen;
