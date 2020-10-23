import React from "react";
import styled from "styled-components/native";
import {Image} from "react-native";
import constants from "../constants";
import NavIcon from "./NavIcon";

const Touchable = styled.TouchableOpacity`
    margin-top:10px;
`;

const TextBrand = styled.Text`
    font-size : 12px;
    padding-top:10px;
    font-weight:bold;
    color: #BDBDBD;
`;

const TextProductName = styled.Text`
    color: #333333;
    font-size: 16px;
    padding-top : 5px;
    font-weight:bold;
`;

const TextWieghtPrice = styled.Text`
    font-size: 12px;
    padding-top : 5px;
    color: #a0a0a0;
`;

const Scores = styled.View`
    padding-top:8px;
    flex-direction:row;
    justify-content:flex-start;
    align-items:center;
`;

const TextRating = styled.Text`
    color: #0069ca;
`;

const TextReviewCount = styled.Text`
    color: #717171;
    padding-left:5px;
`;

const Post = ()=>(
    <Touchable onPress={()=>{console.log("Post를 클릭했다.")}}>
        <Image
            style={{
                width:constants.width/2.3,
                height:constants.height/4.6
            }}
            source={require('./../assets/post.png')}
        />
        <TextBrand>독수리 오형제</TextBrand>
        <TextProductName>독수리 1호</TextProductName>
        <TextWieghtPrice>
            30kg/10억
        </TextWieghtPrice>
        <Scores>
            <NavIcon name={'md-star'} color={"#0069ca"} size={20} />
            <TextRating>4.9점</TextRating>
            <TextReviewCount>(108)</TextReviewCount>
        </Scores>
    </Touchable>
)

export default Post;