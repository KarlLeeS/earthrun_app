import React from "react";
import styled from "styled-components";
import constants from "../../constants";
import {ActivityIndicator,TouchableOpacity} from "react-native";

const Touchable = styled.TouchableOpacity``; 

const Container = styled.View`
    background-color:${props=>props.bgColor?props.bgColor:props.theme.blueColor};
    padding :10px;
    margin:0px 50px; 
    border-radius:4px;
    width:${constants.width/1.7};
`;  

const Text = styled.Text`
    color:white; 
    text-align:center; 
    font-weight:600; 
` ;

const AuthButton = ({text,onPress,loading=false,bgColor=null})=>{
    return(
        <Touchable disabled={loading} onPress={onPress}>
            <Container bgColor={bgColor}>
                {loading ? <ActivityIndicator color={"white"} />:<Text>{text}</Text>}
            </Container>
        </Touchable>
    )
}

export default AuthButton;