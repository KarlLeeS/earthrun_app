import React from "react";
import styled from "styled-components";
import {Image, View} from "react-native";
import constants from "../constants";
import NavIcon from "./NavIcon";
import {gql} from "apollo-boost";
import { useMutation } from "@apollo/client";
import { useSetUser, useUser } from "../AuthContext";
import { withNavigation } from "@react-navigation/compat";
import postStyle from "../postStyle";
import Star, { Onestart } from "./Detail/BottomTab/Star";
const isEven =(number)=>{
    return ((number%2)===0);
}


const Touchable = styled.TouchableOpacity`
    /* height:${props=>props.data.height}; */
    margin-left:${props=>props.data.marginLeft};
    margin-right:${props=>props.data.marginRight};
    margin-bottom:${props=>props.data.marginBottom};
    margin-top:${props=>props.data.marginTop?props.data.marginTop:"0px"};
    flex-direction:${props=>props.data.flexDirection};
    padding:${props=>props.data.padding};
    border-bottom-color: ${props=>props.data.borderBottomColor?props.data.borderBottomColor:"#000"};
    border-bottom-width:${props=>props.data.borderBottomWidth?props.data.borderBottomWidth:"0px"};
`;

const MetaInfo = styled.View`
    margin-left:${props=>props.data.marginLeft};
    position:${props=>props.data.position};
    height:${props=>props.data.height};
    flex-direction:${props=>props.data.flexDirection};
    justify-content:${props=>props.data.justifyContent};
`;


const TextBrand = styled.Text`

    font-size:${props=>props.data.fontSize};
    color:${props=>props.data.color};
    letter-spacing:${props=>props.data.letterSpacing};
    padding-top:${props=>props.data.paddingTop};
    font-weight:${props=>props.data.fontWeight};
`;

const TextProductName = styled.Text`

    color:${props=>props.data.color};
    font-size:${props=>props.data.fontSize};
    letter-spacing:${props=>props.data.letterSpacing};
    padding-top:${props=>props.data.paddingTop};
    font-weight:${props=>props.data.fontWeight};
`;


const TextWieghtPrice = styled.Text`

    font-size:${props=>props.data.fontSize};
    padding-top:${props=>props.data.paddingTop};
    color:${props=>props.data.color};
    font-weight:${props=>props.data.fontWeight};
`;

const Scores = styled.View`

    position:${props=>props.data.position};
    bottom:${props=>props.data.bottom};
    left:${props=>props.data.left};
    flex-direction:${props=>props.data.flexDirection};
    justify-content:${props=>props.data.justifyContent};
    align-items:${props=>props.data.alignItems};
    padding-top:${props=>props.data.paddingTop};
`;

const TextRating = styled.Text`
    color: #0069ca;
    padding-left:3px;
`;

const TextReviewCount = styled.Text`
    color: #717171;
    padding-left:3px;
    letter-spacing:-1px;
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



export const DELETE_RECENTLY_VIEWED_POST=gql`
    mutation removeRecentlyViewedPost($id:String!, $user:String!){
        removeRecentlyViewedPost(id:$id,user:$user)
    }
`;

export const DELETE_LIKED_POST=  gql`
    mutation toggleLike($postId:String!){
        toggleLike(postId:$postId)
    }
`;

export const DELTE_UPLOAED_POST= gql`
    mutation removeUploadedPost($postId:String!,$user:String!){
        removeUploadedPost(postId:$postId,user:$user)
    }
`;
let styles; 

const Post = ({
    id,brand,files,weight,
    reviewCount,rating,price,name,isLiked,
    index,editting=false,
    fromRecommendBottom,
    fromRecommendMyprofile,
    fromMainScreenNormalList,
    fromLike,
    fromRecentlyViewed,
    fromMyUploaded,
    fromSearchScreen,
    setList,
    navigation,
    childrenTab,
    Postindex
})=>{
    const setUser = useSetUser();
    const user= useUser();

    let styles=undefined; 
    
    if(fromRecommendBottom){
        styles = postStyle.fromRecommendBottom;
    }

    if(fromRecommendMyprofile){
        styles = postStyle.fromRecommendMyProfileRecently;
    }

    if(fromMainScreenNormalList){
        if(isEven(index+1)){
            styles = postStyle.fromMainScreenNormalListEven;
        }else{
            styles = postStyle.fromMainScreenNormalListAdd;
        }
    }

    if(fromSearchScreen){
        styles=postStyle.fromSearchScreen;
    }
    const [deleteRecentlyViewedPost] = useMutation(DELETE_RECENTLY_VIEWED_POST,{
        variables:{
            id,
            user:user?.id
        }
    }); 
    
    const [deleteLikedPost] = useMutation(DELETE_LIKED_POST,{
        variables:{
            postId:id
        }
    })
    
    const [deleteUploadedPost] = useMutation(DELTE_UPLOAED_POST,{
        variables:{
            postId:id,
            user:user?.id
        }
    })

    const deletePost= async()=>{
        console.log(fromLike);
        if(fromRecentlyViewed){
            // 최근 목록 삭제 
            console.log("최근 목록 삭제 ");
            setList(e=>(
                {
                    ...e,
                    RecentlyViewedPost :  e.RecentlyViewedPost.filter(i=>i.id!==id)
                }
            )) ;
            setUser(user=>(
                {
                    ...user,
                    recentlyPost: (user?.recentlyPost.filter(e=>e.id!==id))
                }
            ));
            await deleteRecentlyViewedPost();
        }
        if(fromLike){
            // 찜목록 삭제
            console.log("찜목록 삭제");
            setList(e=>(
                {
                    ...e,
                    getLikes :  e.getLikes.filter(i=>i.post.id!==id)
                }
            )) ;
            await deleteLikedPost();
        }
        if(fromMyUploaded){
            // 업로드 게시글 삭제
            console.log("업로드 게시글 삭제 ");
            setList(e=>(
                {
                    ...e,
                    MyUploadedPosts :  e.MyUploadedPosts.filter(i=>i.id!==id)
                }
            )) ;
            setUser(user=>(
                {
                    ...user,
                    uploadedPost: (user?.uploadedPost.filter(e=>e.id!==id))
                }
            ));
            await deleteUploadedPost();
        }

    }


    return (styles&&user&&(
        <Touchable onPress={()=>{navigation.navigate("DetailNavigation",{childrenTab,
            Postindex})}}
        data={styles.Touchable}
         >
            <Image
                style={{
                    width:styles.image.width,
                    height:styles.image.height,
                    borderRadius:styles.image.borderRadius
                }}
                source={ files.length!==0? {uri:files[0].url} : require('./../assets/post.png')}
                // source={require('./../assets/post3.jpg')}
            />
            <BottomWrapper>
                <MetaInfo data={styles.MetaInfo} 
                 >
                    <TextBrand data={styles.TextBrand}>{brand.name}</TextBrand>
                    <TextProductName data={styles.TextProductName}>{name}</TextProductName>
                    <TextWieghtPrice data={styles.TextWieghtPrice}>
                        {
                            weight&&price&&
                            `${weight}g / ${price}원`
                        }
                    </TextWieghtPrice>
                    <Scores data={styles.Scores}>
                        <Onestart rating={rating?rating:0} size={20} />
                        <TextRating>{rating?rating:0}</TextRating>
                        <TextReviewCount>{reviewCount?`( ${reviewCount} )`:`( 0 )`}</TextReviewCount>
                    </Scores>
                </MetaInfo>
                {editting&&
                    <DeleteBox 
                    onPress={()=>deletePost()}
                    >
                        <DeleteText>삭제</DeleteText>
                    </DeleteBox>
                }
            </BottomWrapper>
        </Touchable>
    ))
}

export default  withNavigation(Post);
