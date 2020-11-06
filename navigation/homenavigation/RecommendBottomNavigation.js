import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import RecommendBottom from "../../screens/home/RecommendBottom";
import { BorderlessButton, TouchableOpacity } from "react-native-gesture-handler";

const Tab = createMaterialTopTabNavigator(
);

export default () => {
  return (
    <Tab.Navigator

      tabBarOptions={{
        indicatorStyle: {
          height: '100%',
          backgroundColor: '#00cf84'
        },
        activeTintColor: "#fff",
        inactiveTintColor:"#000",
        height:200,
        style:{
          elevation:0,
          borderBottomColor:"#00cf84",
          borderBottomWidth:1
        }
      }}

      // style={{
      //   elevation:0,
      //   backgroundColor: 'white', 
      //   borderTopColor:"#00f",
      //   borderBottomColor:"#00f",
      //   borderWidth:10,
      // }}
    >
        <Tab.Screen name="식품 TOP5" children={()=><RecommendBottom type={"식품"}/>}/>
        <Tab.Screen name="건강미용 TOP5" children={()=><RecommendBottom type={"건강미용"}/>} />
        <Tab.Screen name="생활용품 TOP5" children={()=><RecommendBottom type={"생활용품"}/>} />
        <Tab.Screen name="패션/잡화 TOP5" children={()=><RecommendBottom type={"패션/잡화"}/>} />
    </Tab.Navigator>
  )
}