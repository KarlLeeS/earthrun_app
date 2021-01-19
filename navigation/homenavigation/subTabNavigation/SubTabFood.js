import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import tempTabScreen from "../../../screens/detail/tempTabScreen";

import tabInfo from "../tabInfo.json"
import MainScreen from "../../../screens/home/MainScreen";
import { ScrollView } from "react-native-swiper";
import constants from "../../../constants";
import { floor } from "react-native-reanimated";
const Tab = createMaterialTopTabNavigator();

const SubTabFood = ({subTabs}) =>{
    return (      
        <Tab.Navigator
            lazy="true"
            tabBarOptions={{
            tabBarIcon:({focused})=>{
            },
            scrollEnabled :true,
            indicatorStyle:{
                backgroundColor: 'transparent'
            },
            activeTintColor: "#000",
            inactiveTintColor:"#a0a0a0",
            labelStyle:{
                // height:constants.height/40,
                width:constants.width/3.5,
                top:-3,
                fontSize:14,
                backgroundColor: 'transparent',
                fontWeight:"bold",
                letterSpacing:-1,
                textAlign:"center",
            },
            tabStyle:{
                height:constants.height/20,
                width:constants.width/3.5,
                display:"flex",
                justifyContent:"center",
                alignItems:"center"
            },
            style:{
                elevation:0,
                backgroundColor: '#f8f8f8',
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