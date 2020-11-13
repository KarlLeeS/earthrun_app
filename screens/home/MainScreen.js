
import React, { useState } from "react";
import styled from "styled-components";
import constants from "../../constants";
import { ActivityIndicator, ScrollView } from "react-native";
import {gql} from "apollo-boost";
import {POST_FRAGMENT} from "../../fragments";
import { useUser } from "../../AuthContext";
import Loader from "../../components/Loader";
import Post from "../../components/Post";
import NavIcon from "../../components/NavIcon";
import {  useQuery } from "@apollo/client";
import LeftFilter from "../../components/LeftFilter";
import RightFilter from "../../components/RightFilter";
import {useRoute} from '@react-navigation/native';

import {Dimensions} from "react-native";
import { setStatusBarStyle } from "expo-status-bar";
import styles from "../../styles";

const Container = styled.View`
  background-color : #fff;
  position:relative;
  flex:1;
  /* height:${props=>props.height}; */
`;

const RightFilterWrapper = styled.View`
  position:absolute;
  /* top:0; */
  left:0;
  z-index:10;
  top:0;
`;

const Posts = styled.View`
  flex-direction:row; 
  justify-content:flex-start;
  flex-wrap:wrap;
`;

const FilteringTools = styled.View`
  flex-direction:row;
  justify-content:space-between;
  margin: 15px 20px 10px 20px;
`;

const LeftFilterIcon = styled.TouchableOpacity`
  flex-direction:row; 
  align-items:center;
  position:relative;
`;

const LeftFilterWrapper =styled.View`
  position:absolute;
  top:5;
  left:25;
  z-index:10;
`;

const RightFilterIcon = styled.TouchableOpacity`
`;

const LeftFilterText = styled.Text`
  margin-left:10px;
  font-size:14px;
`;

const Loading =styled.View`
  justify-content:center;
  align-items:center;
  width:${constants.width};
  height:200px;
`; 

const OrderMapper= {
  "BYRATING":"별점 순",
  "BYCLICK":"조회 순",
  "BYREVIEWCOUNT":"리뷰 순",
  "BYLOWPRICE":"낮은 가격순",
  "BYHIGHPRICE":"높은 가격순",
  "BYLATEST":"최근출시 순",
}

export const GET_MAIN_TOP_TAB= gql`
  query MainTopTab(
      $certification:[String]
      $preferences:[String]
      $orderingoption:String
      $categories:String!
  ){
    MainTopTab(
      certification:$certification
      preferences:$preferences
      orderingoption:$orderingoption
      categories:$categories
    ){
      ...PostParts
    }
  }
  ${POST_FRAGMENT}
`;

const MainScreen = ({searchKeyword,searchRefetch, navigation})=>{
  const [height,setHeight] = useState();
  const user = useUser();
  const {name:category} = useRoute();
  console.log("여기는" ,category);
  console.log("높이:" ,height);

  // console.log(navigation);
  const screen = Dimensions.get("screen");
  const window = Dimensions.get("window");

  // console.log("여기는 " +category);
  // console.log({screen});
  // console.log({window});
  const [posts,setPosts]= useState();

  const [LeftToggle,setLeftToggle] = useState(false); 
  const [RightToggle,setRightToggle] = useState(false); 
  const [certification,setCertification] = useState([]); 
  const [preferences,setPreferences] = useState([`${user?.preference?.name}`]); 
  const [orderingoption,setOrderingoption] = useState("BYRATING");
  const [loaded,setLoaded] = useState(false);

  const {loading,data,refetch,updateQuery}= useQuery(GET_MAIN_TOP_TAB,{ 
    variables:{
      certification:certification,
      preferences:preferences,
      orderingoption:"BYRATING",
      categories:category
    },
    fetchPolicy:"cache-first",
    onCompleted:()=>{
      console.log("뭐여@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
      let index ; 
      let realElement ; 
      switch(orderingoption){
        case "BYRATING":
          index= data.MainTopTab.findIndex(e=>e.rating>0);
          realElement = data.MainTopTab.splice(index); 
          setPosts([...realElement,...data.MainTopTab])
          break;
        case "BYCLICK":
          index= data.MainTopTab.findIndex(e=>e.totalHits>0);
          realElement = data.MainTopTab.splice(index); 
          setPosts([...realElement,...data.MainTopTab])

          break;  
        case "BYREVIEWCOUNT":
          index= data.MainTopTab.findIndex(e=>e.reviewCount>0);
          realElement = data.MainTopTab.splice(index); 
          setPosts([...realElement,...data.MainTopTab])
          break;  
        case "BYLOWPRICE":
        case "BYHIGHPRICE":
        case "BYLATEST":
          setPosts([...data.MainTopTab]);
          break;  
      }
      setLoaded(true);
      
    }
  });

  const OnSubmit = async (preferenceList=[],certificationList=[],order=undefined)=>{
    let preferenceResult, certificationResult,orderResult ;
    if(preferenceList===undefined || preferenceList.length===0){
      preferenceResult = user.preference.name;
    }else{
      preferenceResult=preferenceList
    }
    // TODO 이 컴포넌트도 조금 의심스럽네. 굳이 필요한가? 그냥 userContext로 다 받아서 해결해도 되는 부분아닌가?
    if(certificationList===undefined || certificationList.length===0){
      certificationResult = certification;
    }else{
      certificationResult = certificationList;
    }
    
    if(order===undefined){
      orderResult = orderingoption;
    }else{
      orderResult = order;
    }
    
    console.log({preferenceResult});
    console.log({certificationResult});
    console.log({orderResult});
    setLoaded(false);
    await refetch({
      certification:certificationResult,
      preferences:preferenceResult,
      orderingoption:orderResult,
      categories:category
    });
    setLoaded(true);

    console.log("##################################################",data.MainTopTab.length);

  }

  return (
    <>
      <Container 
      height={height?height:0}
      RightToggle={RightToggle}>
        {
          !loaded?
          (
            <Loading>
              <ActivityIndicator color={styles.blackColor}/>
            </Loading>
          ):
          (
            <>
              <FilteringTools>
                  <LeftFilterIcon onPress={()=>setLeftToggle(true)} >
                    <NavIcon name={'md-color-filter'} color={"#000"} size={30}/>
                    <LeftFilterText>{OrderMapper[orderingoption]}</LeftFilterText>
                  </LeftFilterIcon>
                  {
                    LeftToggle
                      ?
                        (
                          <LeftFilterWrapper  >
                            <LeftFilter OnSubmit={OnSubmit} setLeftToggle={setLeftToggle} orderingoption={orderingoption} setOrderingoption={setOrderingoption}  />
                          </LeftFilterWrapper>
                        )
                      :
                        (
                          <></>
                        )
                  }
                  <RightFilterIcon onPress={()=>setRightToggle(true)}>
                    <NavIcon name={'md-color-filter'} color={"#000"} size={30}/>
                  </RightFilterIcon>
                </FilteringTools>
              
                <Posts>
                    {posts&&posts?.map(e=>(<Post key={e.id} fromMainScreenNormalList={true} {...e} />))}
                </Posts>
                {RightToggle?(
                  <RightFilterWrapper>
                      <RightFilter
                        onSubmit={OnSubmit}
                        certification={certification}
                        preferences={preferences}
                        setPreferences={setPreferences}
                        setCertification={setCertification}
                        setRightToggle={setRightToggle}
                      />
                  </RightFilterWrapper>
                  ):(<></>)
                }
            </> 
          )
        }
        
      </Container>
    </>
  )
}

export default MainScreen;
