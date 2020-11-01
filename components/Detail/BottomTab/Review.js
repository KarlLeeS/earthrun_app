import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { Image,TouchableOpacity } from "react-native";
import styled from "styled-components"; 
import constants from "../../../constants";
import { ConvertToKorean } from "../../../utils";
import Star from "./Star";
import {gql} from "apollo-boost";

    // /* padding:${props=>props.fromNormal?"":} */

const Container = styled.View`
    position:${props=>props.fastClose?"absolute":"relative"};
    top:${props=>props.fastClose?-9999:0};
    height:${constants.height/5.5};
    width:${props=>props.fromNormal?constants.width:""};
    padding: 0px 15px;
    margin-top:20px;
    justify-content:flex-start;
    border-bottom-color:#ececec;
    border-bottom-width:1;
`; 

const User = styled.View`
    flex-direction:row;
    justify-content: space-between;
    align-items:flex-end;
`; 

const Profile = styled.View`
    flex-direction:row;
    align-items:center;

`; 

const Touchable = styled.TouchableOpacity``; 

const NameStar = styled.View`
    margin-left:5px;
`; 

const Name = styled.Text`
`; 


const Date = styled.Text`
    letter-spacing:-1px;
`; 

const Description = styled.Text`
    margin-top:20px;
    overflow:hidden;
`;




const RightWrapper= styled.View`
    justify-content:center;
    align-items:flex-end;
`;

const DeleteBox= styled.TouchableOpacity`
    margin-top:10px;
    width:${constants.width/10};
    height:${constants.height/20};
    justify-content:center;
    align-items:center;
    background-color:#00fc85;
    margin-bottom:10px;
    border-radius:10px;
`;
const DeleteText = styled.Text`
    color:#fff;
    font-weight:bold;
`;

// removeReview(id:String!):Boolean
export const DELETE_REVIEW = gql`
mutation removeReview($id: String!,$user: String!){
    removeReview(id: $id, user: $user)
}
`; 



const Review = ({
    id, 
    rating,
    text, 
    updatedAt,
    user:{avatar,id:userId, username},
    fromNormal,
    editting,
    setList
    })=>{
    console.log(id, rating,text, updatedAt,avatar,userId,username);
    const [fastClose,setfastClose] =useState(false);


    const [deleteReviewMutation] = useMutation(DELETE_REVIEW,{
        variables:{
            id,
            user:userId
        }
    }); 

    const deleteReview = async ()=>{
        try{

            setList(e=>(
                {
                    ...e,
                    seeReviews :  e.seeReviews.filter(i=>i.id!==id)
                }
            )) ;
            setUser(user=>(
                {
                    ...user,
                    reviews: (user.reviews.filter(e=>e.id!==id)),
                    reviewCount: user.reviewCount-1
                }
            ));
            await deleteReviewMutation();
        }catch(e){
            // todo re trial or something?? 
        }

    }


    return(
        <Container fastClose={fastClose} fromNormal={fromNormal}>
        <User>
            <Profile>
                <Touchable>
                    <Image
                        style={{
                            width:constants.width/7,
                            height:constants.height/14,
                            borderRadius:100 
                        }}
                        source={require('./../../../assets/post.png')}
                        />
                </Touchable>
                <NameStar>
                    <Name>{username}</Name>
                    <Star rating={rating} size={20}></Star>
                </NameStar>
            </Profile>
            <RightWrapper>
                {editting&&
                    <DeleteBox 
                    onPress={()=>deleteReview()}
                    >
                        <DeleteText>삭제</DeleteText>
                    </DeleteBox>
                }
                <Date>{ConvertToKorean(updatedAt)}</Date>
            </RightWrapper>
        </User>
        <Description numberOfLines={2} ellipsizeMode='tail'>{text}</Description>
    </Container>    
    )
}

export default Review; 



