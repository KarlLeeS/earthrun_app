import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import TempRecomBottom from "../../screens/home/tempRecomBottom";

const Tab = createMaterialTopTabNavigator();

export default () => {
  return (
    <Tab.Navigator>
        <Tab.Screen name="식품 TOP5" component={TempRecomBottom} />
        <Tab.Screen name="건강미용 TOP5" component={TempRecomBottom} />
        <Tab.Screen name="생활용품 TOP5" component={TempRecomBottom} />
        <Tab.Screen name="패션/잡화 TOP5" component={TempRecomBottom} />
    </Tab.Navigator>
  )
}