import { symbol } from "prop-types";
import React, { useState } from "react";
import {Button, TouchableOpacity} from "react-native";
import styled from "styled-components"; 
import constants from "../../../constants";

const Wrapper=  styled.View`
    max-width:${constants.width/2}; 
    background-color:${props=>props.state?"#000":"#fff"};
    padding:7px 20px;
    border-radius:20px;
    margin-right:5px;
    margin-top:7px;
    border:1px solid #000;
`;


const Text = styled.Text`
    color:${props=>props.state?"#fff":"#000"};
    text-align:center;
    font-size:16px;
    /* font-weight:bold; */
`; 


const RightFilterButton=(props)=>{
    const [state,setState] = useState(false);
    return (
        <Wrapper state={state}>
        <TouchableOpacity onPress={()=>{
            if(state===true){setState(false)}
            else{setState(true)}
        }}>
                <Text state={state}>{props.text}</Text>
        </TouchableOpacity>
            </Wrapper>
    );
}

export default RightFilterButton;