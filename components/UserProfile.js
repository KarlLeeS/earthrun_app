import React from "react";
import { Image} from "react-native";
import styled from "styled-components"; 
import constants from "../constants";
import {  useUser } from "../AuthContext";
import { CalculateDays } from "../utils";
import { withNavigation } from "@react-navigation/compat";

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

const UserProfile = ({navigation})=>{
    console.log("Rendering HomeNavigation/UserProfile");
    const user = useUser()
    return user&&(
            <Touchable onPress={()=>{navigation.navigate("ProfileNavigation",{})}}>
            <Image 
                resizeMode={"cover"}
                style={{width:constants.width/8, height:constants.height/16, borderRadius: 100 }}
                source={{uri:user?.avatar}}
            />
            <MetaInto>
                <TextBold>{user?.username}</TextBold>
                <TextLight>{user?.preference.name} {CalculateDays(user?.typeStart)}일 째</TextLight>
            </MetaInto>
        </Touchable>
        )
}

export default withNavigation(UserProfile); 
