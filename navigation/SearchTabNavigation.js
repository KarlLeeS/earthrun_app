import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React from "react";
import constants from "../constants";
import Materials from "../screens/Search/Materials";
import ProductBrand from "../screens/Search/ProductBrand";
// import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
// import tempTabScreen from "../../screens/detail/tempTabScreen";
// import ProductInfo from "../../components/Detail/BottomTab/ProductInfo";
// import ReviewRating from "../../components/Detail/BottomTab/ReviewRating";
// import Lines from "../../components/Detail/BottomTab/Lines";
// import constants from "../../constants";

const Tab = createMaterialTopTabNavigator();

const SearchTabNavigation=()=>{
    return(
        <Tab.Navigator
            tabBarOptions={{
                indicatorStyle:{
                    position:"absolute",
                    bottom:-5,
                    borderBottomColor:"#00cf84",
                    borderBottomWidth:4
                },
                labelStyle:{
                    fontSize:14,
                    fontWeight:"bold",
                },
                tabStyle:{
                    width:constants.width/2,
                    height:constants.height/20
                },
                style:{
                    elevation:0,
                },
                inactiveTintColor:"#717171",
                activeTintColor: "#00cf84"
            }}
            style={{
                    elevation:0,
            }}
        >
            <Tab.Screen name="상품/브랜드" children={()=><ProductBrand/>} />
            <Tab.Screen name="성분 백과사전" children={()=><Materials/>} />
        </Tab.Navigator>
    );
}

export default SearchTabNavigation; 