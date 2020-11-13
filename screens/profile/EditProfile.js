
import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { Image ,ImageBackground,Text,TouchableOpacity} from "react-native";
import { ScrollView } from "react-native";
import styled from "styled-components";
import { ME, usePhotoMaterial, useSetUser, useUser } from "../../AuthContext";
import NavIcon from "../../components/NavIcon";
import PreferenceImage from "../../components/Profile/PreferenceImage";
import constants from "../../constants";
import { ConvertToKorean } from "../../utils";
import {gql} from "apollo-boost";
import {USER_FRAGMENT} from "../../fragments"; 
import useInput from "../../hooks/useInput";
import Loader from "../../components/Loader";
const Container = styled.View`
  background-color:white;
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
const Touchable= styled.TouchableOpacity`
  position:relative;

`

const UserMeta = styled.View`
  position:relative;
  justify-content:center;
  align-items:center;
  border-bottom-color:#f4f4f4;
  border-bottom-width:5px;
  padding-bottom:15px;
`;

const UploadPicture = styled.TouchableOpacity`
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

const convertToText=(arr)=>{

  const getText=(index)=>{
    switch (index) {
      case 0:
        return "비건";
        
      case 1:
        return "락토";
      case 2:
        return "오보";
        
      case 3:
        return "락토오보";
        
      case 4: 
        return "페스코";
        
      case 5:
        return "폴로";
    }
  }
  let result ;
  arr.forEach((e,i)=>{
    if(e===1){
      result = getText(i);
    }
  })
  return result;
  
}

export const EDIT_PROFILE = gql`
  mutation editUser(
    $username:String,
    $preference:String,
    $avatar:String
  ){
    editUser(
      username:$username,
      preference:$preference,
      avatar:$avatar
    )
  }
`;




const EditProfile = ({navigation}) => {
  console.log("EditProfile 다시하니?");

  const user=  useUser();
  const setUser = useSetUser();
  const usernameInput = useInput(user?.username); 
  const currentPreference = user?.preference.name; 
  const avatar = usePhotoMaterial();
  const [loading,setLoading] = useState(false); 
  let [arr,setArr]=useState(makeArr(user?.preference.name)); 

  const OnSubmit = async()=>{
    setLoading(true);
    const result = await editProfileMutation();

    setLoading(false);

    // setTimeout(() => {
    //   console.log(result);
    //   navigation.goBack();       
    // }, 200);
    // console.log(result);
  }

  const [editProfileMutation] = useMutation(EDIT_PROFILE,{
    variables:{
      username:usernameInput.value,
      preference:convertToText(arr),
      avatar:avatar[0]
    },
    onCompleted:()=>{
        // console.log("Before" ,user);
        if(user.preference.name !== convertToText(arr)){
          setUser(user=>(
            {
                ...user,
                username:usernameInput.value,
                preference:{
                  name:convertToText(arr)
                },
                avatar:avatar[0] ,
                typeStart:new Date().toISOString()
            }
          ));
        }else{
          setUser(user=>(
            {
                ...user,
                username:usernameInput.value,
                avatar:avatar[0]
            }
          ));
        }
            
    }
  })

  
  return loading?
    (
      <Loader />
    )
  :
    ( user&&
    <ScrollView>
      <Container>
        <Header>
          <Touchable onPress={()=>navigation.navigate("MainProfile")}>
            <NavIcon name={"md-arrow-back"} size={24} color={"#000"}/>
          </Touchable>
          <HeaderTitle>프로필 수정</HeaderTitle>
          <Touchable onPress={()=>OnSubmit()}>
            <Save>저장</Save>
          </Touchable>
        </Header>
        <UserMeta>
          <Touchable>
            <Image 
              style={{
                resizeMode:"cover",
                position:"relative",
                width:constants.width/4,
                height:constants.height/8,
                borderRadius: 100,
              }}
              source ={
                  user
                  ?
                    avatar[0]
                    ?
                      {uri:avatar[0]}
                    :
                      {uri:user?.avatar}
                  : 
                    require("../../assets/empty.png") 
              }
            >
            </Image>
            <UploadPicture onPress={()=>navigation.navigate("SelectPhoto",{
                limit:1,
                defaultViewCount:20
              })}>
                <NavIcon name={"md-camera"} size={18} color={"#a0a0a0"} />
              </UploadPicture>
          </Touchable>
          
          <Input value={usernameInput.value} onChangeText={usernameInput.onChange} />
        </UserMeta>
        <Start>
          <Title>채식 시작일 날짜<SmallText> ( 유형을 바꾸시면 오늘로 바뀌어요! ) </SmallText></Title>
          <StartContainer>
          <StartText>{`${ConvertToKorean(user?.typeStart)}`}</StartText>
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
