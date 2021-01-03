import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import tempTabScreen from "../../../screens/detail/tempTabScreen";

import tabInfo from "../tabInfo.json"
import MainScreen from "../../../screens/home/MainScreen";
import { ScrollView } from "react-native-swiper";
import constants from "../../../constants";
const Tab = createMaterialTopTabNavigator();

import styled from "styled-components";

const SubTabFood = ({subTabs}) =>{
    return (      
        <Tab.Navigator
            tabBarOptions={{
            tabBarIcon:({focused})=>{
            },
            scrollEnabled :true,
            indicatorStyle:{
                backgroundColor: 'transparent'
            },
            activeTintColor: "#000",
            labelStyle:{
                width:120,
                fontSize:13,
                fontWeight:"bold",
                textAlign:"center",
            },
            style:{
                elevation:0,
                borderBottomWidth:1,
                borderBottomColor:"#dbdbdb",
            }
            }}
        >
            <Tab.Screen name={"대체육"} component={MainScreen}/>
            <Tab.Screen name={"빵"} component={MainScreen} />
            <Tab.Screen name={"간편식·면류·통조림"} component={MainScreen} />
            <Tab.Screen name={"음료"} component={MainScreen} />
            <Tab.Screen name={"간식"} component={MainScreen} />
        </Tab.Navigator>
      );
}

export default SubTabFood;