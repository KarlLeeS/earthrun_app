import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import styled from "styled-components/native";
import temp from "../screens/temp";

import RecommendBottomNavigation from "./RecommendBottomNavigation";

const Tab = createMaterialTopTabNavigator();

export default () => {
  return (
    //   {
    //       추천 리스트 4개 배치 
    //   }
      <RecommendBottomNavigation />
  )
}