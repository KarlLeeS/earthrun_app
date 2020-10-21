import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import styled from "styled-components/native";
import temp from "../screens/temp";
import TabNavigation from "./TabNavigation"

const Tab = createMaterialTopTabNavigator();

export default () => {
  return (
    <>
      <View><Text>this is profile</Text></View>
      <View><Text>this is Search</Text></View>
      <TabNavigation/>
      {/* <Tab.Navigator>
        <Tab.Screen name="추천" component={temp}>
        </Tab.Screen>
        <Tab.Screen name="식품" component={temp} >
        </Tab.Screen>
        <Tab.Screen name="건강/미용" component={temp} >
        </Tab.Screen>
        <Tab.Screen name="생활용품" component={temp} >
        </Tab.Screen>
        <Tab.Screen name="패선/잡화" component={temp} >
        </Tab.Screen>
      </Tab.Navigator> */}
    </>
  )
}