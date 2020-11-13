import { useQuery } from "@apollo/client";
import React, { useEffect } from "react";
import {TouchableOpacity} from "react-native";
import styled from "styled-components";
import Post from "../../components/Post";
import constants from "../../constants";
import {gql} from "apollo-boost"; 
import { POST_FRAGMENT } from "../../fragments";
import { useUser } from "../../AuthContext";
import Loader from "../../components/Loader";

const Container = styled.View`
    background-color:white;
    flex-direction:column; 
    /* height:${constants.height}; */
`;

const Item = styled.TouchableOpacity`
    flex-direction:row;
    justify-content:flex-start;
    align-items:center;
    padding: 10px 0px;
    border-bottom-color:#dbdbdb;
    border-bottom-width:1px;
`;

const ItemNumber = styled.Text`
    font-size:20px;
    padding: 0 15px;

`;

export const GET_BOTTOM_POSTS=gql`
    query RecommendBottomTabBar(
        $userPrefer:String!,
        $category:String!
    ){
        RecommendBottomTabBar(
            userPrefer:$userPrefer
            category:$category
        ){
            ...PostParts
        }
    }
    ${POST_FRAGMENT}
`;

const RecommendBottom = ({navigation,type})=>{
  console.log("RecommendBottom 다시하니?");

    //     식품
    // 건강미용
    // 생활용품
    // 패션/잡화
    const user = useUser();
    const {loading, data} = useQuery(GET_BOTTOM_POSTS,{
        variables:{
            userPrefer:user?.preference.name,
            category:type
        }
    });

    return (
        <Container>
            {loading
            ?
                <Loader />
            :
                data&&data.RecommendBottomTabBar&&data.RecommendBottomTabBar.map((e,i)=>(
                    <Item key={e.id}>
                        <ItemNumber>{i+1}</ItemNumber>
                        <Post fromRecommendBottom={true} {...e}/>
                    </Item>
                ))
                }
        </Container>
    );
}

export default RecommendBottom;