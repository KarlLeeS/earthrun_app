import React, { useState } from "react"; 
import {Button, TouchableOpacity} from "react-native";
import styled from "styled-components";
import Foodtype from "../../components/Foodtype";
import NavIcon from "../../components/NavIcon";
import constants from "../../constants";
import { initFoodtypes } from "../../utils";

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
    navigation,
    route:
    {params:{
        material
}}})=>{   
    console.log(material);
    const {
        name,
        text,
        foodtypes,
        isChemical,
        nameEng
    } = material;
    console.log({material});

    const foodtypesArr = initFoodtypes(foodtypes.map(e=>e.name));
    console.log({foodtypesArr});
    return (
        <Container>
            <Header>    
                <TouchableOpacity>
                    <NavIcon name={"md-arrow-back"} color={"#000"} size={24} />
                </TouchableOpacity>
            </Header>
            <Title>
                <MainText>{name}</MainText>
                <SubText>{nameEng}</SubText>
            </Title>
            <FoodTypes>
                <Foodtype type={"채식"} status={foodtypesArr[0]===true?1:0} />
                <Foodtype type={"유제품"} status={foodtypesArr[1]===true?1:0} />
                <Foodtype type={"달걀"} status={foodtypesArr[2]===true?1:0} />
                <Foodtype type={"어류"} status={foodtypesArr[3]===true?1:0} />
                <Foodtype type={"조류"} status={foodtypesArr[4]===true?1:0} />
                <Foodtype type={"화학첨가물"} status={isChemical===true?1:0} />
            </FoodTypes>
            <Body>
                <BodyTitle>
                    관련 설명 
                </BodyTitle>
                <BodyText>
                {text}
                </BodyText>
            </Body>
        </Container>
    ); 
}

export default MaterialDetail; 