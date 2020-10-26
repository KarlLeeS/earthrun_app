import React, { useEffect } from "react";
import {TouchableOpacity} from "react-native";
import styled from "styled-components";
import Post from "../../components/Post";


const Container = styled.View`
    background-color:white;
    flex-direction:column; 
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

const RecommendBottom = ({navigation})=>{
    
    return (
        <Container>
            <Item>
                <ItemNumber>1</ItemNumber>
                <Post fromRecommend={true}/>
            </Item>
            
            <Item>
                <ItemNumber>2</ItemNumber>
                <Post fromRecommend={true}/>
            </Item>
            <Item>
                <ItemNumber>3</ItemNumber>
                <Post fromRecommend={true}/>
            </Item>
            <Item>
                <ItemNumber>4</ItemNumber>
                <Post fromRecommend={true}/>
            </Item>
        </Container>
    );
}

export default RecommendBottom;