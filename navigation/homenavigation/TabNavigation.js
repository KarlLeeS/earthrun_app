import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import styled from "styled-components/native";
import temp from "../screens/temp";

import RecommendNavigation from "./RecommendNavigation";

const Tab = createMaterialTopTabNavigator();

export default () => {
  return (
      <Tab.Navigator>
        <Tab.Screen name="추천" component={RecommendNavigation}>
        </Tab.Screen>
        {
            // TODO 
            // 나머지 내용들 nested 하게 컴포넌트 구성해서 json 파일 받아서 구현 
        }
        <Tab.Screen name="식품" component={temp} >
        </Tab.Screen>
        <Tab.Screen name="건강/미용" component={temp} >
        </Tab.Screen>
        <Tab.Screen name="생활용품" component={temp} >
        </Tab.Screen>
        <Tab.Screen name="패선/잡화" component={temp} >
        </Tab.Screen>
      </Tab.Navigator>
  )
}