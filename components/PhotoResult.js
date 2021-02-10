import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import {BlurView } from "@react-native-community/blur"
import styled from "styled-components"; 
import constants from '../constants';


const StyledTextVegan = styled.Text`
    color:white;
    font-size:26;
    font-weight:bold;
    margin-bottom:15;
`;
const StyledDescVegan = styled.Text`
    color:white;
    font-size:14;
    margin-bottom:2;
    font-weight:bold;

`;
const StyledBrandVegan = styled.Text`
    color:white;
    font-size:12;
`;

const StyledNextPage = styled.Text`
    color:white;
    font-size:15;
    font-weight:bold;
`;


const StyledContentWrapper =styled.View`
    display:flex;
    flex-direction:row;
    align-items:center;
    padding-bottom:0;
    border-radius:16px;
    border-bottom-color:rgba(255,255,255,0.2);
    border-bottom-width:1px;
`;

const StyledInnerContentWrapper  =styled.View`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    padding:45px 25px;
`;

const StyledContainer = styled.View`
    background-color:rgba(0,0,0,0.25);
    border-radius:16px;
`;

const StyledFooter = styled.TouchableOpacity`
    display:flex;
    justify-content:center;
    align-items:center;
    /* background-color:blue; */
    /* height */
    padding:15px 0px;

`;

const PhotoResult = ({
    type="락토",
    name="파이팅 청귤",
    weight=190,
    brand="스타벅스",
    uri="https://earthrun.s3.ap-northeast-2.amazonaws.com/adFirstOne.jpg"
}) => (
    <StyledContainer>
        <StyledContentWrapper>
            <StyledInnerContentWrapper>
                <StyledTextVegan >{type}입니다.</StyledTextVegan>
                <StyledDescVegan >{name} {weight}ML</StyledDescVegan>
                <StyledBrandVegan >{brand}</StyledBrandVegan>
            </StyledInnerContentWrapper>
            <Image
                resizeMode="cover"
                style={{
                    width:90,
                    height:90,
                    borderRadius:10,
                    marginLeft:20
                    
                }}
                source={{uri:uri}}
            />
        </StyledContentWrapper>

        <StyledFooter>
            <StyledNextPage>
                성분 확인하러 가기
            </StyledNextPage>
        </StyledFooter>
    </StyledContainer>
);

const style= StyleSheet.create({
    asdaSD:{
        // 
    }
})

export default PhotoResult;