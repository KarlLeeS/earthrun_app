import React from "react";
import styled from "styled-components";
import {ActivityIndicator,TouchableOpacity} from "react-native";
import constants from "../../constants";
import AuthButton from "../../components/Auth/AuthButton";

const View = styled.View`
    justify-content:center;
    align-items:center; 
    flex:1 ; 
    background-color:white;
`;


const Image = styled.Image`
    width:${constants.width/2.5}; 
`; 


const Touchable = styled.TouchableOpacity`
`; 


const LoginLink = styled.View`
`; 

const LoginLinkText = styled.Text`
    color:${props=>props.theme.blueColor};
    font-weight:600; 
    margin-top:20px;
` 

const AuthHome =({navigation})=>(
    <View>
        <Image resizeMode={"contain"} source={require("../../assets/post.png")}  />
        
        <AuthButton text={"Earthrun 가입하기"} onPress={()=>navigation.navigate("Signup")}/>
        
        <Touchable onPress={()=>navigation.navigate("Login")}>
            <LoginLink>
                <LoginLinkText>로그인</LoginLinkText>
            </LoginLink>
        </Touchable>
    </View>
)

export default AuthHome;