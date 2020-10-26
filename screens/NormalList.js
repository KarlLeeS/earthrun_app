
import React, { useLayoutEffect } from "react";
import { Text, View,ScrollView,TouchableOpacity } from "react-native";
import styled from "styled-components";
import NavIcon from "../components/NavIcon";
import Post from "../components/Post"; 
import constants from "../constants";
const Container = styled.View`
    background-color : white;
    flex-direction:column;
    align-items:flex-start;
    justify-content:center;
`; 

const LocalLeftFilter = styled.TouchableOpacity`
    padding-left : ${constants.width*0.04};
    flex-direction:row;
    align-items:center;
    padding-top :15px;
    padding-bottom:5px;
`; 

const LeftText = styled.Text`
  padding-left:10px;
`; 

const Grid =styled.View`
  flex-direction : row; 
  flex-wrap:wrap;
  justify-content:space-evenly;
  
`;

export default ({navigation,route}) =>{


  useLayoutEffect(()=>{
    navigation.setOptions({
      title: "NormalList",
      gestureEnabled: true,
      headerTitleAlign: "center",
      headerBackTitleVisible: true
    })
  },[]);

  
  return (
    <Container>
      <LocalLeftFilter>
        <NavIcon name={'md-color-filter'} color={"#000"} size={30} />
        <LeftText>최신 순</LeftText>
      </LocalLeftFilter>
      <ScrollView>
        <Grid>
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </Grid>
      </ScrollView>
    </Container>
  )
}