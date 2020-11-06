import React, { useState } from "react";
import {TouchableOpacity} from "react-native";
import styled from "styled-components";
import NavIcon from "./NavIcon";
import {gql} from "apollo-boost"; 
import { useMutation } from "@apollo/client";
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
    isLiked
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
        console.log(result); 

    }
    return(
        islikeS
        ?
            (
                <Touchable onPress={()=>toggleLike()} >
                    <NavIcon  name={"md-heart"} size={24} color={"#f00"} />
                </Touchable>
            )
        :
            (
                <Touchable onPress={()=>toggleLike()} >
                    <NavIcon name={"md-heart-outline"} size={24} color={"#000"} />
                </Touchable>
            )
    ); 
}

export default Like; 