import React, { useState } from "react";
import styled from "styled-components"; 
import { useCurrentPost, useSetCurrentPost, useSetUser, useUser } from "../AuthContext";
import {TouchableOpacity} from "react-native";
import NavIcon from "../components/NavIcon";
import Star from "../components/Detail/BottomTab/Star";
import constants from "../constants";
import useInput from "../components/useInput";
import {gql} from "apollo-boost";
import { useMutation } from "@apollo/client";
import Loader from "../components/Loader";
const Container = styled.View``; 
const Header = styled.View``; 
const Title = styled.Text``; 
const Form = styled.View``; 
const Touchable = styled.TouchableOpacity``;
const RatingWrapper = styled.View`
    justify-content:center;
    align-items:center;
`;
const Rating = styled.View`
    width:${constants.width/1.3};
    /* border:1px solid red; */
    justify-content:center;
    align-items:center;
`;
const CommentWrapper = styled.View``;
const Comment = styled.TextInput``;
const DetectEvent = styled.View`
    position:absolute;
    top:0;
    left:0;
    width:${constants.width/1.3};
    height:${(constants.width/1.3)/4};
    flex-direction:row;
    justify-content:center;

`; 
const EventSection= styled.TouchableOpacity`
    width:${constants.width/1.3/5/2};
`; 

export const ADD_REVIEW= gql`
    mutation addReview(
        $post:String!,
        $rating:Float,
        $text:String!,
        $prevAvgRating:Float,
        $reviewCount:Float
    ){
        addReview(
            post:$post
            rating:$rating
            text:$text
            prevAvgRating:$prevAvgRating
            reviewCount:$reviewCount
        )
    }

`;



export const EDIT_REVIEW= gql`
    mutation editReview(
        $id:String!,
        $postId:String!,
        $rating:Float,
        $text:String!,
        $prevAvgRating:Float,
        $prevRating:Float,
        $reviewCount:Int,
    ){
        editReview(
            id:$id,
            postId:$postId,
            rating:$rating,
            text:$text,
            prevAvgRating:$prevAvgRating,
            prevRating:$prevRating,
            reviewCount:$reviewCount,
        )
    }

`;

const UploadReview=({
        route:{
            params:{

                reviewId,
                postId,
                type,
                AvgRating,
                rating,
                text,
                reviewCount
        }},
        navigation
    })=>{


    const post = useCurrentPost(); 
    const user = useUser();

    const [rate,setRate] = useState(rating?rating:0); 
    const reviewInput = useInput(text?text:"");
    const [loading,setLoading] =useState(false);
    const [ADD_REVIEW_MUTATION] = useMutation(ADD_REVIEW,{
        variables:{
            post:post.id,
            rating:rate,
            text:reviewInput.value, 
            prevAvgRating:post.rating, 
            reviewCount:post.reviewCount
        }
    })

    const [EDIT_REVIEW_MUTATION] = useMutation(EDIT_REVIEW,{
        variables:{
            id:reviewId,
            postId:postId,
            rating:rate,
            text:reviewInput.value,
            prevAvgRating:AvgRating,
            prevRating:rating,
            reviewCount:reviewCount,
        }
    })

    const onSubmit= async()=>{
        setLoading(true);
        try{
            if(reviewId){
                console.log("여기다");
                await EDIT_REVIEW_MUTATION();
            }else{
                await ADD_REVIEW_MUTATION(); 
            }
        }catch(e){
            throw Error();
        }
        setLoading(false);

        navigation.navigate("HomeNavigation");
    }
    
    return(
        loading
        ?
            <Loader />
        :
        <Container>
            <Header>
                <Title>{type}</Title>
                <Touchable onPress={()=>navigation.goBack()}>
                        <NavIcon name={"md-arrow-back"} size={24} color={"#000"}/>
                </Touchable>
            </Header>
            <Form>
                <RatingWrapper>
                    <Rating>
                        <Star rating={rate} size={((constants.width/1.3)/4)} />
                        <DetectEvent>
                            <EventSection onPress={()=>{setRate(0.5)}} />
                            <EventSection onPress={()=>{setRate(1)}} />
                            <EventSection onPress={()=>{setRate(1.5)}} />
                            <EventSection onPress={()=>{setRate(2.0)}} />
                            <EventSection onPress={()=>{setRate(2.5)}} />
                            <EventSection onPress={()=>{setRate(3.0)}} />
                            <EventSection onPress={()=>{setRate(3.5)}} />
                            <EventSection onPress={()=>{setRate(4.0)}} />
                            <EventSection onPress={()=>{setRate(4.5)}} />
                            <EventSection onPress={()=>{setRate(5.0)}} />
                        </DetectEvent>
                    </Rating>
                </RatingWrapper>
                <CommentWrapper>
                    <Comment
                        value={reviewInput.value}
                        onChangeText={reviewInput.onChange}
                        returnKeyType={"send"}
                        placeholder={"리뷰를 입력해주세요"}
                        onSubmitEditing={onSubmit}
                        autoCorrect={false}
                    />
                </CommentWrapper>
            </Form>
        </Container>
    )
}

export default UploadReview;