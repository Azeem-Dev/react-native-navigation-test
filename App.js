import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text } from "react-native";
import {
  CategoriesScreen,
  FavouritesScreen,
  MealDetailScreen,
  MealsOverviewScreen,
} from "./screens";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import FavourtiesContextProvider from "./store/context/favourites-context";
import { Provider } from "react-redux";
import { store } from "./store/redux/store";
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#351401",
        },
        headerTintColor: "white",
        sceneContainerStyle: {
          backgroundColor: "#3f2f25",
        },
        drawerContentStyle: {
          backgroundColor: "#351401",
        },
        drawerInactiveTintColor: "white",
        drawerActiveTintColor: "#351401",
        drawerActiveBackgroundColor: "#e4baa1",
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: "All Categories",
          drawerIcon: ({ color, size }) => {
            return <Ionicons name="list" color={color} size={size} />;
          },
        }}
      />
      <Drawer.Screen
        name="Favourties"
        component={FavouritesScreen}
        options={{
          drawerIcon: ({ color, size }) => {
            return <Ionicons name="heart-outline" color={color} size={size} />;
          },
        }}
      />
    </Drawer.Navigator>
  );
};

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      {/* <FavourtiesContextProvider> */}
      <Provider store={store}>
        <NavigationContainer initialRouteName="MealsCategories">
          <Stack.Navigator
            screenOptions={{
              headerStyle: {
                backgroundColor: "#351401",
              },
              headerTintColor: "white",
              contentStyle: {
                backgroundColor: "#3f2f25",
              },
            }}
          >
            <Stack.Screen
              name="Drawer"
              // component={CategoriesScreen}
              component={DrawerNavigator}
              options={{
                title: "All Categories",
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="MealsOverview"
              component={MealsOverviewScreen}
              //setting header info etc dynamically i.e
              // options={({ route, navigation }) => {
              //   const catId = route.params.categoryId;
              //   return {
              //     title: catId,
              //   };
              // }}
            />
            <Stack.Screen
              name="MealDetails"
              component={MealDetailScreen}
              // options={{
              //   headerRight: () => {
              //     return <Text>In the header</Text>;
              //   },
              // }}
              //setting header info etc dynamically i.e
              // options={({ route, navigation }) => {
              //   const catId = route.params.categoryId;
              //   return {
              //     title: catId,
              //   };
              // }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
      {/* </FavourtiesContextProvider> */}
    </>
  );
}

const styles = StyleSheet.create({});
