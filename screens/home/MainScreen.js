
import React, { useState } from "react";
import styled from "styled-components";
import constants from "../../constants";
import { ActivityIndicator, Image } from "react-native";
import {GET_MAIN_TOP_TAB} from "../../fragments";
import { useMainPosts, useMainPostsLoading, usesetMainposts, usesetMainPostsLoading, useUser } from "../../AuthContext";
import Post from "../../components/Post";
import NavIcon from "../../components/NavIcon";
import {useQuery} from "@apollo/client";
import LeftFilter from "../../components/LeftFilter";
import RightFilter from "../../components/RightFilter";
import { withNavigation } from "@react-navigation/compat";
import {useRoute} from '@react-navigation/native';
import {Dimensions} from "react-native";
import styles from "../../styles";
import { getParentTab } from "../../utils";
import produce from "immer"
import { useEffect } from "react/cjs/react.development";


const Container = styled.View`
  background-color : #fff;
  position:relative;
  flex:1;
`;

const RightFilterWrapper = styled.View`
  position:absolute;
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

const MainScreen = ({navigation})=>{
  const user = useUser();
  const {name:childrenTab} = useRoute();
  console.log(`Rendering HomeNavigation/TabNavigation/${childrenTab}`);

  const MainPosts =useMainPosts(childrenTab)  ;
  const loading =useMainPostsLoading(childrenTab); 
  const setMainposts =usesetMainposts(); 
  const setLoading =usesetMainPostsLoading(); 


  const [LeftToggle,setLeftToggle] = useState(false); 
  const [certification,setCertification] = useState([]); 
  const [foodtypes,setFoodtypes] = useState(user?.foodtypes.map(e=>e.name)); 
  const [orderingoption,setOrderingoption] = useState("BYRATING");

  const {data,loading:loadingQ}= useQuery(GET_MAIN_TOP_TAB,{ 
    // fetchPolicy:"no-cache",
    fetchPolicy:"network-only",
    variables:{
      certification,foodtypes,orderingoption,categories:childrenTab
    },
    onCompleted:()=>{
      console.log(`${childrenTab}의 api 호출이 완료되었습니다.`);
      if(data.length!==0){
        setMainposts(childrenTab,data.MainTopTab,false);
      }else{
        // setMainposts(childrenTab,[],true);
      }
      setLoading(childrenTab);

      
      // let index ; 
      // let realElement ; 
      // switch(orderingoption){
      //   case "BYRATING":
      //     index= data.MainTopTab.findIndex(e=>e.rating>0);
      //     realElement = data.MainTopTab.splice(index); 
      //     setPosts([...realElement,...data.MainTopTab])
      //     break;
      //   case "BYCLICK":
      //     index= data.MainTopTab.findIndex(e=>e.totalHits>0);
      //     realElement = data.MainTopTab.splice(index); 
      //     setPosts([...realElement,...data.MainTopTab])

      //     break;  
      //   case "BYREVIEWCOUNT":
      //     index= data.MainTopTab.findIndex(e=>e.reviewCount>0);
      //     realElement = data.MainTopTab.splice(index); 
      //     setPosts([...realElement,...data.MainTopTab])
      //     break;  
      //   case "BYLOWPRICE":
      //   case "BYHIGHPRICE":
      //   case "BYLATEST":
      //     setPosts([...data.MainTopTab]);
      //     break;  
      // }
      
    }
  });
  console.log(MainPosts);

  const OnSubmit = async (preferenceList=[],certificationList=[],order=undefined)=>{
    // let preferenceResult, certificationResult,orderResult ;
    // if(preferenceList===undefined || preferenceList.length===0){
    //   preferenceResult = user.preference.name;
    // }else{
    //   preferenceResult=preferenceList
    // }
    // // TODO 이 컴포넌트도 조금 의심스럽네. 굳이 필요한가? 그냥 userContext로 다 받아서 해결해도 되는 부분아닌가?
    // if(certificationList===undefined || certificationList.length===0){
    //   certificationResult = certification;
    // }else{
    //   certificationResult = certificationList;
    // }
    
    // if(order===undefined){
    //   orderResult = orderingoption;
    // }else{
    //   orderResult = order;
    // }
    
    // console.log({preferenceResult});
    // console.log({certificationResult});
    // console.log({orderResult});
    // setLoaded(false);
    // await refetch({
    //   certification:certificationResult,
    //   foodtypes:preferenceResult,
    //   orderingoption:orderResult,
    //   categories:category
    // });
    // setLoaded(true);

  }

  // console.log(MainPosts["식품"]["간식"]===undefined);

  return (
    <>
      <Container>
        { 
          loading?
          (
            <Loading>
              <ActivityIndicator color={styles.blackColor}/>
            </Loading>
          ):
          (
            <>
              <FilteringTools>
                  <LeftFilterIcon onPress={()=>setLeftToggle(prev=>!prev)} >
                    <Image 
                      resizeMode="contain"
                      style={{  
                        width: constants.width/20, 
                        height: constants.height /40 
                      }}
                      source={ require("../../assets/sort.png") }
                    />
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
                  <RightFilterIcon onPress={()=> navigation.navigate("DetailFilter",{
                    OnSubmit,certification,foodtypes,setFoodtypes,setCertification,setRightToggle
                    })}>
                    <Image 
                      resizeMode="contain"
                      style={{  
                        width: constants.width/20, 
                        height: constants.height /40 
                      }}
                      source={ require("../../assets/filter.png") }
                    />
                  </RightFilterIcon>
                </FilteringTools>
              
                <Posts>
                    {MainPosts&&
                    MainPosts.posts?.map((e,i)=>(<Post key={e.id} childrenTab={childrenTab} Postindex={i} fromMainScreenNormalList={true} {...e} />))}
                </Posts>
                
            </> 
          )
        }
        
      </Container>
    </>
  )
}

export default (withNavigation(React.memo(MainScreen)));
