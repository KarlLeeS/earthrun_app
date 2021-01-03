
import React, { useState } from "react";
import styled from "styled-components";
import constants from "../../constants";
import { ActivityIndicator } from "react-native";
import {GET_MAIN_TOP_TAB} from "../../fragments";
import { useUser } from "../../AuthContext";
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
  // const [height,setHeight] = useState();
  const user = useUser();
  const {name:childrenTab} = useRoute();
  const parentTab = getParentTab(childrenTab);

  console.log(childrenTab, parentTab);

  // const screen = Dimensions.get("screen");
  // const window = Dimensions.get("window");

  // const [posts,setPosts]= useState();
  const [loaded,setLoaded] = useState(true);

  const [LeftToggle,setLeftToggle] = useState(false); 
  const [RightToggle,setRightToggle] = useState(false); 
  const [certification,setCertification] = useState([]); 
  const [preferences,setPreferences] = useState([`${user?.preference?.name}`]); 
  const [orderingoption,setOrderingoption] = useState("BYRATING");

  const {loading,data,refetch,updateQuery}= useQuery(GET_MAIN_TOP_TAB,{ 
    fetchPolicy:"no-cache",
    variables:{
      certification,preferences,orderingoption,
      categories:childrenTab
    },
    onCompleted:()=>{
      console.log(data.MainTopTab)
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
                  <RightFilterIcon onPress={()=> navigation.navigate("DetailFilter",{
                    OnSubmit,certification,preferences,setPreferences,setCertification,setRightToggle
                    })}>
                    <NavIcon name={'md-color-filter'} color={"#000"} size={30}/>
                  </RightFilterIcon>
                </FilteringTools>
              
                {/* <Posts>
                    {posts&&posts?.map(e=>(<Post key={e.id} fromMainScreenNormalList={true} {...e} />))}
                </Posts> */}
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

export default withNavigation(MainScreen);
