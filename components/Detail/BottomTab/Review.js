import React from "react";
import { Image,TouchableOpacity } from "react-native";
import styled from "styled-components"; 
import constants from "../../../constants";
import Star from "./Star";


const Container = styled.View`
    height:${constants.height/5.5};
    /* width:${constants.width}; */
    margin-top:20px;
    justify-content:flex-start;
    border-bottom-color:#ececec;
    border-bottom-width:1;
`; 

const User = styled.View`
    flex-direction:row;
    justify-content: space-between;
    align-items:center;
`; 

const Profile = styled.View`
    flex-direction:row;
    align-items:center;

`; 

const Touchable = styled.TouchableOpacity``; 

const NameStar = styled.View`
    margin-left:5px;
`; 

const Name = styled.Text`
`; 

const Date = styled.Text``; 

const Description = styled.Text`
    margin-top:20px;
    overflow:hidden;
`;


const Review = ()=>{
    return(

        <Container>
        <User>
            <Profile>
                <Touchable>
                    <Image
                        style={{
                            width:constants.width/7,
                            height:constants.height/14,
                            borderRadius:100 
                        }}
                        source={require('./../../../assets/post.png')}
                        />
                </Touchable>
                <NameStar>
                    <Name>킬리만자로의 독수리</Name>
                    <Star rating={3.6} size={20}></Star>
                </NameStar>
            </Profile>
            <Date>2020.09.08</Date>
        </User>
        <Description numberOfLines={2} ellipsizeMode='tail'>이 집 독수리 카레는 참 맛있군요. 훌륭합니다. 하지만 킬리만자로 스파이시 카레에 비한다면 형편없군요. 여러분 먹어보고 비교하세요.</Description>
    </Container>    
    )
}

export default Review; 