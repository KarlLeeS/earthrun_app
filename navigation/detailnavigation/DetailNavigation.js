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
import { useCurrentPost, useMainPosts, useSetCurrentPost, useSetUser } from "../../AuthContext";
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
        )
    }
`;


const DetailNavigation =({navigation,route:{params:{
    post,
    childrenTab,
Postindex
}}
})=>{
    console.log("rendering/DetailPage");
    const setPost = useSetCurrentPost();
    setPost(post);``
    // console.log({post});
    // console.log("post 세팅완료")
    useQuery(GET_FULL_POST,{variables:{id:post.id}});
    // 
    // const MainPosts =useMainPosts(childrenTab);
        
    // return MainPosts&&MainPosts?.posts[Postindex]&&
    return (post&&
        <Container>
            <ScrollView>
                <HeaderWrapper>
                    <Header>
                        <Touchable onPress={()=>navigation.goBack()}>
                            <NavIcon name={"md-arrow-back"} size={24} color={"#000"}/>
                        </Touchable>
                        <Like id={post.id} isLiked={post.isLiked} />
                    </Header>
                </HeaderWrapper>

                <Sliders files={post.files} variants={"detail"}/>
                <Metainfo 
                    brand={post.brand.name}
                    name={post.name}
                    weight={post.weight}
                    price={post.price}
                    preference={post.preference.name}
                    foodtypes={post.foodtypes}
                />
                <DetailTabNavigation data={post} 
                
                childrenTab={childrenTab}
                Postindex={Postindex}

                />
            </ScrollView>
        </Container>
    )
   
}

export default DetailNavigation;

