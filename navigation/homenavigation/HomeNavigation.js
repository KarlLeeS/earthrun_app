import React, { useEffect, useState } from "react";
import TabNavigation from "./TabNavigation"
import TempMainScreen from "../../screens/home/MainScreen"
import styled from "styled-components/native";
import {ScrollView,RefreshControl, View, Text, Dimensions, StatusBar} from "react-native";

import Post from "../../components/Post";

import UserProfile from "../../components/UserProfile"
import Notification from "../../components/Notification"
import SearchBar from "../../components/SearchBar"

import constants from "../../constants";
import { USER_FRAGMENT } from "../../fragments";
import Loader from "../../components/Loader";
import { useDynamicHeight } from "../../AuthContext";

// TO DO 
// 아무리 생각해봐도 이것은 스크린이 맞는 듯하다
// 나중에 파일 정리할 때, 스크린으로 정리하도록 

// const TabNavigationS = styled.TabNavigation`
//   /* position:sticky; */
// `;
const Container = styled.View`
  background-color: white;
`;

const BoxList = styled.View`
  flex-direction:row;
  justify-content:flex-start;
`;

const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items:center;
  padding:0px 20px;
  margin-top: 50px;
`;


const Search = styled.View`
  padding:0px 20px;
  margin-top:20px;
`;


const HomeNavigation=({navigation,route})=>{

  const dynamicHeight = useDynamicHeight();

  navigation.setOptions({
    navigationOptions :{
      header:null
    }
  });
  console.log("HomeNavigation 다시하니?");

  return (
      <ScrollView>
          <Container >
              <Header>
                <UserProfile />
                <Notification />
              </Header>
              <Search>
                <SearchBar fake />
              </Search>

              <TabNavigation />
          </Container>
        </ScrollView>  
      )
  
}

export default HomeNavigation;



