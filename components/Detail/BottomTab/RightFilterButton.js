import { symbol } from "prop-types";
import React, { useState } from "react";
import {Button, TouchableOpacity} from "react-native";
import styled from "styled-components"; 
import constants from "../../../constants";

const Wrapper=  styled.View`
    max-width:${constants.width/2}; 
    background-color:${props=>
        props.backgroundColor
        ?
            props.value?props.backgroundColor:"#ececec"
        :
            props.value?"#000":"#fff"};
    padding:7px 15px;
    border-radius:${props=>props.borderRadius?props.borderRadius:"20px"};
    margin-right:5px;
    margin-top:7px;
    border:${props=>props.backgroundColor?"none":"1px solid #000"};
`;


const Text = styled.Text`
    color:${props=>props.state?"#fff":props.textColor?props.textColor:"#000"};
    text-align:center;
    font-size:16px;
`; 

const RightFilterButton=({
    text,
    value,
    setValue,
    index,
    type,
    backgroundColor, 
    textColor, 
    borderRadius
})=>{
    console.log({index});
    return (
        <Wrapper 
            value={value}
            backgroundColor={backgroundColor}
            borderRadius={borderRadius}
        >
            <TouchableOpacity onPress={ ()=>{
                if(index||index===0){
                    if(type==="multi"){
                        if(value===true){
                            setValue( e=>{
                                let result = [...e]; 
                                result[index]=false; 
                                return result
                            })
                        }else{
                            setValue( e=>{
                                let result = [...e]; 
                                result[index]=true; 
                                return result
                            })
                        }
                    }else if(type==="radio"){
                        setValue( e=>{
                            let result = new Array(e.length).fill(false); 
                            result[index]=true; 
                            return result
                        })
                    }
                }else{
                    if(value===true){
                        setValue(false);
                    }
                    else{
                        setValue(true);
                    }
                }
            }}>
                    <Text 
                        textColor={textColor}
                        state={value}
                    >{text}</Text>
            </TouchableOpacity>
        </Wrapper>
    );
}

export default RightFilterButton;