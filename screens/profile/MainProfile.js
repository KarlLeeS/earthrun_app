
import React from "react";
import { Image ,TouchableOpacity} from "react-native";
import { ScrollView } from "react-native";
import styled from "styled-components";
import { useUser } from "../../AuthContext";
import NavIcon from "../../components/NavIcon";
import Post from "../../components/Post";
import constants from "../../constants";
import {CalculateDays} from "../../utils";

const Container = styled.View`
  background-color:white;
  /* height:${constants.height}; */
`; 
const Header = styled.View`
  flex-direction:row;
  justify-content:space-between;
  padding: 15px 15px 0px 15px;
`;
const Touchable= styled.TouchableOpacity``

const UserMeta = styled.View`
  justify-content:center;
  align-items:center;
`;
const Username= styled.Text`
  /* margin-top:10px; */
  font-size:20px;
  font-weight:bold;
`;
const UserPreferPeriod = styled.View`
  flex-direction:row; 
`;
const UserPrefer = styled.Text`
  font-weight:bold;
`;
const UserPeriod = styled.Text``;

const FriendsLikes =styled.View`
  flex-direction:row;
  justify-content:space-evenly;
  padding: ${constants.height/40}px 0px;
  border-bottom-color:#f4f4f4;
  border-bottom-width:5px;
`;
const FriendsLikesItem= styled.TouchableOpacity`
  align-items:center;

`; 
const FriendsLikesIconContainer = styled.TouchableOpacity`
  width:${constants.width/7};
  height:${constants.height/14};
  border: 1px solid #ececec;
  border-radius:100;
  justify-content:center;
  align-items:center;
`;
const FriendsLikesText = styled.Text`
  font-size:14px;
  margin-top:10px;
  font-weight:bold;
`;

const BottomContainer = styled.View`
  padding:15px 15px 10px 15px ;
  border-bottom-color:#f4f4f4;
  border-bottom-width:5px;
`;
const LinkHeader =styled.View`
  flex-direction:row;
  justify-content:space-between;
`;

const Badge = styled.TouchableOpacity`
  padding-bottom:5px;
  margin-right:10px;
`;
const BadgeText =styled.Text`
  margin-top:10px;
  font-size:14px;
  text-align:center;
`; 


const Title = styled.Text`
  font-size:18px;
  font-family:sans-serif;
  font-weight:bold;

`;
const HorizontalGrid =styled.View`
  flex-direction:row;
`;

const NotBottomImageContainer = styled.View`
  padding:15px;
  border-bottom-color:#f4f4f4;
  border-bottom-width:5px;
`; 

const NotBottomHeader = styled.View`
  padding:10px 0px;
  border-bottom-color:#ececec;
  border-bottom-width:1px;
  padding-bottom:10px;
`;
const NotBottomItem = styled.TouchableOpacity`
  padding:20px 0px;
  border-bottom-color:#ececec;
  border-bottom-width:1px;

`;

const NotBottomItemLast = styled.TouchableOpacity`
  padding:20px 0px;

`;
const InnerText = styled.Text`
  font-size:16px;
`;


const MainProfile = ({navigation}) => {

  const user=  useUser()
  // console.log({user});
  return(
    <ScrollView>
      <Container>
        <Header>
          <Touchable onPress={()=>navigation.navigate("HomeNavigation")}>
            <NavIcon name={"md-arrow-back"} size={24} color={"#000"}/>
          </Touchable>
          <Touchable onPress={()=>navigation.navigate("EditProfile")}>
            <NavIcon name={"md-man"} size={24} color={"#000"}/>
          </Touchable>
        </Header>
        <UserMeta>
          <Image  
                resizeMode="center"
                style={{
                    width:constants.width/4,
                    height:constants.height/8,
                    borderRadius: 100
                }}
                source={  require('./../../assets/post.png')}
            />
          <Username>{user.username}</Username>
          <UserPreferPeriod>
            <UserPrefer>{user.preference.name}</UserPrefer>
            <UserPeriod>  {`${CalculateDays(user.typeStart)}`}일 째</UserPeriod>
          </UserPreferPeriod>
        </UserMeta>
        
        <FriendsLikes>
          <FriendsLikesItem>

            <FriendsLikesIconContainer>
              <NavIcon name={"md-people"} size={24} color={"#000"}/>
            </FriendsLikesIconContainer>
            <FriendsLikesText>비건친구들</FriendsLikesText>
          </FriendsLikesItem>

          <FriendsLikesItem>

            <FriendsLikesIconContainer onPress={()=>{navigation.navigate("NormalList",{ type: "찜목록" })}}>
              <NavIcon name={"md-heart"} size={24} color={"#000"}/>
            </FriendsLikesIconContainer>
            <FriendsLikesText>찜목록</FriendsLikesText>
          </FriendsLikesItem>

        </FriendsLikes>

        <BottomContainer>
          <LinkHeader>
            <Title>활동 뱃지</Title>
            {/* <Touchable>
              <NavIcon name={"md-arrow-forward"} size={24} color={"#000"}/>
            </Touchable> */}
          </LinkHeader>
          <ScrollView horizontal>
                <HorizontalGrid>
                    {user?.badges?.map((e,i)=>(
                        <Badge key={e.id} >
                          <Image 
                            resizeMode="contain"
                            style={{
                                width:constants.width/4,
                                height:constants.height/7,
                            }}
                            source={  require('./../../assets/post.png')}
                          />
                          <BadgeText>{e.name}</BadgeText>
                        </Badge>
                      ))
                    }
                </HorizontalGrid>
          </ScrollView>
        </BottomContainer>

        <BottomContainer>
          <LinkHeader>
            <Title>최근 본 상품</Title>
            <Touchable onPress={()=>{navigation.navigate("NormalList",{ type: "최근 본 상품" })}}>
              <NavIcon name={"md-arrow-forward"} size={24} color={"#000"}/>
            </Touchable>
          </LinkHeader>
          <ScrollView horizontal>
                <HorizontalGrid>
                {
                    user?.recentlyPost?.map((e,i)=>(
                      <Post key={e.id}  {...e} />
                    ))
                  }
                </HorizontalGrid>
          </ScrollView>
        </BottomContainer>

        <NotBottomImageContainer>
          <NotBottomHeader>
            <Title>활동</Title>
          </NotBottomHeader>
          <NotBottomItem onPress={()=>{navigation.navigate("NormalList",{ type: "등록한 리뷰",review:true })}}>
          <InnerText>등록한 리뷰 {(user.reviews[0]!==undefined)?`(${user.reviews.length})`:""}</InnerText>
          </NotBottomItem>
          <NotBottomItem onPress={()=>{navigation.navigate("NormalList",{ type: "등록한 상품" })}}>
            <InnerText>등록한 상품 {(user.uploadedPost[0]!==undefined)?`(${user.uploadedPost.length})`:""}</InnerText>
          </NotBottomItem>
          <NotBottomItemLast>
            <InnerText>새 상품 등록하기</InnerText>
          </NotBottomItemLast>
        </NotBottomImageContainer>
        
        <NotBottomImageContainer>
          <NotBottomHeader >
            <Title>설정/관리</Title>
          </NotBottomHeader>
          <NotBottomItem onPress={()=>{navigation.navigate("NOTYET",{ text: "등록한 상품" })}} >
            <InnerText>설정</InnerText>
          </NotBottomItem>
          <NotBottomItem onPress={()=>{navigation.navigate("NOTYET",{ text: "등록한 상품" })}} >
            <InnerText>고객센터</InnerText>
          </NotBottomItem >
          <NotBottomItemLast onPress={()=>{navigation.navigate("NOTYET",{ text: "등록한 상품" })}}>
            <InnerText>버전</InnerText>
          </NotBottomItemLast>
        </NotBottomImageContainer>
      </Container>
    </ScrollView>
  )
  
}

export default MainProfile; 