import { useQuery } from "@apollo/client";
import {gql} from "apollo-boost";
import React, { useState } from "react";
import { ScrollView,TouchableOpacity } from "react-native";
import styled from "styled-components";
import { useUser } from "../../AuthContext";
import Loader from "../../components/Loader";
import NavIcon from "../../components/NavIcon";
import Post from "../../components/Post";
import { POST_FRAGMENT } from "../../fragments";
import TempTabScreen from "../../screens/detail/tempTabScreen";
import TempMainScreen from "../../screens/home/MainScreen";
import RecommendBottomNavigation from "./RecommendBottomNavigation";

const Container = styled.View`
  background-color:white;
  /* justify-content:center; */
`;

const RecommendContainer = styled.View`
  background-color:white;
  padding-left:15px;
  padding-top:15px;
  padding : 15px 0px 0px 15px;
`;

const TopBar = styled.View`
  flex-direction:row;
  justify-content:space-between;
  align-items:center;
  margin : 20px 20px 20px 0px;
`; 

const TopBarText = styled.Text`
  font-size:20px;
`; 

const TopBarLink = styled.TouchableOpacity`

`; 

const Grid =styled.View`
  flex-direction:row; 
`;

const BottomTitle = styled.Text`
  background-color:white; 
  font-size:25px;
  padding:40px 0px 15px 15px; 

`;

export const GET_ME = gql`
  query RecommendForMe(
    $userPrefer: String!
  ){
    RecommendForMe(
      userPrefer:$userPrefer
    ){
      ...PostParts
    }
  }
  ${POST_FRAGMENT}
`; 

export const GET_HOTEST = gql`
  query RecommendHotest(
      $userPrefer: String!
    ){
      RecommendHotest(
        userPrefer:$userPrefer
      ){
        ...PostParts
      }
    }
    ${POST_FRAGMENT}
`; 

export const GET_NEW = gql`
  query RecommendNewest(
        $userPrefer: String!
      ){
        RecommendNewest(
          userPrefer:$userPrefer
        ){
          ...PostParts
        }
      }
      ${POST_FRAGMENT}
`; 

export const GET_FRIENDS = gql`
  query RecommendFriendsLike{
    RecommendFriendsLike{
        ...PostParts
      }
    }
    ${POST_FRAGMENT}
`; 

const RecommendNavigation = ()=>{
  const user = useUser(); 
  const {loading:loadingME, data:dataME} = useQuery(GET_ME,{
    variables:{
      userPrefer:user.preference.name
    }
  }); 
  
  const {loading:loadingHOT, data:dataHOT} = useQuery(GET_HOTEST,{
    variables:{
      userPrefer:user.preference.name
    }
  }); 
  
  const {loading:loadingNEW, data:dataNEW} = useQuery(GET_NEW,{
    variables:{
      userPrefer:user.preference.name
    }
  }); 
  
  const {loading:loadingFRIENDS, data:dataFRIENDS} = useQuery(GET_FRIENDS); 


  return (
    <Container>
      <RecommendContainer>
        <TopBar>
          <TopBarText>{user.username}님을 위한 추첨 상품</TopBarText>
          <TopBarLink onPress={()=>{console.log(1)}}>
            <NavIcon name={"md-arrow-forward"} />
          </TopBarLink>
        </TopBar>
        <ScrollView horizontal>
          <Grid>
            {
              loadingME
              ?
                <Loader />
              :
                dataME&&dataME.RecommendForMe&&dataME.RecommendForMe.map(e=>(
                  <Post key={e.id} fromRecommendMyprofile={true} {...e} />
                ))
            }
          </Grid>
        </ScrollView>
      </RecommendContainer>
      
      <RecommendContainer>
        <TopBar>
          <TopBarText>요즘 핫한 상품🔥</TopBarText>
          <TopBarLink onPress={()=>{console.log(1)}}>
            <NavIcon name={"md-arrow-forward"} />
          </TopBarLink>
        </TopBar>
        <ScrollView horizontal>
          <Grid>
            {
              loadingHOT
              ?
                <Loader />
              :
                dataHOT&&dataHOT.RecommendHotest&&dataHOT.RecommendHotest.map(e=>(
                  <Post key={e.id} fromRecommendMyprofile={true} {...e} />
                ))
            }
          </Grid>
        </ScrollView>
      </RecommendContainer>

      <RecommendContainer>
        <TopBar>
          <TopBarText>친구들이 좋아하는 상품 ❤️</TopBarText>
          <TopBarLink onPress={()=>{console.log(1)}}>
            <NavIcon name={"md-arrow-forward"} />
          </TopBarLink>
        </TopBar>
        <ScrollView horizontal>
          <Grid>
            {
              loadingFRIENDS 
              ?
                <Loader />
              :
                dataFRIENDS&&dataFRIENDS.RecommendFriendsLike&&dataFRIENDS.RecommendFriendsLike.map(e=>(
                  <Post key={e.id} fromRecommendMyprofile={true} {...e} />
                ))
            }
          </Grid>
        </ScrollView>
      </RecommendContainer>

      <RecommendContainer>
        <TopBar>
          <TopBarText>새롭게 업로드 된 상품 🎉️</TopBarText>
          <TopBarLink onPress={()=>{console.log(1)}}>
            <NavIcon name={"md-arrow-forward"} />
          </TopBarLink>
        </TopBar>
        <ScrollView horizontal>
          <Grid>
            {
              loadingNEW
              ?
                <Loader />
              :
                dataNEW&&dataNEW.RecommendNewest&&dataNEW.RecommendNewest.map(e=>(
                  <Post key={e.id} fromRecommendMyprofile={true} {...e} />
                ))
            }
          </Grid>
        </ScrollView>
      </RecommendContainer>
      <BottomTitle>
        이번주 클릭 TOP 5
      </BottomTitle>
      <RecommendBottomNavigation />
    </Container>
  ) 
}

export default RecommendNavigation;



// TO DO 추천 리스트 4개 어떻게 표현할 것인가? 