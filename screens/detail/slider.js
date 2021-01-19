
import React from "react";
import styled from "styled-components";
import {View,Text, Image} from "react-native";
import Swiper from "react-native-swiper";
import constants from "../../constants";


// variants : maintab => 메인 탭 내부의 광고안의 슬라이더
// variants : detailpage => 제품 상세페이지 내부의 이미지 슬라이더

export default ({
  files,
  height=2.5,
  variants="maintab" 

}) => {
  // console.log({files});
  
  return (
    <Swiper
        showsPagination={true}
        autoplay={variants==="detail"?true:false}
        autoplayTimeout={6}
        style={{ height: constants.height / height  }}
        index={0}
      >
        {
          files.map((file,i)=>(
            <Image 
            resizeMethod={"resize"}
            key={file.id+`${i}`} 
            style={{  
              width: constants.width, 
              height:(variants==="maintab")?(constants.height/5):(constants.height/2.5)
            }}
            source={{ uri: file.url}}
            />
          ))
        }
      </Swiper>
  )
}