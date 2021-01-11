import React from 'react';
import { Image, View } from 'react-native';
import styled from "styled-components"; 
import constants from '../constants';


const FoodType= styled.View`
  display:flex;
  justify-content:space-between;
  align-items:center;
  margin-right:20px;

`
const FoodTypeText= styled.Text`
  font-size:12px;
  font-weight:bold;
  text-align:center;
`



const Foodtype = ({type,status}) =>{

  return(
     type==="채식"
     ?
        <FoodType>
          <Image
            resizeMode="contain"
            style={{
              width:constants.width/10,
              height:constants.height/20
            }}
            source={status===1?require('../assets/icon_vegetype_color_leaf.png'):require('../assets/icon_vegetype_grey_leaf.png')}
          />
          <View style={{justifyContent:"flex-end",alignItems:"center"}}>
            <FoodTypeText>
              {type}
            </FoodTypeText>
          </View>
        </FoodType>
     :
    type==="유제품"
    ?
        <FoodType>
          <Image 
            resizeMode="contain"
            style={{
              width:constants.width/10,
              height:constants.height/20
            }}
            source={status===1?require('../assets/icon_vegetype_color_milk.png'):require('../assets/icon_vegetype_grey_milk.png')}
          />
          <View style={{justifyContent:"flex-end",alignItems:"center"}}>
            <FoodTypeText>
              {type}
            </FoodTypeText>
          </View>
        </FoodType>
    :
    type==="달걀"
    ?
        <FoodType>
          <Image 
            resizeMode="contain"
            style={{
              width:constants.width/10,
              height:constants.height/20
            }}
            source={status===1?require('../assets/icon_vegetype_color_egg.png'):require('../assets/icon_vegetype_grey_egg.png')}
          />
          <View style={{justifyContent:"flex-end",alignItems:"center"}}>
            <FoodTypeText>
              {type}
            </FoodTypeText>
          </View>
        </FoodType>
    :
    type==="어류"
    ?
        <FoodType>
          <Image 
            resizeMode="contain"
            style={{
              width:constants.width/10,
              height:constants.height/20
            }}
            source={status===1?require('../assets/icon_vegetype_color_fish.png'):require('../assets/icon_vegetype_grey_fish.png')}
          />
          <View style={{justifyContent:"flex-end",alignItems:"center"}}>
            <FoodTypeText>
              {type}
            </FoodTypeText>
          </View>
          
        </FoodType>
    :
    type==="조류"
    ?
        <FoodType>
          <Image 
            resizeMode="contain"
            style={{
              width:constants.width/10,
              height:constants.height/20
            }}
            source={status===1?require('../assets/icon_vegetype_color_chicken.png'):require('../assets/icon_vegetype_grey_chicken.png')}
          />
          <View style={{justifyContent:"flex-end",alignItems:"center"}}>
            <FoodTypeText>
              {type}
            </FoodTypeText>
          </View>
        </FoodType>
    :
    type==="화학첨가물"
    ?
        <FoodType>
          <Image 
            resizeMode="contain"
            style={{
              width:constants.width/10,
              height:constants.height/20
            }}
            source={status===1?require('../assets/icon_chemical.png'):require('../assets/icon_chemical.png')}
          />
          <View style={{justifyContent:"flex-end",alignItems:"center"}}>
            <FoodTypeText>
              {type}
            </FoodTypeText>
          </View>
        </FoodType>
    :<></>
  )
}

export default Foodtype;



{/* <FoodTypes>
<FoodType>
  <Image
    resizeMode="contain"
    style={{
      width:constants.width/10,
      height:constants.height/20
    }}
    source={status===1?require('../assets/icon_vegetype_color_leaf.png'):require('../assets/icon_vegetype_grey_leaf.png')}
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
    source={status===1?require('../../assets/icon_vegetype_color_milk.png'):require('../../assets/icon_vegetype_grey_milk.png')}
  />
  <View style={{justifyContent:"flex-end",alignItems:"center"}}>
    <FoodTypeText>
      {type}
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
    source={status===1?require('../../assets/icon_vegetype_color_egg.png'):require('../../assets/icon_vegetype_grey_egg.png')}
  />
  <View style={{justifyContent:"flex-end",alignItems:"center"}}>
    <FoodTypeText>
      {type}
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
    source={status===1?require('../../assets/icon_vegetype_color_fish.png'):require('../../assets/icon_vegetype_grey_fish.png')}
  />
  <View style={{justifyContent:"flex-end",alignItems:"center"}}>
    <FoodTypeText>
      {type}
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
    source={status===1?require('../../assets/icon_vegetype_color_chicken.png'):require('../../assets/icon_vegetype_grey_chicken.png')}
  />
  <View style={{justifyContent:"flex-end",alignItems:"center"}}>
    <FoodTypeText>
      채식 
    </FoodTypeText>
  </View>
</FoodType>

</FoodTypes> */}