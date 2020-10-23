
import React, { useLayoutEffect } from "react";
import { Text, View } from "react-native";
import styled from "styled-components";


export default ({navigation,route}) =>{
  console.log(navigation);
  useLayoutEffect(()=>{
    navigation.setOptions({
      title: "Temp",
      headerStyle: {
        // backgroundColor: name === "Tv" ? "blue" : "white"
      },
      gestureEnabled: true,
      headerTitleAlign: "center",
      headerBackTitleVisible: true,
      
    })
  },[]);
  
  return <View><Text>NormalList</Text></View>
}