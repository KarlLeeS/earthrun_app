import React from "react";
import {TouchableOpacity, Image} from "react-native";
import styled from "styled-components"; 
import constants from "../constants";
const Touchable = styled.TouchableOpacity`
    flex-direction:row;
    align-items:center; 
`;

const MetaInto = styled.View`
    padding-left: 10px;
    flex-direction:column;
`;

const TextBold = styled.Text`
    font-size :15px;
    color:#000000;
`;
const TextLight = styled.Text`
    font-size :12px;
    color:#717171;
`;

const UserProfile = ()=>{
    return (
        <Touchable>
            <Image 
                style={{width:constants.width/8, height:constants.height/16, borderRadius: 100 }}
                source={require('../assets/post.png')}
            />
            <MetaInto>
                <TextBold>이준송</TextBold>
                <TextLight>비건 27년 째</TextLight>
            </MetaInto>
        </Touchable>
    )
}

export default UserProfile; 