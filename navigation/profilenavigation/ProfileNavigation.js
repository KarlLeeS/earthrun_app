import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import MainProfile from "../../screens/profile/MainProfile";
import BadgeList from "../../screens/profile/BadgeList";
import FriendsList from "../../screens/profile/FriendsList";
import EditProfile from "../../screens/profile/EditProfile";
import NOTYET from "../../screens/NOTYET";

const Stack = createStackNavigator(); 

export default ()=>(
    <Stack.Navigator
        initialRouteName="MainProfile"
    >
        <Stack.Screen options={{ headerShown: false }} name="EditProfile" component={EditProfile}/>
        <Stack.Screen options={{ headerShown: false }} name="MainProfile" component={MainProfile}/>
        <Stack.Screen name="BadgeList" component={BadgeList}/>
        <Stack.Screen name="FriendsList" component={FriendsList}/>
        <Stack.Screen name="NOTYET" component={NOTYET}/>
    </Stack.Navigator>
)
