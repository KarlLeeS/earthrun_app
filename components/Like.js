import React, { useState } from "react";
import {TouchableOpacity} from "react-native";
import styled from "styled-components";
import NavIcon from "./NavIcon";
import {gql} from "apollo-boost"; 
import { useMutation } from "@apollo/client";
import { useSetUser } from "../AuthContext";
import { withNavigation } from "@react-navigation/compat";
const Touchable = styled.TouchableOpacity`

`;

export const TOGGLE_LIKE=gql`
    mutation toggleLike(
        $postId:String!
    ){
        toggleLike(
            postId:$postId
        )
    }
`; 

const Like =({
    id:postId,
    isLiked,
    navigation
})=>{
    const [islikeS,setIslikeS] = useState(isLiked);
    const [toggleMutation] = useMutation(TOGGLE_LIKE,{
        variables:{
            postId:postId
        }
    })

    const toggleLike =async()=>{

        if(islikeS){
            setIslikeS(false);

        }else{
            setIslikeS(true);
        }
        const result = await toggleMutation();
    }
    return(
        islikeS
        ?
            (
                <Touchable onPress={()=>toggleLike()} >
                    <NavIcon  name={"md-heart"} size={40} color={"#f00"} />
                </Touchable>
            )
        :
            (
                <Touchable onPress={()=>toggleLike()} >
                    <NavIcon name={"md-radio-button-off"} size={40} color={"#fff"} />
                </Touchable>
            )
    ); 
}

export default withNavigation(Like) ; 