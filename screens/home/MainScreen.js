
import React, { useState } from "react";
import styled from "styled-components";
import constants from "../../constants";
import { ScrollView } from "react-native";
import {gql} from "apollo-boost";
import {POST_FRAGMENT} from "../../fragments";
import { useUser } from "../../AuthContext";
import Loader from "../../components/Loader";
import Post from "../../components/Post";
import NavIcon from "../../components/NavIcon";
import {  useQuery } from "@apollo/client";
import LeftFilter from "../../components/LeftFilter";
import RightFilter from "../../components/RightFilter";


const View = styled.View`
  margin : 20px;
  text-align:center;
`;

const Container = styled.View`
  background-color : #fff;
  position:relative;
  min-height:${constants.height};
`;

const RightFilterWrapper = styled.View`
  position:absolute;
  top:0;
  left:0;
  z-index:10;
  bottom:0;
`;

const Text = styled.Text`
  font-weight:900;
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

// BYLOWPRICE
// BYHIGHPRICE
// BYRATING
// BYCLICK
// BYREVIEWCOUNT
// BYLATEST

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

const MainScreen = ({category,searchKeyword,searchRefetch})=>{
  const [LeftToggle,setLeftToggle] = useState(false); 
  const [RightToggle,setRightToggle] = useState(false); 
  const user = useUser();
  const [certification,setCertification] = useState([]); 
  const [preferences,setPreferences] = useState([`${user?.preference?.name}`]); 
  const [orderingoption,setOrderingoption] = useState("BYRATING");

  const {loading,data,refetch,updateQuery}= useQuery(GET_MAIN_TOP_TAB,{ 
    variables:{
      certification:certification,
      preferences:preferences,
      orderingoption:"BYRATING",
      categories:category
    },
    fetchPolicy:"network-only"
  });

  const OnSubmit = async (preferenceList=[],certificationList=[],order=undefined)=>{
    let preferenceResult, certificationResult,orderResult ;
    if(preferenceList===undefined || preferenceList.length===0){
      preferenceResult = preferences;
    }else{
      preferenceResult=preferenceList
    }

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

    await refetch({
      certification:certificationResult,
      preferences:preferenceResult,
      orderingoption:orderResult,
      categories:category
    });
    // console.log({preferenceResult});
    // console.log({certificationResult});
    // console.log({orderResult});

  }

  return (
    <ScrollView>
      <Container RightToggle={RightToggle}>
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
          {loading?(
             <Loader />
          ):
          (
            data&&data?.MainTopTab&&data?.MainTopTab.map((e,i)=>(
              <Post key={e.id} fromMainScreenNormalList={true} {...e} />
              ))
          )
            }
        </Posts>
      </Container>
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
    </ScrollView>
  )
}

export default MainScreen;
