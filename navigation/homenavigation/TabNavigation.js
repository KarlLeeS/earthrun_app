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
        activeTintColor:"#00cf85",
        inactiveTintColor:"#3d3d3d",
        allowFontScaling:true,
        scrollEnabled :true,
        indicatorStyle:{
          position:"relative",
          top:constants.width/8,
          backgroundColor: "#00cf84",
          height:5
        },
        labelStyle:{
          width:100,
          fontSize:14,
          fontWeight:"bold"
        },
        tabStyle:{
          width:constants.width/5
        },
        style:{
          elevation:0,
          borderBottomWidth:1,
          borderBottomColor:"#dbdbdb",
          paddingTop:5,
          // height: 50
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
