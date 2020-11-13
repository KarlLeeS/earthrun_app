import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { Image,TouchableOpacity } from "react-native";
import styled from "styled-components"; 
import constants from "../../../constants";
import { ConvertToKorean } from "../../../utils";
import Star from "./Star";
import {gql} from "apollo-boost";
import { withNavigation } from "@react-navigation/compat";
import { useCurrentPost, useSetUser } from "../../../AuthContext";

    // /* padding:${props=>props.fromNormal?"":} */

const Container = styled.View`
    position:${props=>props.fastClose?"absolute":"relative"};
    top:${props=>props.fastClose?-9999:0};
    min-height:${constants.height/6};
    width:${props=>props.fromNormal?constants.width:"auto"};
    padding:${props=>props.fromNormal?"0px 15px":"0px"};
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
    /* flex-direction:row; */
    justify-content:flex-end;
    align-items:flex-end;
`;



const EditBox= styled.TouchableOpacity`
    margin-top:10px;
    width:${constants.width/10};
    height:${constants.height/20};
    justify-content:center;
    align-items:center;
    background-color:#00fc85;
    margin-bottom:10px;
    border-radius:10px;
    margin-left:10px;
`;
const EditText = styled.Text`
    color:#fff;
    font-weight:bold;
`;

const EditWrapper = styled.View`
    flex-direction:row;
`; 

// removeReview(id:String!):Boolean
export const DELETE_REVIEW = gql`
mutation removeReview($id: String!,$user: String!){
    removeReview(id: $id, user: $user)
}
`; 



const Review = ({
    id,
    user:{
        avatar,
        id:userId,
        username
    },
    post:{
        id:postId,
        reviewCount,
        rating:AvgRating
    },
    rating,
    text,
    updatedAt,
    fromNormal,
    editting,
    setList,
    navigation
    })=>{

    // console.log(id, rating,text, updatedAt,avatar,userId,username);
    const [fastClose,setfastClose] =useState(false);
    const setUser = useSetUser();
    const [deleteReviewMutation] = useMutation(DELETE_REVIEW,{
        variables:{
            id,
            user:userId
        }
    }); 

    const deleteReview = async ()=>{
        console.log(11);
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
                    reviews: (user?.reviews.filter(e=>e.id!==id)),
                    reviewCount: user?.reviewCount-1
                }
            ));
            const result = await deleteReviewMutation();
            console.log(result);
        }catch(e){
            console.log(e);
            throw Error();
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
                            source={{uri:avatar}}
                            />
                    </Touchable>
                    <NameStar>
                        <Name>{username}</Name>
                        <Star rating={rating} size={20}></Star>
                    </NameStar>
                </Profile>
                <RightWrapper>
                    {editting&&
                            <EditWrapper>
                            <EditBox 
                            onPress={()=>navigation.navigate("UploadReview",{
                                reviewId:id,
                                postId:postId,
                                type:"리뷰 수정",
                                AvgRating,
                                rating,
                                text,
                                reviewCount
                            })}
                            >
                                <EditText>수정</EditText>
                            </EditBox>
                            <EditBox 
                            onPress={()=>deleteReview()}
                            >
                                <EditText>삭제</EditText>
                            </EditBox>
                            </EditWrapper>
                    }
                    <Date>{ConvertToKorean(updatedAt)}</Date>
                </RightWrapper>
            </User>
            <Description numberOfLines={2} ellipsizeMode='tail'>{text}</Description>
        </Container>    
    )
}

export default withNavigation(Review); 



