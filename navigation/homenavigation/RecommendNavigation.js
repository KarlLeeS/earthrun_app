import React, { useState } from "react";
import { ScrollView,TouchableOpacity } from "react-native";
import styled from "styled-components";
import NavIcon from "../../components/NavIcon";
import Post from "../../components/Post";
import TempTabScreen from "../../screens/detail/tempTabScreen";
import TempMainScreen from "../../screens/home/MainScreen";
import RecommendBottomNavigation from "./RecommendBottomNavigation";

// // 나를 위한 추천 

// certification:[String!]!
// preferences:[String!]!
// orderingoption:ORDERINGOPTION
// userPrefer:String

// // 친구 추천 

// x 

// // 가장 핫한 

// certification:[String!]!
// preferences:[String!]!
// orderingoption:ORDERINGOPTION

// // 가장 신상

// certification:[String!]!
// preferences:[String!]!
// orderingoption:ORDERINGOPTION

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


const RecommendNavigation = ()=>{
  const [hotest,setHotest] = useState([null]);
  const [friends,setFriends] = useState(null);
  const [newest,setNewest] = useState(null);
  const [forMe,setForme] = useState(null);

  return (
    <>
      <RecommendContainer>
        <TopBar>
          <TopBarText>이제니님을 위한 추첨 상품</TopBarText>
          <TopBarLink onPress={()=>{console.log(1)}}>
            <NavIcon name={"md-arrow-forward"} />
          </TopBarLink>
        </TopBar>
        <ScrollView horizontal>
          <Grid>
            <Post marginRight={15} />
            <Post marginRight={15} />
            <Post marginRight={15} />
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
            <Post marginRight={15} />
            <Post marginRight={15} />
            <Post marginRight={15} />
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
            <Post marginRight={15} />
            <Post marginRight={15} />
            <Post marginRight={15} />
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
            <Post marginRight={15} />
            <Post marginRight={15} />
            <Post marginRight={15} />
          </Grid>
        </ScrollView>
      </RecommendContainer>
      <BottomTitle>
        이번주 클릭 TOP 5
      </BottomTitle>
      <RecommendBottomNavigation />
    </>
  ) 
}

export default RecommendNavigation;



// TO DO 추천 리스트 4개 어떻게 표현할 것인가? 