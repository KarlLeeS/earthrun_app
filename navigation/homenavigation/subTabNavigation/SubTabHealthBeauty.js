import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import MainScreen from "../../../screens/home/MainScreen";
import { ScrollView } from "react-native-swiper";
const Tab = createMaterialTopTabNavigator();

const SubTabHealthBeauty = ({subTabs}) =>{
    console.log(`this is SubTabHealthBeauty`);

    console.log(subTabs);
    return (    
            <Tab.Navigator tabBarOptions={{
                    scrollEnabled :true,
                    // activeTintColor: 'tomato',
                    // inactiveTintColor: 'gray',
                }}
            >
                <Tab.Screen name={"대체육"} component={MainScreen}/>
                <Tab.Screen name={"빵"} component={MainScreen}/>
                <Tab.Screen name={"간편식·면류·통조림"} component={MainScreen}/>
                <Tab.Screen name={"음료"} component={MainScreen}/>
                <Tab.Screen name={"간식"} component={MainScreen}/>
            </Tab.Navigator>
      );
}

export default SubTabHealthBeauty;