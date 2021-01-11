import React, { useState } from "react"; 
import {Button, TouchableOpacity} from "react-native";
import styled from "styled-components";
import Foodtype from "../../components/Foodtype";
import NavIcon from "../../components/NavIcon";
import constants from "../../constants";

const Container = styled.View`
    background-color:white;
    border-radius:5;
    width:${constants.width};
    height:${constants.height};
`; 

const Header = styled.View`
    flex-direction:row;
    justify-content:space-between;
    padding:20px;

`; 

const Title = styled.View`
    margin:0 20px;
    padding: 15px 0px;
    border-bottom-width:1px;
    border-bottom-color:#e9e9e9;
`; 

const MainText = styled.Text`
    font-size:20px;
    font-weight:bold;
`;
const SubText = styled.Text`

`;

const FoodTypes= styled.View`
  display:flex;
  flex-direction:row;
  margin:0 20px;
  padding:20px 0;
`

const Body = styled.View`
    border-top-color:#f8f8f8;
    border-top-width:4px;
    padding: 20px;
`;


const BodyTitle = styled.Text`
    font-size:16px; 
    font-weight:bold;
`;


const BodyText = styled.Text`
    margin-top:10px;
    letter-spacing:1px;
`;


const MaterialDetail = ({
    name,description,result
})=>{   

    return (
        <Container>
            <Header>    
                <TouchableOpacity>
                    <NavIcon name={"md-arrow-back"} color={"#000"} size={24} />
                </TouchableOpacity>
            </Header>
            <Title>
                <MainText>갈색황색소</MainText>
                <SubText>Persimmon Color</SubText>
            </Title>
            <FoodTypes>
                <Foodtype type={"채식"} status={1} />
                <Foodtype type={"유제품"} status={1} />
                <Foodtype type={"달걀"} status={1} />
                <Foodtype type={"어류"} status={1} />
                <Foodtype type={"조류"} status={1} />
                <Foodtype type={"화학첨가물"} status={1} />
            </FoodTypes>
            <Body>
                <BodyTitle>
                    관련 설명 
                </BodyTitle>
                <BodyText>
                한이 품목은 감나무의 과실을 발효 * 열처리하여 얻어진 색소로서 플라보노이드를 주성분으로 하는 것이다. 다만 색가조정, 품질보존 등을 위하여 희석제, 안정제 및 용제등을 첨가할 수 있다.
                </BodyText>
            </Body>
        </Container>
    ); 
}

export default MaterialDetail; 