import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { CardStyleInterpolators, createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "react-native";

import HomeNavigation from "./homenavigation/HomeNavigation";
import DetailNavigation from "./detailnavigation/DetailNavigation";
import ProfileNavigation from "./profilenavigation/ProfileNavigation"; 
import Search from "../screens/Search/Search";
import NormalList from "../screens/NormalList";
import { useME_Loading, usesetMe_Loading, useSetUser } from "../AuthContext";
import Loader from "../components/Loader";

import { ME} from "../fragments";
import { useQuery } from "@apollo/client";
import UploadReview from "../screens/UploadReview";
import UploadPost from "../screens/profile/UploadPost";
import SelectPhoto from "../screens/SelectPhoto";
import DetailFilter from "../screens/DetailFilter";
import CertificationInfo from "../screens/CertificationInfo";
import MaterialDetail from "../screens/Search/MaterialDetail";
import TakePhoto from "../screens/TakePhoto";


const Stack = createStackNavigator();

const MainNavigation =  () => {
  console.log("Rendering MainNavigation");

  const setUser= useSetUser();
  const me_loading = useME_Loading(); 
  const me_setLoading = usesetMe_Loading(); 

  const {data,loading,refetch,error}= useQuery(ME,{   
    fetchPolicy:"network-only",
    onCompleted:()=>{
        setUser(data.me);
        me_setLoading(false); 
    },
    onError:(e)=>{
        console.log(e);
    }
  });


  return me_loading
  ?
    <Loader />
  : 
    <>
      <NavigationContainer style={{backgroundColor : "white"}}>
        <Stack.Navigator
          lazy="true"
          backBehavior="order"
          screenOptions={{
            cardStyle:{
              backgroundColor:"white",
              height:10
            },
            headerStyle:{
              backgroundColor: "white"
            },
            backgroundColor:"white",
            gestureEnabled: true,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
          initialRouteName="TakePhoto"
        >
          <Stack.Screen options={{ headerShown: false }} name="HomeNavigation" component={HomeNavigation} />
          <Stack.Screen options={{ headerShown: false }} name="DetailFilter" component={DetailFilter} />
          <Stack.Screen options={{ headerShown: false }} name="CertificationInfo" component={CertificationInfo} />
          <Stack.Screen options={{ headerShown: false }} name="DetailNavigation" component={DetailNavigation} />
          <Stack.Screen options={{ headerShown: false }} name="ProfileNavigation" component={ProfileNavigation} />
          <Stack.Screen options={{ headerShown: false }} name="NormalList" component={NormalList} />
          <Stack.Screen options={{ headerShown: false }}  name="Search" component={Search} />
          <Stack.Screen options={{ headerShown: false }}  name="MaterialDetail" component={MaterialDetail} />
          <Stack.Screen options={{ headerShown: true }} name="UploadReview" component={UploadReview} />
          <Stack.Screen options={{ headerShown: false}}  name="UploadPost" component={UploadPost} />
          <Stack.Screen options={{ headerShown: false}}  name="SelectPhoto" component={SelectPhoto} />
          <Stack.Screen options={{ headerShown: false}}  name="TakePhoto" component={TakePhoto} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
    </>
}
export default MainNavigation;

