import React from "react";
import TabNavigation from "./TabNavigation"
import styled from "styled-components/native";
import {ScrollView,RefreshControl, View, Text, Dimensions, StatusBar} from "react-native";

import UserProfile from "../../components/UserProfile"
import Notification from "../../components/Notification"
import SearchBar from "../../components/SearchBar"
import FloatingButton from "../../components/FloatingButton";


const Container = styled.View`
  background-color: white;
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

const HomeNavigation=()=>{
  console.log("Rendering HomeNavigation");
  return (
    <View>
    <ScrollView >
        <Container>
            <Header>
              <UserProfile />
              <Notification />
            </Header>
            <Search>
              <SearchBar fake={true} />
            </Search>
            <TabNavigation />
        </Container>
    </ScrollView>  
    <FloatingButton label="이거 비건이야?" />
    </View>

  )
}

export default HomeNavigation;



