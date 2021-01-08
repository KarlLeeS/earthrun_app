import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import constants from "../../constants";

import MainTab from "../../screens/home/MainTab";
import SubTabFood from "./subTabNavigation/SubTabFood"
import SubTabLife from "./subTabNavigation/SubTabLife";
import SubTabHealthBeauty from "./subTabNavigation/SubTabHealthBeauty";
import SubTabFashionOthers from "./subTabNavigation/SubTabFashionOthers";
import SubTabNavigation from "./subTabNavigation/SubTabFashionOthers";


const Tab = createMaterialTopTabNavigator();

export default () =>{
  console.log("Rendering HomeNavigation/TabNavigation");

  return (
    <Tab.Navigator
      lazy="true"
      initialRouteName="추천"
      tabBarOptions={{
        scrollEnabled :true,
        indicatorStyle:{
          backgroundColor: "#00cf84",
        },
        inactiveTintColor:"#000",
        activeTintColor: "#00cf84",
        labelStyle:{
          width:100
        },
        tabStyle:{
          width:constants.width/5
        },
        style:{
          elevation:0,
          borderBottomWidth:1,
          borderBottomColor:"#dbdbdb",
          paddingTop:5,
          height: 50
        }
      }}
    >
        <Tab.Screen name="신상품" component={MainTab} />
        <Tab.Screen name="식품" component={SubTabFood} />
        {/* <Tab.Screen name="건강/미용"  component={SubTabHealthBeauty} />
        <Tab.Screen name="생활용품"  component={SubTabLife} />
        <Tab.Screen name="패션/잡화"  component={SubTabFashionOthers} /> */}
      </Tab.Navigator>
  );
}
