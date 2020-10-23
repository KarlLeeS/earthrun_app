import React from "react";
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import tempTabScreen from "../../screens/detail/tempTabScreen";

const Tab = createMaterialTopTabNavigator();

export default()=>(
    <Tab.Navigator>
        <Tab.Screen name="상품정보" component={tempTabScreen}/>
        <Tab.Screen name="리뷰 및 별점" component={tempTabScreen}/>
        <Tab.Screen name="판매처" component={tempTabScreen}/>
    </Tab.Navigator>
)