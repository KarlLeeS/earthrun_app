import React from "react";
import styled from "styled-components";
import { Image, TouchableOpacity } from "react-native";
import constants from "../../../constants";

const Container = styled.TouchableOpacity`
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    margin-bottom:20px;
`;

const Left =styled.View`
    flex-direction:row;
    align-items:center;
`; 
const Info =styled.View`
    margin-left:10px;
    justify-content:space-between;
`; 

const Brand = styled.Text`
    color:#dbdbdb;
    margin-bottom:5px;

`; 
const Name = styled.Text`
    color:#3d3d3d;
    font-size:20px;
    letter-spacing:-1px;
`; 
const Right = styled.Text``; 
const Price = styled.Text`
    color:#3d3d3d;
    font-size:25px;
    font-weight:bold;
`; 

const Won = styled.Text`
    color: #3d3d3d;
    font-size:20px;    
`; 

const OnLineBox = ()=>{
    return (
        <Container>
            <Left>  
                <Image
                style={{
                    width:constants.width/7,
                    height:constants.height/14,
                    borderRadius:100
                }}
                source={require('./../../../assets/post.png')}
                />
                <Info>
                    <Brand>오픈예정</Brand>
                    <Name>오픈예정</Name>
                </Info>
            </Left>
            <Right>
                <Price>0000</Price>
                <Won>원</Won>
            </Right>
        </Container>        
    )
}

export default OnLineBox; 