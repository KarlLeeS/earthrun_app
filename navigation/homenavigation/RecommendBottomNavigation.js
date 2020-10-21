import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import styled from "styled-components/native";
import temp from "../screens/temp";

// import RecommendBottomNavigation from "./RecommendBottomNavigation";

const Tab = createMaterialTopTabNavigator();

export default () => {
  return (
    <Tab.Navigator>
        <Tab.Screen name="식품" component={RecommendNavigation} />
        <Tab.Screen name="건강미용" component={RecommendNavigation} />
        <Tab.Screen name="생활용품" component={RecommendNavigation} />
        <Tab.Screen name="패션/잡화" component={RecommendNavigation} />
    </Tab.Navigator>
  )
}