import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { CardStyleInterpolators, createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "react-native";

import HomeNavigation from "./homenavigation/HomeNavigation";
import DetailNavigation from "./detailnavigation/DetailNavigation";
import ProfileNavigation from "./profilenavigation/ProfileNavigation"; 
import Search from "../screens/Search";
import NormalList from "../screens/NormalList";
import styled from "styled-components";
import { useSetUser } from "../AuthContext";
import Loader from "../components/Loader";

import { USER_FRAGMENT } from "../fragments";
import { useQuery } from "@apollo/client";
import {gql} from "apollo-boost";
import UploadReview from "../screens/UploadReview";
import UploadPost from "../screens/profile/UploadPost";

export const ME = gql`
    {
        me{
            ...UserParts
        }
    }
    ${USER_FRAGMENT}
`

const Stack = createStackNavigator();

const MainNavigation = () => {
  const [realLoading,setRealLoading] =useState(true);
  const setUser= useSetUser();
  const {data,loading,refetch,error}= useQuery(ME,{   
    fetchPolicy:"network-only",
    onCompleted:()=>{
        setUser(data.me);
        setRealLoading(false);
    },
    onError:(e)=>{
        console.log(e);
    }
  });

  return realLoading
    ?
      (
        <Loader />
      )
    :
      (
        <>
        <NavigationContainer>
            <Stack.Navigator
              backBehavior="order"
              screenOptions={{
                headerStyle:{
                  backgroundColor: "white"
                },
                backgroundColor:"#fff",
                gestureEnabled: true,
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
              }}
              mode="modal"
              initialRouteName="HomeNavigation"
            >
              <Stack.Screen options={{ headerShown: false }} name="HomeNavigation" component={HomeNavigation} />
              <Stack.Screen options={{ headerShown: false }} name="DetailNavigation" component={DetailNavigation} />
              <Stack.Screen options={{ headerShown: false }} name="ProfileNavigation" component={ProfileNavigation} />
              <Stack.Screen  options={{ headerShown: false }} name="NormalList" component={NormalList} />
              <Stack.Screen options={{ headerShown: false }}  name="Search" component={Search} />
              
              <Stack.Screen 
                options={{ 
                  headerShown: true
                  }}  
                name="UploadReview" 
                component={UploadReview} 
              />

              <Stack.Screen 
                options={{ 
                headerShown: true
                }}  
                name="UploadPost" 
                component={UploadPost} 
              />
              
            </Stack.Navigator>
          </NavigationContainer>
          <StatusBar barStyle="dark-content" backgroundColor="white" />
        </>
    )
}

export default MainNavigation;

