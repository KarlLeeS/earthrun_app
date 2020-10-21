import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeNavigation from "./homenavigation/HomeNavigation";
import DetailNavigation from "./detailnavigation/DetailNavigation";
import ProfileNavigation from "./profilenavigation/ProfileNavigation"; 
import Search from "../screens/Search";
import NormalList from "../screens/NormalList";

const Stack = createStackNavigator();

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        headerMode="none"
        mode="modal"
        initialRouteName="HomeNavigation"
      >
        <Stack.Screen name="HomeNavigation" component={HomeNavigation} />
        <Stack.Screen name="DetailNavigation" component={DetailNavigation} />
        <Stack.Screen name="ProfileNavigation" component={ProfileNavigation} />
        <Stack.Screen name="NormalList" component={NormalList} />
        <Stack.Screen name="Search" component={Search} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainNavigation;