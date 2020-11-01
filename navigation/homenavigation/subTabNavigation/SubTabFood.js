import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import RecommendNavigation from "../RecommendNavigation";
import tempTabScreen from "../../../screens/detail/tempTabScreen";

import tabInfo from "../tabInfo.json"
import MainScreen from "../../../screens/home/MainScreen";
import { ScrollView } from "react-native-swiper";
import constants from "../../../constants";
const Tab = createMaterialTopTabNavigator();

const SubTabFood = ({subTabs}) =>{
    console.log(`this is SubTabFood`);
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
            tabStyle:{
                // width:90,
            },
            style:{
                elevation:0,
                borderBottomWidth:1,
                borderBottomColor:"#dbdbdb",
            }
            }}
        >
            <Tab.Screen name={"대체육"} children={()=><MainScreen category={"대체육"} />} />
            <Tab.Screen name={"빵"} children={()=><MainScreen category={"빵"} />}/>
            <Tab.Screen name={"간편식·면류·통조림"} children={()=><MainScreen category={"간편식면류통조림"} />}/>
            <Tab.Screen name={"음료"} children={()=><MainScreen category={"음료"} />}/>
            <Tab.Screen name={"간식"} children={()=><MainScreen category={"간식"} />}/>
        </Tab.Navigator>
      );
}

export default SubTabFood;

// 글로벌 스타일로 백그라운드 화이트만들기 todo