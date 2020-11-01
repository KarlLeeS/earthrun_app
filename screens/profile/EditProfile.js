
import React, { useState } from "react";
import { Image ,ImageBackground,Text,TouchableOpacity} from "react-native";
import { ScrollView } from "react-native";
import styled from "styled-components";
import { useUser } from "../../AuthContext";
import NavIcon from "../../components/NavIcon";
import Post from "../../components/Post";
import PreferenceImage from "../../components/Profile/PreferenceImage";
import useInput from "../../components/useInput";
import constants from "../../constants";
import { ConvertToKorean } from "../../utils";

const Container = styled.View`
  background-color:white;
  /* height:${constants.height}; */
`; 
const Header = styled.View`
  flex-direction:row;
  justify-content:space-between;
  align-items:center;
  padding: 15px 15px 0px 15px;
`;

const HeaderTitle = styled.Text`
  font-size:16px;
  left:5px;
  /* font-weight:bold; */
`;
const Touchable= styled.TouchableOpacity``

const UserMeta = styled.View`
  justify-content:center;
  align-items:center;
  border-bottom-color:#f4f4f4;
  border-bottom-width:5px;
  padding-bottom:15px;
`;

const UploadPicture = styled.View`
  position:absolute;
  width:26px;
  height:26px;
  justify-content:center;
  align-items:center;
  right:5px;
  bottom:5px;
  background-color:#ececec;
  border-radius:100;

`;


const Save =styled.Text`
  color:#bababa;
`;


const Input = styled.TextInput`
  width:${constants.width-40}px;
  height:${constants.height/20};
  margin :10px 20px;
  border:1px solid #dbdbdb;
  padding-left:10px;
  border-radius:5px;  

`;

const Start = styled.View`
  padding-left:20px;
  padding-top:20px;
  padding-bottom:30px;
  border-bottom-color:#f4f4f4;
  border-bottom-width:5px;
`;

const Title = styled.Text`
  font-size:18px;
  font-weight:bold;
  padding-bottom:15px;
`; 

const StartContainer = styled.View`
  width:${constants.width-40}px;
  justify-content:center;
  height:${constants.height/20};
  border:1px solid #dbdbdb;
  padding-left:10px;
  border-radius:5px;  
`;

const StartText = styled.Text`
  /* font-size: */
`;

const PreferPick = styled.View`
  padding-left:20px;
  padding-top:20px;
  padding-bottom:30px;
  border-bottom-color:#f4f4f4;
  border-bottom-width:5px;
`;

const PreferBottom = styled.View``;
const PreferButton = styled.Text`
  width:${constants.width/7};
  height:${constants.height/14};
  color:${props=>props.on===1?"#fff":"#c7c7c7"};
  /* color:#fff; */
  background-color:${props=>props.on?"#00cf85":"#ececec"};
  /* background-color:red; */
  font-weight:bold;
  border-radius:10;
  text-align:center;
  line-height:${constants.height/14};
  margin-right:15px;

`;

const Images = styled.View`
  flex-direction:row;
`;

const Wrapper = styled.View`
  justify-content:center;
  align-items:center;
`;
const PreferItem = styled.View`
  flex-direction:row;
  align-items:center;
  margin-bottom:10px;
`;
const SmallText = styled.Text`
  font-size:12px;
`;

const makeArr=(name)=>{
  switch (name) {
    case "비건":
      return [1,0,0,0,0,0];
      
    case "락토":
      return [0,1,0,0,0,0];
    case "오보":
      return [0,0,1,0,0,0];
      
    case "락토오보":
      return [0,0,0,1,0,0];
      
    case "페스코":
      return [0,0,0,0,1,0];
      
    case "폴로":
      return [0,0,0,0,0,1];
      
  }

}

const EditProfile = ({navigation}) => {
  const user=  useUser()
  // console.log(user);
  const usernameInput = useInput(user.username); 
  const currentPreference = user.preference.name;

  
  let [arr,setArr]=useState(makeArr(user.preference.name)); 

  
  return(
    <ScrollView>
      <Container>
        <Header>
          <Touchable onPress={()=>navigation.navigate("MainProfile")}>
            <NavIcon name={"md-arrow-back"} size={24} color={"#000"}/>
          </Touchable>
          <HeaderTitle>프로필 수정</HeaderTitle>
          <Touchable>
            <Save>저장</Save>
          </Touchable>
        </Header>
        <UserMeta>
          <ImageBackground
            resizeMode="center"
            style={{
                position:"relative",
                width:constants.width/4,
                height:constants.height/8,
                borderRadius: 100,
            }}
            source={  require('./../../assets/post.png')}
          >
              <UploadPicture>
                <NavIcon name={"md-camera"} size={18} color={"#a0a0a0"} />
              </UploadPicture>
          </ImageBackground>
          <Input value="이제니" />
        </UserMeta>
        <Start>
          <Title>채식 시작일 날짜<SmallText> ( 유형을 바꾸시면 오늘로 바뀌어요! ) </SmallText></Title>
          <StartContainer>
          <StartText>{`${ConvertToKorean(user.typeStart)}`}</StartText>
          </StartContainer>
        </Start>

        <PreferPick>
          <Title>지향하는 채식주의 유형</Title>
          <PreferBottom>
                <PreferItem>
                  <Touchable onPress={()=>setArr([1,0,0,0,0,0])} >
                    <PreferButton on={arr[0]}>비건</PreferButton>
                  </Touchable>
                  <Images>
                    <PreferenceImage url={"temp"} name="채식" />
                  </Images>
                </PreferItem>
                
                <PreferItem>
                  <Touchable onPress={()=>setArr([0,1,0,0,0,0])} >
                    <PreferButton on={arr[1]}>락토</PreferButton>
                  </Touchable>
                  <Images>
                    <PreferenceImage url={"temp"} name="채식" />
                    <PreferenceImage url={"temp"} name="우유/유제품" />
                  </Images>
                </PreferItem>
                
                <PreferItem>
                  <Touchable onPress={()=>setArr([0,0,1,0,0,0])}>
                    <PreferButton on={arr[2]}>오보</PreferButton>
                  </Touchable>
                  <Images>
                    <PreferenceImage url={"temp"} name="채식" />
                    <PreferenceImage empty={true} name="우유/유제품" />
                    <PreferenceImage url={"temp"} name="달걀" />
                  </Images>
                </PreferItem>
                
                <PreferItem>
                  <Touchable onPress={()=>setArr([0,0,0,1,0,0])} >
                    <PreferButton on={arr[3]}>락토오보</PreferButton>
                  </Touchable>
                  <Images>
                    <PreferenceImage url={"temp"} name="채식" />
                    <PreferenceImage url={"temp"} name="우유/유제품" />
                    <PreferenceImage url={"temp"} name="달걀" />
                  </Images>
                </PreferItem>
                
                <PreferItem>
                  <Touchable onPress={()=>setArr([0,0,0,0,1,0])} >
                    <PreferButton on={arr[4]}>페스코</PreferButton>
                  </Touchable>
                  <Images>
                    <PreferenceImage url={"temp"} name="채식" />
                    <PreferenceImage url={"temp"} name="우유/유제품" />
                    <PreferenceImage url={"temp"} name="달걀" />
                    <PreferenceImage url={"temp"} name="어류" />
                  </Images>
                </PreferItem>
                
                <PreferItem>
                  <Touchable onPress={()=>setArr([0,0,0,0,0,1])} >
                    <PreferButton on={arr[5]}>폴로</PreferButton>
                  </Touchable>
                  <Images>
                    <PreferenceImage url={"temp"} name="채식" />
                    <PreferenceImage url={"temp"} name="어류/유제품" />
                    <PreferenceImage url={"temp"} name="달걀" />
                    <PreferenceImage url={"temp"} name="어류" />
                    <PreferenceImage url={"temp"} name="조류" />
                  </Images>
                </PreferItem>
                
          </PreferBottom>
        </PreferPick>
      </Container>
    </ScrollView>
  )
  
}

export default EditProfile; 
