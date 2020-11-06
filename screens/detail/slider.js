
import React from "react";
import styled from "styled-components";
import {View,Text, Image} from "react-native";
import Swiper from "react-native-swiper";
import constants from "../../constants";

export default ({files}) => {
  // console.log({files});
  
  
  const timeElapsed = Date.now();
  const today = new Date(timeElapsed);

  const a=today.toISOString(); // "2020-06-13T18:30:00.000Z"
  console.log(a)

  return (
    <Swiper
        showsPagination={true}
        style={{ height: constants.height / 2.5 }}
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