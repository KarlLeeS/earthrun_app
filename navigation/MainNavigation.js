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
        // console.log("before user 제발요: ",user?.id);
        setUser(data.me);
        // console.log("제발요");
        // console.log("데이터는 있어 씨발", data.me);
        
        // console.log("after user 제발요: ",user?.id);
        setRealLoading(false);
        // console.log("data.me.id",data.me.id);
    },
    onError:(e)=>{
        console.log(e);
        console.log("에러요");
    }
  });

  // console.log("ㅎㅇ");
// 

  return realLoading?(<Loader />)
    :
    (
        <>
        <NavigationContainer>
            <Stack.Navigator
              backBehavior="order"
              screenOptions={{
                headerBackImage:{},
                headerStyle:{
                  backgroundColor: "white"
                },
                backgroundColor:"#fff",
                gestureEnabled: true,
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
              }}
              mode="modal"
              initialRouteName="ProfileNavigation"
            >
              <Stack.Screen options={{ headerShown: false }} name="HomeNavigation" component={HomeNavigation} />
              <Stack.Screen name="DetailNavigation" component={DetailNavigation} />
              <Stack.Screen options={{ headerShown: false }} name="ProfileNavigation" component={ProfileNavigation} />
              <Stack.Screen  options={{ headerShown: false }} 
              // todo 
              // headerright left에 back 버튼과 편집버튼에 대한 고민들 해보기 
              // 일단은 패스.
              name="NormalList" component={NormalList} />
              <Stack.Screen name="Search" component={Search} />
              {/* 포스트 따로 빼야 됨. */}
            </Stack.Navigator>
          </NavigationContainer>
          <StatusBar barStyle="dark-content" backgroundColor="white" />
        </>
    )
}

export default MainNavigation;

