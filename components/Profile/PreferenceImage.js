import React from "react";
import { Image } from "react-native";
import styled from "styled-components";
import constants from "../../constants";
 

const Wrapper = styled.View`
  justify-content:center;
  align-items:center;
  margin-right:15px;
`;


const SmallText = styled.Text`
  font-size:12px;
  letter-spacing:-1px;
  color:${props=>props.empty===true?"transparent":"#000"}
`;

const PreferenceImage =({name,url,empty})=>{
    
    return(
        <Wrapper>
            <Image
                style={{
                    width:constants.width/10,
                    height:constants.height/20,
                    borderRadius: 0,
                    marginBottom:5
                }}
                source={empty? require('./../../assets/empty.png')  : require('./../../assets/post.png')}
            />
            <SmallText empty={empty}>{name}</SmallText>
        </Wrapper>
    )
}

export default PreferenceImage; 