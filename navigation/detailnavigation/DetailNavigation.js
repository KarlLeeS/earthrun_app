import React from "react";

import Slider from "../../screens/detail/slider";
import Metainfo from "../../screens/detail/metainfo";
import DetailTabNavigation from "./DetailTabNavigation";

import styled from "styled-components";
import { StatusBar, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import constants from "../../constants";
import { useQuery } from "@apollo/client";
import {gql} from "apollo-boost";
import { FULL_POST, POST_FRAGMENT } from "../../fragments";
import Loader from "../../components/Loader";
import { useCurrentPost, useSetCurrentPost } from "../../AuthContext";
import NavIcon from "../../components/NavIcon";
import Like from "../../components/Like";

const Container = styled.View`
  background-color:white;
  /* height:${constants.height}; */
`; 

const Sliders   = styled(Slider)`
    width:${constants.width}; 
    height:${constants.height/3}; 
`;
const HeaderWrapper =styled.View`
    position:absolute;
    top:0;
    left:1;
    opacity:0.9;
    z-index:10;
`;

const Header = styled.View`
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    width:${constants.width}; 
    padding: 15px 15px 0px 15px;
`;

const HeaderTitle = styled.Text`
  font-size:16px;
  left:5px;
`;

const Touchable= styled.TouchableOpacity`

`

export const GET_FULL_POST=gql`
    query seeFullPost(
        $id:String!
    ){
        seeFullPost(
            id:$id
        ){
            ...PostParts
        }
    }
    ${FULL_POST}
`;


const DetailNavigation =({navigation,route:{params:{id}}
})=>{
    const setpost= useSetCurrentPost();

    const {data,loading}=useQuery(GET_FULL_POST,
        {
        variables:{
            id
        },
        fetchPolicy:"cache-first"
        ,
        onCompleted:()=>{
            setpost(data.seeFullPost);
            console.log(data.seeFullPost);
            // console.log({post});
            // console.log({data});
        }
    });
    return (
        loading
        ?
            <Loader />
        :
            data&&data.seeFullPost&&
            (
                <Container>
                    <ScrollView>
                        <HeaderWrapper>
                            <Header>
                                <Touchable onPress={()=>navigation.goBack()}>
                                    <NavIcon name={"md-arrow-back"} size={24} color={"#000"}/>
                                </Touchable>
                                <Like id={data.seeFullPost.id} isLiked={data.seeFullPost.isLiked} />
                            </Header>
                        </HeaderWrapper>

                        <Sliders files={data.seeFullPost.files} />
                        <Metainfo 
                            brand={data.seeFullPost.brand}
                            name={data.seeFullPost.name}
                            weight={data.seeFullPost.weight}
                            price={data.seeFullPost.price}
                            preferences={data.seeFullPost.preferences}
                        />
                        <DetailTabNavigation data={data.seeFullPost}/>
                    </ScrollView>
                </Container>
            )
    )
}

export default DetailNavigation;

// // &&