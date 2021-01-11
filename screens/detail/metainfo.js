import React from "react";
import { Image, View } from "react-native";
import { useState } from "react/cjs/react.development";
import styled from "styled-components";
import Foodtype from "../../components/Foodtype";
import constants from "../../constants";


const Container = styled.View`  
  background-color:white;
  padding: 10px;
`;
const Brand= styled.Text`
  color: #a0a0a0;
  font-weight:bold;
`;
const Name= styled.Text`
  margin-top: 5px;
  color: #000;
  font-size:30px;
  font-weight:bold;
`;
const WeightPrice = styled.Text`
  color: #a0a0a0;
  font-size:16px;
`;

const TypeInfo= styled.View`
  display:flex;
  flex-direction:row;
  align-items:center;
  height:${constants.height/14};
  width:${constants.width/5};
  margin-top:10px;
`
const Preference= styled.View`
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:center;
  width:${constants.width/7};
  height:${constants.height/14};
  border-radius:50;
  background-color:#3d3d3d;

`
const PreferenceText= styled.Text`
  color:#fff;
  font-weight:bold;
  /* text-align:center; */
`

const FoodTypes= styled.View`
  display:flex;
  flex-direction:row;
  justify-content:flex-start;
  width: ${constants.width-constants.width/7};
  height:100%;
  margin-left:20px;
`

export default ({
  brand,
  name,
  weight,
  price,
  preference,
  foodtypes
}) => {

  const result = (()=>{
    const res = new Array(5).fill(0); 
    foodtypes.forEach(({name},i)=>{
      switch (name) {
        case "채식":
          res[0]=1; 
          break;
      
        case "유제품":
          res[1]=1; 
          break;
    
        case "달걀":
          res[2]=1; 
          break;
  
        case "어류":
          res[3]=1; 
          break;

        case "조류":
          res[4]=1; 
          break;
      }
    })
    return res; 
  })();

  return(
  <Container>
      <Brand>{brand}</Brand>
      <Name>{name}</Name>
      <WeightPrice>{weight}g / {price}원</WeightPrice>
      <TypeInfo>
        <Preference>
          <PreferenceText>
            {preference}
          </PreferenceText>
        </Preference>
        <FoodTypes>
          <Foodtype type={"채식"} status={result[0]} />
          <Foodtype type={"유제품"} status={result[1]} />
          <Foodtype type={"달걀"} status={result[2]} />
          <Foodtype type={"어류"} status={result[3]} />
          <Foodtype type={"조류"} status={result[4]} />
          {/* <Foodtype type={"화학첨가물"} status={result[5]} /> */}
        </FoodTypes>
      </TypeInfo>
    </Container>
  ) 
}