
import React, { forwardRef, useEffect, useState } from "react";
import styled from "styled-components";
import NavIcon from "../../components/NavIcon";
import SearchBar from "../../components/SearchBar";
import useInput from "../../hooks/useInput"
import {gql} from "apollo-boost"; 
import { useQuery } from "@apollo/client";
import { POST_FRAGMENT } from "../../fragments";
import Loader from "../../components/Loader";
import { useUser } from "../../AuthContext";
// import MainScreen from "../home/MainScreen";
// import Post from "../../components/Post";
// import LeftFilter from "../../components/LeftFilter";
// import RightFilter from "../../components/RightFilter";
import { Alert, ScrollView } from "react-native";
import { useRef } from "react";
import SearchTabNavigation from "../../navigation/SearchTabNavigation";
import constants from "../../constants";

const Wrapper = styled.View`
    background-color : white;
    flex-direction:column;
    align-items:flex-start;
    width:${constants.width};
    /* height:${constants.height}; */
    justify-content:flex-start;
`; 

const Header = styled.View`
  position:relative;
  width:${constants.width};
  align-items:center;
  flex-direction:row;
  padding: 15px;
  justify-content:space-between;
`; 

const CancleText = styled.Text`
  padding:10px;
  font-weight:bold;
`; 

const Contents = styled.View`
  flex-direction:row; 
  justify-content:flex-start;
  flex-wrap:wrap;
  width:${constants.width};
  height:${constants.height};
`; 

const Container = styled.View`
  background-color : #fff;
  position:relative;
  min-height:${constants.height};
  width:${constants.width};
`;

const RightFilterWrapper = styled.View`
  position:absolute;
  top:0;
  left:0;
  z-index:10;
  bottom:0;
`;

const Posts = styled.View`
  flex-direction:row; 
  justify-content:flex-start;
  flex-wrap:wrap;
`;

const FilteringTools = styled.View`
  flex-direction:row;
  justify-content:space-between;
  margin: 0px 20px 10px 20px;
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


export const GET_SEARCH_KEYWORDS=gql`
  query MainSearchBar(
      $certification:[String]!
      $preferences:[String]!
      $orderingoption:String
      $keyword:String!
  ){
    MainSearchBar(
      certification:$certification
      preferences:$preferences
      orderingoption:$orderingoption
      keyword:$keyword
    ){
      ...PostParts
    }
  }
  ${POST_FRAGMENT}
`;

const OrderMapper= {
  "BYRATING":"별점 순",
  "BYCLICK":"조회 순",
  "BYREVIEWCOUNT":"리뷰 순",
  "BYLOWPRICE":"낮은 가격순",
  "BYHIGHPRICE":"높은 가격순",
  "BYLATEST":"최근출시 순",
}

const Search=({routes,navigation})=>{
  const searchInput = useInput("");
  const [LeftToggle,setLeftToggle] = useState(false); 
  const user = useUser();
  const [certification,setCertification] = useState([]); 
  const [preferences,setPreferences] = useState([`${user?.preference?.name}`]); 
  const [orderingoption,setOrderingoption] = useState("BYRATING");
  
  // const {loading,data,refetch}= useQuery(GET_SEARCH_KEYWORDS,{
  //   variables:{
  //     certification:[],
  //     preferences:[],
  //     orderingoption:"",
  //     keyword:"FQ"
  //   },
  //   fetchPolicy:"cache-and-network"
  // });
  

  const onSubmit = async(_,preferenceList=[],certificationList=[],order=undefined)=>{
    
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

    console.log(searchInput.value);
    console.log({preferenceResult});
    console.log({certificationResult});
    console.log({orderResult});
    if(searchInput.value===""){
      Alert.alert("검색어를 입력하세요");
      return;
    }
    await refetch({
      certification:certificationResult,
      preferences:user?.preference.name,
      orderingoption:orderResult,
      keyword:searchInput.value
    })
  }

  return (
      <Wrapper>
        <Header>
          <SearchBar onChange={searchInput.onChange} value={searchInput.value} setValue={searchInput.setValue} onSubmit={onSubmit}/>
          <CancleText onPress={()=>navigation.goBack()}>
            취소
          </CancleText>
        </Header>
        <Contents>
          <SearchTabNavigation />
        </Contents>
      </Wrapper>
    )
}
export default Search;



// {
//   loading
//   ?
//     (<Loader />)
//   :
//     (
//       data.MainSearchBar[0]
//       ?
//         (
//           <ScrollView>
            // <Container RightToggle={RightToggle}>
            //   <FilteringTools>
            //     <LeftFilterIcon onPress={()=>setLeftToggle(true)} >
            //       <NavIcon name={'md-color-filter'} color={"#000"} size={30}/>
            //       <LeftFilterText>{OrderMapper[orderingoption]}</LeftFilterText>
            //     </LeftFilterIcon>
            //     {
            //       LeftToggle?(
            //         <LeftFilterWrapper  >
            //           <LeftFilter OnSubmit={onSubmit} setLeftToggle={setLeftToggle} orderingoption={orderingoption} setOrderingoption={setOrderingoption}  />
            //         </LeftFilterWrapper>):(<></>)
            //     }
                
            //     <RightFilterIcon onPress={()=>setRightToggle(true)}>
            //       <NavIcon name={'md-color-filter'} color={"#000"} size={30}/>
            //     </RightFilterIcon>
            //   </FilteringTools>
            //   <Posts>
            //       {
            //         data.MainSearchBar.map((e,i)=>(
            //           <Post key={e.id} fromMainScreenNormalList={true} {...e} />
            //         ))
            //       }
            //   </Posts>
            // </Container>
            // {RightToggle
            //   ?
            //     (
            //     <RightFilterWrapper>
            //         <RightFilter
            //           onSubmit={onSubmit}
            //           certification={certification}
            //           preferences={preferences}
            //           setPreferences={setPreferences}
            //           setCertification={setCertification}
            //           setRightToggle={setRightToggle}
            //         />
            //     </RightFilterWrapper>
            //     )
            //   :
            //     (<></>)
            // } 
//           </ScrollView>       
//         )
//       :
//         (<Contents></Contents>)
//     )
// }
  
    