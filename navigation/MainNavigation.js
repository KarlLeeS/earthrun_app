import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { CardStyleInterpolators, createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "react-native";

import HomeNavigation from "./homenavigation/HomeNavigation";
import DetailNavigation from "./detailnavigation/DetailNavigation";
import ProfileNavigation from "./profilenavigation/ProfileNavigation"; 
import Search from "../screens/Search";
import NormalList from "../screens/NormalList";
import styled from "styled-components";


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
            backgroundColor:"#fff",
            
            gestureEnabled: true,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
          mode="modal"
          initialRouteName="HomeNavigation"
        >
          <Stack.Screen options={{ headerShown: false }} name="HomeNavigation" component={HomeNavigation} />
          <Stack.Screen name="DetailNavigation" component={DetailNavigation} />
          <Stack.Screen options={{ headerShown: false }} name="ProfileNavigation" component={ProfileNavigation} />
          <Stack.Screen  options={{ headerShown: false }} 
          // todo 
          // headerright left에 back 버튼과 편집버튼에 대한 고민들 해보기 
          // 일단은 패스.
          name="NormalList" component={NormalList} />
          <Stack.Screen name="Search" component={Search} />
          {/* 포스트 따로 빼야 됨. */}
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      </>
  )
}

export default MainNavigation;