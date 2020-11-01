import React from "react";
import styled from "styled-components";
import {Image, View} from "react-native";
import constants from "../constants";
import NavIcon from "./NavIcon";
import {gql} from "apollo-boost";
import { useMutation } from "@apollo/client";
import { useSetUser, useUser } from "../AuthContext";

const isEven =(number)=>{
    return ((number%2)===0);
}

const Touchable = styled.TouchableOpacity`
    /* margin-top:10px; */
    /* padding-right:10px; */
    /* background-color:white; */
    
    margin-left:${props=> 
        props.index? 
            isEven(props.index)? 
                `${(constants.width*0.2)*(1/3)*(1/2)}`
                :`${(constants.width*0.2)*(1/3)}`  
        :'0'};
    /* margin-right:7px; */
    margin-right:${props=> isEven(props.index) ?`${(constants.width*0.2)*(1/3)}`:`${(constants.width*0.2)*(1/3)*(1/2)}` };
    /* padding-right: 10px; */
    /* padding-right: ${props=>props.marginRight?props.marginRight:0}; */
    flex-direction: ${props=>props.fromRecommend?"row":"column"};
`;

const MetaInfo = styled.View`
    margin-left:${props=>props.fromRecommend?20:0};
`;

const TextBrand = styled.Text`
    font-size :10px;
    /* font-size :12px; */
    padding-top: 5px;
    /* padding-top: ${props=>props.fromRecommend?"5px":"10px"}; */
    font-weight:bold;
    color: #BDBDBD;
`;

const TextProductName = styled.Text`
    color: #333333;
    font-size: 14px;
    /* font-size: 16px; */
    padding-top : 1px;
    /* padding-top : 5px; */
    font-weight:bold;
`;

const TextWieghtPrice = styled.Text`
    font-size: 10px;
    /* font-size: 12px; */
    padding-top : 2px;
    /* padding-top : 5px; */
    color: #a0a0a0;
`;

const Scores = styled.View`
    padding-top:2px;
    /* padding-top:8px; */
    flex-direction:row;
    justify-content:flex-start;
    align-items:center;
`;

const TextRating = styled.Text`
    color: #0069ca;
`;

const TextReviewCount = styled.Text`
    color: #717171;
    padding-left:5px;
`;

const BottomWrapper =styled.View`
    flex-direction:row;
    justify-content:space-between;
    align-items:flex-start;
`;

const DeleteBox= styled.TouchableOpacity`
    margin-top:10px;
    width:${constants.width/10};
    height:${constants.height/20};
    justify-content:center;
    align-items:center;
    background-color:#00fc85;
    border-radius:10px;
`;
const DeleteText = styled.Text`
    color:#fff;
    font-weight:bold;
`;


export const TOGGLE_LIKE = gql`
  mutation toggleLike($postId:String!){
    toggleLike(postId:$postId)
  }
`;

export const DELETE_RECENTLY_VIEWED_POST=gql`
    mutation removeRecentlyViewedPost($id:String!, $user:String!){
        removeRecentlyViewedPost(id:$id,user:$user)
    }
`;


const Post = ({
    id,brand,files,preferences,weight,reviewCount,rating,price,name,
    index,marginRight,fromRecommend,fromNormal,editting
})=>{
    const setUser = useSetUser();

    // const [deleteReviewMutation] = useMutation(DELETE_REVIEW,{
    //     variables:{
    //         id
    //     }
    // }); 

    const deleteReview = async ()=>{
        try{
            // // await deleteReviewMutation(); 
            // setUser(user=>(
            //     {
            //         ...user,
            //         reviews: (user.reviews.filter(e=>e.id!==id))
            //     }
            // ));
        }catch(e){
            // todo re trial or something?? 
        }

    }

    return (
        <Touchable index={index+1} marginRight={marginRight} fromNormal={fromNormal} fromRecommend={fromRecommend} onPress={()=>{console.log("Post를 클릭했다.", id)}}>
            <Image
                style={{
                    width:constants.width/2.5,
                    height:constants.height/5,
                    borderRadius: 0
                    // width:fromRecommend?constants.width/4:constants.width/2.3,
                    // height:fromRecommend?constants.height/8:constants.height/4.6,
                    // borderRadius: fromRecommend?20:0
                }}
                source={ files? {uri:files[0].url} : require('./../assets/post.png')}
                // source={require('./../assets/post3.jpg')}
            />
            <BottomWrapper>
                <MetaInfo fromNormal={fromNormal} fromRecommend={fromRecommend}>
                    <TextBrand fromNormal={fromNormal} fromRecommend={fromRecommend}>{brand}</TextBrand>
                    <TextProductName>{name}</TextProductName>
                    <TextWieghtPrice>
                        {
                            weight&&price&&
                            `${weight}g / ${price}원`
                        }
                    </TextWieghtPrice>
                    <Scores>
                        {rating&&<NavIcon name={'md-star'} color={"#0069ca"} size={20} />}
                        <TextRating>{rating===null ?`` :`${rating}`}</TextRating>
                        <TextReviewCount>{reviewCount===null?``:`${reviewCount}`}</TextReviewCount>
                    </Scores>
                </MetaInfo>
                {editting&&
                    <DeleteBox 
                    onPress={()=>deleteReview()}
                    >
                        <DeleteText>삭제</DeleteText>
                    </DeleteBox>
                }
            </BottomWrapper>
        </Touchable>
    )
}

export default Post;