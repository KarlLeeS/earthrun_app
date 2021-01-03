
import React from "react";
import styled from "styled-components";
import {View,Text, Image} from "react-native";
import Swiper from "react-native-swiper";
import constants from "../../constants";

export default ({files,height=2.5}) => {
  console.log({files});
  
  return (
    <Swiper
        showsPagination={true}
        style={{ height: constants.height / height }}
        index={0}
      >
        {
          files.map((file,i)=>(
            <Image 
            key={file.id+`${i}`} 
            style={{  
              width: constants.width, height: constants.height / 2.5 
            }}
            source={{ uri: file.url }}
            />
          ))
        }
      </Swiper>
  )
}