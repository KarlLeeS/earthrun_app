
import React from "react";
import styled from "styled-components";
import {View,Text, Image} from "react-native";
import Swiper from "react-native-swiper";
import constants from "../../constants";

export default () => {
  return (
      <Swiper
        showsPagination={true}
        style={{ height: constants.height / 2.5 }}
        index={0}
      >
      <Image style={{
                  width: constants.width,
                  // height: constants.height/4.6,
              }}
              source={require('../../assets/post.png')}
          />
          
        <Image style={{
                    width: constants.width,
                    // height: constants.height/4.6,
                }}
                source={require('../../assets/post.png')}
            />
            
        <Image style={{
                    width: constants.width,
                    // height: constants.height/4.6,
                }}
                source={require('../../assets/post.png')}
            />
            
      </Swiper>
  )
}