import React, { useState } from "react";
import styled from "styled-components"; 
import { useCurrentPost, useSetCurrentPost, usesetMainPostOne, useSetUser, useUser } from "../AuthContext";
import NavIcon from "../components/NavIcon";
import Star from "../components/Detail/BottomTab/Star";
import constants from "../constants";
import {gql} from "apollo-boost";
import { useMutation } from "@apollo/client";
import Loader from "../components/Loader";
import useInput from "../hooks/useInput";
import { REVIEW_FRAGMENT } from "../fragments";
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
        ){
            ...ReviewParts
        }
    }
    ${REVIEW_FRAGMENT}
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
        ){
            ...ReviewParts
        }
    }
    ${REVIEW_FRAGMENT}
`;

const UploadReview=({
        route:{
            params:{
                postId,
                rating,
                reviewCount,
                childrenTab,
                Postindex,
                reviewId,
                type,
                AvgRating,
                text,
        }},
        navigation,
    })=>{


    // const post = useCurrentPost(); 
    // const user = useUser();
    // console.log(user);
    const setUser = useSetUser();
    // const setPost = useSetCurrentPost();
    const setMainPostOne =usesetMainPostOne(); 

    const [rate,setRate] = useState(rating?rating:0); 
    const reviewInput = useInput(text?text:"");
    const [loading,setLoading] =useState(false);
    const [ADD_REVIEW_MUTATION] = useMutation(ADD_REVIEW,{
        variables:{
            post:postId,
            rating:rate,
            text:reviewInput.value, 
            prevAvgRating:rating, 
            reviewCount:reviewCount
        },

    });

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
        let result; 
        try{
            if(reviewId){
                const {data:{editReview:review}} =  await EDIT_REVIEW_MUTATION();
                result=review;
            }else{
                
                const {data:{addReview:review}} =  await ADD_REVIEW_MUTATION();
                result=review;
            }

            // let tempPost ;
            // setPost(e=>{
            //     tempPost = {
            //         ...e,
            //         reviewCount:result.post.reviewCount,
            //         reviews:[
            //             result,
            //             ...e.reviews
            //         ],
            //         rating:result.post.rating
            //     }
            //     return tempPost; 
            // })

            // setUser(e=>(
            //     {
            //         ...e,
            //         reviews:[
            //             result,
            //             ...e.reviews
            //         ]
            //     }
            // ))
            setMainPostOne(childrenTab,Postindex,result.id,true,result);

        }catch(e){
            console.log(e);
            throw Error(e);
        }
        setLoading(false);
        // navigation.goBack();
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