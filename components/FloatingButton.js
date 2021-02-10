import React from 'react';
import { Text, StyleSheet,View } from 'react-native';
import { withNavigation } from "@react-navigation/compat";
import styled from "styled-components";
import {  TouchableOpacity } from 'react-native-gesture-handler';

const StyleContainer = styled.View`
    width:100%;
    position:absolute;
    bottom:45;
    height:52;
    display:flex;
    align-items:center;
`;

const FloatingButton = ({
    label
    ,onClick,
    navigation
}) => (
    <StyleContainer>
        <TouchableOpacity style={style.content} onPress={()=>{navigation.navigate("TakePhoto")}}>
            <Text style={style.text}>{label}</Text>
        </TouchableOpacity>
    </StyleContainer>
    
);
const style = StyleSheet.create({
    text:{
        textAlign:'center',
        fontSize:18,
        color:'white',
    },
    content:{
        width:152,
        height:"100%",
        borderRadius:26,
        backgroundColor:"#00cd85",
        display:"flex",
        justifyContent:'center',
        alignItems:'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    }
})



export default withNavigation(FloatingButton);

