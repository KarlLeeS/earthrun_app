
import React, { useState } from "react";
import styled from "styled-components";
import constants from "../../constants";
import { ActivityIndicator, Image } from "react-native";
import {GET_MAIN_TOP_TAB} from "../../fragments";
import { useMainPosts, useMainPostsLoading, usesetMainposts, usesetMainPostsLoading, useUser } from "../../AuthContext";
import Post from "../../components/Post";
import {useQuery} from "@apollo/client";
import LeftFilter from "../../components/LeftFilter";
import { withNavigation } from "@react-navigation/compat";
import {useRoute} from '@react-navigation/native';
import styles from "../../styles";
import Loader from "../../components/Loader";

const Container = styled.View`
  background-color : #fff;
  position:relative;
  flex:1;
  min-height:${constants.height};
`;

const Posts = styled.View`
  flex-direction:row; 
  justify-content:flex-start;
  flex-wrap:wrap;
`;

const FilteringTools = styled.View`
  flex-direction:row;
  justify-content:space-between;
  margin: 20px 20px 20px 20px;

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

  const MainPosts =useMainPosts(childrenTab);
  const loading =useMainPostsLoading(childrenTab); 
  const setMainposts =usesetMainposts(); 
  const setLoading =usesetMainPostsLoading(); 

  const [LeftToggle,setLeftToggle] = useState(false); 
  const [certification,setCertification] = useState([]); 
  const [foodtypes,setFoodtypes] = useState(user?.foodtypes.map(e=>e.name)); 
  const [orderingoption,setOrderingoption] = useState("BYRATING");

  const [loaded,setloaded] = useState(false);

  const {data,loading:loadingQ,refetch}= useQuery(GET_MAIN_TOP_TAB,{ 
    fetchPolicy:"no-cache",
    // fetchPolicy:"network-only",
    variables:{
      certification,foodtypes,orderingoption,categories:childrenTab
    },
    onCompleted:()=>{
      // console.log(loading);
      console.log(`${childrenTab}의 api 호출이 완료되었습니다.`);

      if(
          orderingoption===OrderMapper.BYRATING||
          orderingoption===OrderMapper.BYCLICK||
          orderingoption===OrderMapper.BYREVIEWCOUNT
      ){
        
      }else{

      }
      if(data.length!==0){
        setMainposts(childrenTab,data.MainTopTab,false);
      }
      setloaded(true);
      // console.log(loading);

    }
  });

  const OnSubmitFiliter = async (foodtypeList=[],certificationList=[],order=undefined)=>{
      let foodtypeResult, certificationResult,orderResult ;
    if(foodtypeList===undefined || foodtypeList.length===0){
      foodtypeResult = foodtypes;
    }else{
      foodtypeResult=foodtypeList
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
    // console.log({foodtypeResult});
    // console.log({certificationResult});
    // console.log({orderResult});
    setloaded(false);
    console.log("해해해해햏");
    await refetch({
      certification:certificationResult,
      foodtypes:foodtypeResult,
      orderingoption:orderResult,
      categories:childrenTab
    });
    console.log("받아왔다.");
    setloaded(true);
  }

  return (
    <>
      <Container>
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
                        <LeftFilter OnSubmit={OnSubmitFiliter} setLeftToggle={setLeftToggle} orderingoption={orderingoption} setOrderingoption={setOrderingoption}  />
                      </LeftFilterWrapper>
                    )
                  :
                    (
                      <></>
                    )
              }
              {/* 네비게이션을 통해서 전달하는 값은 복사된 값만을 가진다. 그래서 따로 객체를 주는 방식으로 
              전달하면 안된다. */}
              <RightFilterIcon onPress={()=> navigation.navigate("DetailFilter",{
                OnSubmitFiliter,certification,foodtypes,setFoodtypes,setCertification
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
              {loaded
                ?
                  <>
                  {MainPosts&&MainPosts.posts?.map((e,i)=>(<Post key={e.id} childrenTab={childrenTab} Postindex={i} fromMainScreenNormalList={true} post={e} />))}
                  </>
                :
                  <Loader />
              }
            </Posts>
      </Container>
    </>
  )
}

export default (withNavigation(React.memo(MainScreen)));
