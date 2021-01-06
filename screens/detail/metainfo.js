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
  /* text-align:center; */
`

const FoodTypes= styled.View`
  display:flex;
  flex-direction:row;
  justify-content:flex-start;
  /* margin-right:100px; */
  width: ${constants.width-constants.width/7};
  height:100%;
  margin-left:10px;
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
  console.log(
    
  brand,
  name,
  weight,
  price,
  preference,
  foodtypes
  );
  
  
  const [] = useState(foodtypes.map(e=>e.name)); 
  
console.log(preference);
  // {
  //   const result = [0,0,0,0,0]; 

  // }

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
              source={require("../../assets/icon_vegetype_grey_egg.png")}
            />
            <View style={{flex:1,justifyContent:"flex-end",alignItems:"center"}}>
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
              source={require("../../assets/icon_vegetype_grey_egg.png")}
            />
            <View style={{flex:1,justifyContent:"flex-end",alignItems:"center"}}>
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
              source={require("../../assets/icon_vegetype_grey_egg.png")}
            />
            <View style={{flex:1,justifyContent:"flex-end",alignItems:"center"}}>
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
              source={require("../../assets/icon_vegetype_grey_egg.png")}
            />
            <View style={{flex:1,justifyContent:"flex-end",alignItems:"center"}}>
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
              source={require("../../assets/icon_vegetype_grey_egg.png")}
            />
            <View style={{flex:1,justifyContent:"flex-end",alignItems:"center"}}>
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