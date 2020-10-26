import React, { useState } from "react"; 
import {TouchableOpacity} from "react-native";
import styled from "styled-components";
import constants from "../constants";

const Container = styled.View`
    width:${constants.width/4.5};
    /* border:1px solid red; */
` ;
const Touchable = styled.TouchableOpacity`
    width:${constants.width/4.5};
background-color:${props=>props.on?"#00cf85":"#fff"};
`; 
const Item = styled.Text`
    color:${props=>props.on ?"#fff":"#000"} ;
    font-size:14px;
    text-align:center;
`;
    /* background-color:${props.clicked?"#00cf85":"#fff"}; */
// 




const LeftFilter = ()=>{
    const [byRating,setByRating] =useState(true);
    const [byHits,setByHits] =useState(false);
    const [byReivew,setByReivew] =useState(false);
    const [byLowPrice,setByLowPrice] =useState(false);
    const [byHighPrice,setByHighPrice] =useState(false);

    return(
        <Container>
            <Touchable on={byRating} onPress={(e)=>{
                setByRating(true);
                setByHits(false);
                setByReivew(false);
                setByLowPrice(false);
                setByHighPrice(false);
            }}>
                <Item on={byRating}>별점 순</Item>
            </Touchable>
            
            <Touchable on={byHits}  onPress={(e)=>{
                setByRating(false);
                setByHits(true);
                setByReivew(false);
                setByLowPrice(false);
                setByHighPrice(false);
            }}>
                <Item on={byHits} >조회 순</Item>
            </Touchable>
            
            <Touchable on={byReivew} onPress={(e)=>{
                setByRating(false);
                setByHits(false);
                setByReivew(true);
                setByLowPrice(false);
                setByHighPrice(false);
            }}>
                <Item  on={byReivew}>댓글 순</Item>
            </Touchable>
            
            <Touchable on={byLowPrice}  onPress={(e)=>{
                setByRating(false);
                setByHits(false);
                setByReivew(false);
                setByLowPrice(true);
                setByHighPrice(false);
            }}>
                <Item on={byLowPrice}>낮은 가격 순</Item>
            </Touchable>
            <Touchable on={byHighPrice} onPress={(e)=>{
                setByRating(false);
                setByHits(false);
                setByReivew(false);
                setByLowPrice(false);
                setByHighPrice(true);
            }}>
                <Item on={byHighPrice} >높은 가격 순</Item>
            </Touchable>
        </Container>
    )
}

export default LeftFilter; 