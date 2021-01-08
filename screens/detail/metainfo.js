import React from "react";
import { Image, View } from "react-native";
import { useState } from "react/cjs/react.development";
import styled from "styled-components";
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
  /* margin-left:100px; */
  width: ${constants.width-constants.width/7};
  height:100%;
  margin-left:20px;
`
const FoodType= styled.View`
  display:flex;
  justify-content:space-between;
  margin-right:20px;

`
const FoodTypeText= styled.Text`
  font-size:12px;
  font-weight:bold;
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

  return(<Container>
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
          <FoodType>
            <Image
              resizeMode="contain"
              style={{
                width:constants.width/10,
                height:constants.height/20
              }}
              source={result[0]===1?require('../../assets/icon_vegetype_color_leaf.png'):require('../../assets/icon_vegetype_grey_leaf.png')}
            />
            <View style={{justifyContent:"flex-end",alignItems:"center"}}>
              <FoodTypeText>
                {foodtypes[0].name}
              </FoodTypeText>
            </View>
          </FoodType>

          <FoodType>
            <Image 
              resizeMode="contain"
              style={{
                width:constants.width/10,
                height:constants.height/20
              }}
              source={result[1]===1?require('../../assets/icon_vegetype_color_milk.png'):require('../../assets/icon_vegetype_grey_milk.png')}
            />
            <View style={{justifyContent:"flex-end",alignItems:"center"}}>
              <FoodTypeText>
                채식 
              </FoodTypeText>
            </View>
          </FoodType>

          <FoodType>
            <Image 
              resizeMode="contain"
              style={{
                width:constants.width/10,
                height:constants.height/20
              }}
              source={result[2]===1?require('../../assets/icon_vegetype_color_egg.png'):require('../../assets/icon_vegetype_grey_egg.png')}
            />
            <View style={{justifyContent:"flex-end",alignItems:"center"}}>
              <FoodTypeText>
                채식 
              </FoodTypeText>
            </View>
          </FoodType>

          <FoodType>
            <Image 
              resizeMode="contain"
              style={{
                width:constants.width/10,
                height:constants.height/20
              }}
              source={result[3]===1?require('../../assets/icon_vegetype_color_fish.png'):require('../../assets/icon_vegetype_grey_fish.png')}
            />
            <View style={{justifyContent:"flex-end",alignItems:"center"}}>
              <FoodTypeText>
                채식 
              </FoodTypeText>
            </View>
            
          </FoodType>

          <FoodType>
            <Image 
              resizeMode="contain"
              style={{
                width:constants.width/10,
                height:constants.height/20
              }}
              source={result[4]===1?require('../../assets/icon_vegetype_color_chicken.png'):require('../../assets/icon_vegetype_grey_chicken.png')}
            />
            <View style={{justifyContent:"flex-end",alignItems:"center"}}>
              <FoodTypeText>
                채식 
              </FoodTypeText>
            </View>
          </FoodType>

        </FoodTypes>
      </TypeInfo>
    </Container>
  ) 
}