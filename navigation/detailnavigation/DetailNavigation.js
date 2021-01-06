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
        ){
            ...PostParts
        }
    }
    ${FULL_POST}
`;


const DetailNavigation =({navigation,route:{params:{
    childrenTab,Postindex
}}
})=>{
    console.log("DetailNavigation 다시하니?");

    const setpost= useSetCurrentPost();
    const setuser=  useSetUser();

    
    const MainPosts =useMainPosts(childrenTab)  ;
    // const {data,loading}=useQuery(GET_FULL_POST,
    //     {
    //     variables:{
    //         id
    //     },
    //     fetchPolicy:"cache-first"
    //     ,
    //     onCompleted:()=>{

    //         setpost(data.seeFullPost);
    //         setuser(e=>
    //         (
    //             {
    //                 ...e,
    //                 recentlyPost: [...(e.recentlyPost.filter(e=>(e.id!==data.seeFullPost.id))),data.seeFullPost]
    //             } 
    //         ))
    //     }
    // });
        
    return MainPosts&&MainPosts?.posts[Postindex]&&
    (
        <Container>
            <ScrollView>
                <HeaderWrapper>
                    <Header>
                        <Touchable onPress={()=>navigation.goBack()}>
                            <NavIcon name={"md-arrow-back"} size={24} color={"#000"}/>
                        </Touchable>
                        <Like id={MainPosts.posts[Postindex].id} isLiked={MainPosts.posts[Postindex].isLiked} />
                    </Header>
                </HeaderWrapper>

                <Sliders files={MainPosts.posts[Postindex].files} />
                <Metainfo 
                    brand={MainPosts.posts[Postindex].brand.name}
                    name={MainPosts.posts[Postindex].name}
                    weight={MainPosts.posts[Postindex].weight}
                    price={MainPosts.posts[Postindex].price}
                    preference={MainPosts.posts[Postindex].preference.name}
                    foodtypes={MainPosts.posts[Postindex].foodtypes}
                />
                {/* <DetailTabNavigation data={MainPosts.posts[Postindex]}/> */}
            </ScrollView>

        </Container>
    )
   
}

export default DetailNavigation;

// // &&



// Object {
//     "__typename": "Post",
//     "brand": Object {
//       "__typename": "Brand",
//       "name": "갓뚜기",
//     },
//     "categories": Array [
//       Object {
//         "__typename": "Categorie",
//         "id": "ckje4xcon06kn0705tzreih0l",
//         "name": "식품",
//       },
//       Object {
//         "__typename": "Categorie",
//         "id": "ckje4xcon06kr0705rbdx4aq5",
//         "name": "대체육",
//       },
//     ],
//     "certification": Array [
//       Object {
//         "__typename": "Certification",
//         "id": "ckje4xcol06k80705oi7z4nlo",
//         "name": "한국 비건인증원",
//       },
//       Object {
//         "__typename": "Certification",
//         "id": "ckje4xcom06k907057q3fl3lt",
//         "name": "영국 비건 협회",
//       },
//       Object {
//         "__typename": "Certification",
//         "id": "ckje4xcom06ka070566ymjqa9",
//         "name": "우수 재활용",
//       },
//       Object {
//         "__typename": "Certification",
//         "id": "ckje4xcom06kb0705741g6wft",
//         "name": "리핑 버니",
//       },
//     ],
//     "createdAt": "2021-01-01T10:41:48.279Z",
//     "description": "좋은 감자칩",
//     "files": Array [
//       Object {
//         "__typename": "File",
//         "url": "https://cdn.pixabay.com/photo/2020/04/07/13/18/mist-5013325_960_720.jpg",
//       },
//       Object {
//         "__typename": "File",
//         "url": "https://cdn.pixabay.com/photo/2020/10/02/21/06/dome-5622133_960_720.jpg",
//       },
//       Object {
//         "__typename": "File",
//         "url": "https://cdn.pixabay.com/photo/2020/04/15/14/45/music-5046876_960_720.jpg",
//       },
//       Object {
//         "__typename": "File",
//         "url": "https://cdn.pixabay.com/photo/2020/08/14/15/22/canal-5488271_960_720.jpg",
//       },
//     ],
//     "foodtypes": Array [
//       Object {
//         "__typename": "FoodType",
//         "name": "채식",
//       },
//       Object {
//         "__typename": "FoodType",
//         "name": "유제품",
//       },
//       Object {
//         "__typename": "FoodType",
//         "name": "달걀",
//       },
//     ],
//     "id": "ckje5dnuh08mc0705wcd215k6",
//     "isLiked": false,
//     "name": "준송오보칩",
//     "offline": Array [
//       "offline1",
//       "offline1",
//       "offline1",
//       "offline1",
//     ],
//     "online": Array [
//       "online",
//       "online",
//       "online",
//       "online",
//       "online",
//       "online",
//     ],
//     "preference": Object {
//       "__typename": "Preference",
//       "name": "비건",
//     },
//     "price": 2000,
//     "rating": 2.4,
//     "rawMaterialURL": "https://cdn.pixabay.com/photo/2020/08/14/15/22/canal-5488271_960_720.jpg",
//     "rawMaterials": Array [
//       Object {
//         "__typename": "RawMaterial",
//         "id": "ckje4x82l06e0070503ymijs5",
//         "name": "정제수",
//         "text": "정제수입니다.",
//       },
//       Object {
//         "__typename": "RawMaterial",
//         "id": "ckje4x8lf06e50705hcut860w",
//         "name": "양파",
//         "text": "양파입니다",
//       },
//       Object {
//         "__typename": "RawMaterial",
//         "id": "ckje4x93q06ea0705rtr97lnc",
//         "name": "카레",
//         "text": "카레입니다.",
//       },
//       Object {
//         "__typename": "RawMaterial",
//         "id": "ckje4x9m406ef0705sihsp0on",
//         "name": "마늘",
//         "text": "마늘입니다.",
//       },
//       Object {
//         "__typename": "RawMaterial",
//         "id": "ckje4xa5106ek0705qev9p653",
//         "name": "새싹",
//         "text": "새싹입니다.",
//       },
//     ],
//     "reviewCount": null,
//     "reviews": Array [],
//     "weeklyHits": null,
//     "weight": 320,
//   },
