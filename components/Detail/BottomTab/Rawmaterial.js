import React from "react";
import styled from "styled-components"; 
import {TouchableOpacity} from "react-native"; 


const NormalButton = styled.View`
    margin-right:8;
    margin-bottom:10px;
`;

const NormalButtonText=  styled.Text`
    color:#717171;
    background-color:#ececec;
    padding:5px 8px; 
    border-radius:10px;
`;
const SpecialButton = styled.TouchableOpacity`
    background-color:#0069ca;
    justify-content:center;
    margin-bottom:10px;
    margin-right:8;
    border-radius:10px;
`;

const SpecialButtonText=  styled.Text`
    padding:5px 8px; 
    color:#fff;
`;


const Rawmaterial =(props)=>{
    return(
        props && props.special ? (
            <SpecialButton>
                <SpecialButtonText>{props.label}</SpecialButtonText>
            </SpecialButton>
         ):(
            <NormalButton>
            <NormalButtonText>{props.label}</NormalButtonText>
            </NormalButton>
         )
    )
}

export default Rawmaterial;