import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { CardStyleInterpolators, createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "react-native";

import HomeNavigation from "./homenavigation/HomeNavigation";
import DetailNavigation from "./detailnavigation/DetailNavigation";
import ProfileNavigation from "./profilenavigation/ProfileNavigation"; 
import Search from "../screens/Search";
import NormalList from "../screens/NormalList";

const Stack = createStackNavigator();

const MainNavigation = () => {
  return (
    <>
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerBackImage:{},
          headerStyle:{
            backgroundColor: "white"
          },
          gestureEnabled: true,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
        // headerMode="none"
        mode="modal"
        initialRouteName="NormalList"
      >
        <Stack.Screen options={{ headerShown: false }} name="HomeNavigation" component={HomeNavigation} />
        <Stack.Screen name="DetailNavigation" component={DetailNavigation} />
        <Stack.Screen name="ProfileNavigation" component={ProfileNavigation} />
        <Stack.Screen 
        options={{
        
        }}
        
        name="NormalList" component={NormalList} />
        <Stack.Screen name="Search" component={Search} />
      </Stack.Navigator>
    </NavigationContainer>
    {/* <StatusBar barStyle="light-content"  /> */}
    </>
  )
}

export default MainNavigation;