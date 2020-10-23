import React from "react";
import {NavigationContainer} from "@react-navigation/native"; 
import {createStackNavigator} from "@react-navigation/stack";

import { deleteAlbumsAsync } from "expo-media-library";

import MainProfile from "../../screens/profile/MainProfile";
import BadgeList from "../../screens/profile/BadgeList";
import FriendsList from "../../screens/profile/FriendsList";
import LikesList from "../../screens/profile/LikesList";
import ReviewList from "../../screens/profile/ReviewList";
import RecentlyViewedPostList from "../../screens/profile/RecentlyViewedPostList";
import UploadedPostList from "../../screens/profile/UploadedPostList";
import Upload from "../../screens/profile/Upload";

const Stack = createStackNavigator(); 

export default ()=>(
    <Stack.Navigator>
        <Stack.Screen name="MainProfile" component={MainProfile}/>
        <Stack.Screen name="BadgeList" component={BadgeList}/>
        <Stack.Screen name="FriendsList" component={FriendsList}/>
        <Stack.Screen name="LikesList" component={LikesList}/>
        <Stack.Screen name="ReviewList" component={ReviewList}/>
        <Stack.Screen name="RecentlyViewedPostList" component={RecentlyViewedPostList}/>
        <Stack.Screen name="UploadedPostList" component={UploadedPostList}/>
        <Stack.Screen name="Upload" component={Upload}/>
    </Stack.Navigator>
)
