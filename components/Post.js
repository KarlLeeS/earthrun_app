import React from "react";
import styled from "styled-components/native";
import {Image} from "react-native";
import constants from "../constants";
import NavIcon from "./NavIcon";

const Touchable = styled.TouchableOpacity`
    margin-top:10px;
    /* padding-right:10px; */
    /* background-color:white; */
    padding-right: ${props=>props.marginRight?props.marginRight:0};
    flex-direction: ${props=>props.fromRecommend?"row":"column"};
`;

const MetaInfo = styled.View`
    margin-left:${props=>props.fromRecommend?20:0};
`;

const TextBrand = styled.Text`
    font-size :12px;
    padding-top: ${props=>props.fromRecommend?"5px":"10px"};
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

const Post = (props)=>{

    return (
        <Touchable marginRight={props.marginRight} fromRecommend={props.fromRecommend} onPress={()=>{console.log("Post를 클릭했다.")}}>
            <Image
                style={{
                    width:props.fromRecommend?constants.width/4:constants.width/2.3,
                    height:props.fromRecommend?constants.height/8:constants.height/4.6,
                    borderRadius: props.fromRecommend?20:0
                }}
                source={require('./../assets/post.png')}
            />
            <MetaInfo fromRecommend={props.fromRecommend}>
                <TextBrand fromRecommend={props.fromRecommend}>독수리 오형제</TextBrand>
                <TextProductName>독수리 1호</TextProductName>
                <TextWieghtPrice>
                    30kg/10억
                </TextWieghtPrice>
                <Scores>
                    <NavIcon name={'md-star'} color={"#0069ca"} size={20} />
                    <TextRating>4.9점</TextRating>
                    <TextReviewCount>(108)</TextReviewCount>
                </Scores>
            </MetaInfo>
        </Touchable>
    )
}

export default Post;