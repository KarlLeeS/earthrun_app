
import React, { useLayoutEffect, useState } from "react";
import { Text, View,ScrollView } from "react-native";
import styled from "styled-components";
import NavIcon from "../components/NavIcon";
import Post from "../components/Post"; 
import constants from "../constants";

import { useQuery } from "@apollo/react-hooks";
import {gql} from "apollo-boost";
import { POST_FRAGMENT, REVIEW_FRAGMENT } from "../fragments";
import Loader from "../components/Loader";
import Review from "../components/Detail/BottomTab/Review";

const Container = styled.View`
    background-color : white;
    flex-direction:column;
    align-items:flex-start;
    width:${constants.width};
    justify-content:center;
    flex:1;
`; 

const Header = styled.View`
  position:relative;
  width:${constants.width};
  align-items:center;
  flex-direction:row;
  padding: 15px;
  justify-content:space-between;
`; 

const Touchable= styled.TouchableOpacity`
`

const Wrapper =styled.View`
  height:30px;
  width:30px;
  border:1px solid red;
  flex-direction:row;
  justify-content:center;
  align-self:center;
`;

const RightText = styled.Text`
  font-size:14px;
  color:#0069ca;
  font-weight:bold;
`; 
const Title = styled.Text`
  position:absolute;
  width:${constants.width};
  text-align:center;
  font-size:18px;
`; 

const Filter= styled.View`
  padding: 15px;
`; 

const FilterWrapper = styled.TouchableOpacity`
  flex-direction:row;
  align-items:center; 
`; 

const FilterText = styled.Text`
  margin-left:5px;
`; 



const Grid =styled.View`
  flex-direction : row; 
  flex-wrap:wrap;
  justify-content:flex-start;
`;

export const GET_LIKES=gql`
  {
    getLikes{
      id
      post{
        ...PostParts
      }
    }
  }
  ${POST_FRAGMENT}
`;

export const GET_RECENTLY_VIEW=gql`
 {
    RecentlyViewedPost{
      ...PostParts
    }
  }
  ${POST_FRAGMENT}
`; 

export const GET_UPLOAD_POSTS=gql`
  {
    MyUploadedPosts{
      ...PostParts
    }
  }
  ${POST_FRAGMENT}
`;

export const GET_REVIEWS =gql`
  {
    seeReviews{
      ...ReviewParts
    }
  }
  ${REVIEW_FRAGMENT}
`;


const makeGQL =(type)=>{
  switch(type){
    case "찜목록":
    // 찜목록
      return GET_LIKES;
    case "최근 본 상품":
    // 최근 본 상품
      return GET_RECENTLY_VIEW;
    case "등록한 상품":
    // 등록한 상품
      return GET_UPLOAD_POSTS;
    case "등록한 리뷰":
    // 등록한 리뷰
      return GET_REVIEWS;
  }
}



export default ({navigation,route}) =>{
  const [list,setList] = useState([]);
  
  const [editting,SetEditting] = useState(false);
  // const setUser = useSetUser();
  // const user = useUser()
  const {data,loading} = useQuery(makeGQL(route.params.type),{
    fetchPolicy:"network-only",
    onCompleted:()=>{
      setList(data);
    }}); 

  useLayoutEffect(()=>{
    navigation.setOptions({
      title: route.params.type,
      gestureEnabled: true,
      headerTitleAlign: "center",
      headerBackTitleVisible: true
    })
  },[]);


  
  return loading?(
    <Loader />
  ):(
    <Container>
      <ScrollView>
        <Header>
          <Title>{`${route.params.type}`}</Title>
          <Touchable onPress={()=>navigation.goBack()}>
                <NavIcon name={"md-arrow-back"} size={24} color={"#000"}/>
          </Touchable>
          <Touchable onPress={()=>SetEditting(i=>!i)}>
              <RightText>
                편집
              </RightText>
          </Touchable>
        </Header>
        <Filter>
          <FilterWrapper>
                <NavIcon name={"md-color-filter"} size={24} color={"#000"}/>
                <FilterText>최신순</FilterText>
          </FilterWrapper>
        </Filter>

          <Grid>
            {list&&list.getLikes&&list.getLikes.map((e,i)=>(
              <Post fromMainScreenNormalList={true}  setList={setList} editting={editting} {...e.post} index={i} fromLike={true} key={e.id} />
            ))}
            {list&&list.RecentlyViewedPost&&list.RecentlyViewedPost.map((e,i)=>(
              <Post fromMainScreenNormalList={true} fromRecentlyViewed={true} setList={setList} editting={editting}  {...e} index={i} fromRecentlyViewed={true} key={e.id} />
            ))}

            {list&&list.MyUploadedPosts&&list.MyUploadedPosts.map((e,i)=>(
                <Post fromMainScreenNormalList={true} fromMyUploaded={true} setList={setList} editting={editting} {...e} index={i} fromMyUploaded={true} key={e.id} />
            ))}
            {list&&list.seeReviews&&list.seeReviews.map((e,i)=>(
              <Review setList={setList} editting={editting}  {...e} index={i} key={e.id} fromNormal={true} />
            ))}
          </Grid>
      </ScrollView>
    </Container>
  )
}

