import {gql} from "apollo-boost"
import {  useQuery } from "@apollo/client";
import React, { useState } from "react";
import {TouchableOpacity, Image} from "react-native";
import styled from "styled-components"; 
import constants from "../constants";
import { USER_FRAGMENT } from "../fragments";
import Loader from "./Loader";
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

export const ME = gql`
    {
        me{
            ...UserParts
        }
    }
    ${USER_FRAGMENT}
`


const UserProfile = ()=>{
    const {data,loading}= useQuery(ME); 
    console.log(data.me); 

    return (
        loading?(
            <Loader />
        ):(
            <Touchable>
            <Image 
                style={{width:constants.width/8, height:constants.height/16, borderRadius: 100 }}
                source={require('../assets/post.png')}
            />
            <MetaInto>
                <TextBold>{data?.me.username}</TextBold>
                <TextLight>{data?.me.preference.name} 27년 째</TextLight>
            </MetaInto>
        </Touchable>
        )
        )
        
}

export default UserProfile; 