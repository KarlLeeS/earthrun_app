import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components';

const style= StyleSheet.create({
    wrapper:{
        position:"absolute"
    },
    top:{
        position:"absolute",
        width:20,
        height:5,
        backgroundColor:"white"
    },
    bottom:{
        position:"absolute",
        width:5,
        height:20,
        backgroundColor:"white",
    }
})



const Camerafocus = () =>(
    <View style={styled.wrapper}>
        <View style={style.top}/>
        <View style={style.bottom}/>
    </View>
);
    
export default Camerafocus;