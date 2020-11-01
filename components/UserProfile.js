import {gql} from "apollo-boost"
import {  useQuery } from "@apollo/client";
import React, { useState } from "react";
import {TouchableOpacity, Image} from "react-native";
import styled from "styled-components"; 
import constants from "../constants";
import { USER_FRAGMENT } from "../fragments";
import Loader from "./Loader";
import { useSetUser, useUser } from "../AuthContext";
import { CalculateDays } from "../utils";
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
    const user =  useUser()
    return (
            <Touchable>
            <Image 
                resizeMode={"contain"}
                style={{width:constants.width/8, height:constants.height/16, borderRadius: 100 }}
                source={{uri:user?.avatar}}
            />
            <MetaInto>
                <TextBold>{user?.username}</TextBold>
                <TextLight>{user?.preference.name} {`${CalculateDays(user.typeStart)}`}일 째</TextLight>
            </MetaInto>
        </Touchable>
        )
        
}

export default UserProfile; 