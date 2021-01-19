import React,{useState} from 'react';
import { ScrollView ,Image} from 'react-native';
import styled from "styled-components"; 
import constants from '../../constants';
import Post from "../../components/Post"
import { useSearchBarSubmit, usesearchInput, useSearchPost, useUser } from '../../AuthContext';
import LeftFilter from '../../components/LeftFilter';
import { withNavigation } from "@react-navigation/compat";
import { GET_MAIN_SEARCH_BAR } from '../../fragments';

const Container = styled.View`
    width:${constants.width};
    min-height:${constants.height};
    background-color:white;
    /* margin-top:10px; */
`;

const Section = styled.View`
    /* padding:15px 0; */
    border-bottom-color:#ececec;
    border-bottom-width:1px;
    border-top-color:#f8f8f8; 
    border-top-width:5px;
    padding:20px;
`;

const SectionFirst = styled(Section)`
    width:100%;
    border-top-color:#f8f8f8; 
    border-top-width:0px;
`;

const SectionLast = styled(Section)`
    width:100%;
    border-bottom-width:0px;
`;

const Title = styled.Text`
    font-size:16px;
    font-weight:bold;
    margin: 14px 0px;
`;
const List = styled.View`
    display:flex;
    flex-wrap:wrap;
    flex-direction:row;
    justify-content:flex-start;
`;
const Item = styled.TouchableOpacity`
    padding: 5px 15px;
    border-radius:25;
    margin-right:10px;
    margin-bottom:10px;
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:${props=>props.backgroundColor};

`;
const ItemText =styled.Text`
    color:${props=>props.color};
`;

const Brand = styled.View`
    display:flex;
    width:100%;
    flex-direction:row; 
    height:${constants.height/12};
    /* justify-content:center; */
    /* background-color:red; */
    align-items:center;
`;

const ImageWrapper = styled.View`
    width:${constants.width/6};
    height:${constants.height/12};
    display:flex;
    justify-content:center;
    align-items:center;
    
`;

const Description = styled.View`
    width:${constants.width-constants.width/6-40};
    /* background-color:skyblue; */
    height:${constants.height/12};
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    z-index:10;
`;
const DescriptionWrapper = styled.View`
    width:80%;
    display:flex;
    /* background-color:red; */
    height:${constants.height/12};
    justify-content:center;
    padding:10px;
    flex-grow:1;
`;
const MainText = styled.Text`
    font-weight:bold;
    /* font-size:18px; */
`;
const SubText = styled.Text`
    margin-top:5px;
    width:100%;
    font-size:10px;
`;
const Link = styled.TouchableOpacity`
    width:20%;
    height:${constants.height/12};
    display:flex;
    justify-content:center;
    align-items:center;
    /* background-color:green; */
    align-self:flex-start;
    flex-grow:1;
`;

const Icon = styled.Text`
    /* width:10%; */
    font-size:16px;
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


const Posts = styled.View`
  min-height:${constants.height};
  flex-direction:row; 
  justify-content:flex-start;
  flex-wrap:wrap;
`;



const OrderMapper= {
    "BYRATING":"별점 순",
    "BYCLICK":"조회 순",
    "BYREVIEWCOUNT":"리뷰 순",
    "BYLOWPRICE":"낮은 가격순",
    "BYHIGHPRICE":"높은 가격순",
    "BYLATEST":"최근출시 순",
  }


  
//   GET_MAIN_SEARCH_BAR

const ProductBrand = ({
    // onSubmit=(()=>{}),
    navigation
}) => {
    const user = useUser();
    const SearchBarSubmit = useSearchBarSubmit();
    const searchInput = usesearchInput();
    const posts = useSearchPost();


    
    const [LeftToggle,setLeftToggle] = useState(false); 
    const [certification,setCertification] = useState([]); 
    const [foodtypes,setFoodtypes] = useState(user?.foodtypes.map(e=>e.name)); 
    const [orderingoption,setOrderingoption] = useState("BYRATING");

    const color = "#fff";
    const backgroundColor = "#00cf85";
    const onSubmit= (FoodtypesResult,certificationResult,orderingType)=>{
    console.log({FoodtypesResult});
    console.log({certificationResult});
    console.log({orderingType});
    console.log({searchInput});
    let orderingForSubmit,foodtypeForSubmit,certiForSubmit; 
    if(FoodtypesResult.length===0){
        foodtypeForSubmit = foodtypes;
    }
    if(certificationResult.length===0){
        certiForSubmit =certification;
    }
    if(orderingType===undefined) {
        orderingForSubmit = orderingoption; 
    }
    SearchBarSubmit(foodtypeForSubmit,certiForSubmit,orderingForSubmit);
    // TODO submit 로직 짜기
    // const foodtypeForSubmit = 
    // const certiForSubmit = 
    // console.log("이 키워드로 검색");
    }

    
//   const {data,loading:loadingQ}= useQuery(GET_MAIN_SEARCH_BAR,{ 
//     // fetchPolicy:"no-cache",
//     fetchPolicy:"network-only",
//     variables:{
//         certification,foodtypes,orderingoption,keyword
//     },
//     onCompleted:()=>{
//       console.log(`${childrenTab}의 api 호출이 완료되었습니다.`);
//       if(data.length!==0){
//         setMainposts(childrenTab,data.MainTopTab,false);
//       }else{
//         // setMainposts(childrenTab,[],true);
//       }
//       setLoading(childrenTab);

      
//       // let index ; 
//       // let realElement ; 
//       // switch(orderingoption){
//       //   case "BYRATING":
//       //     index= data.MainTopTab.findIndex(e=>e.rating>0);
//       //     realElement = data.MainTopTab.splice(index); 
//       //     setPosts([...realElement,...data.MainTopTab])
//       //     break;
//       //   case "BYCLICK":
//       //     index= data.MainTopTab.findIndex(e=>e.totalHits>0);
//       //     realElement = data.MainTopTab.splice(index); 
//       //     setPosts([...realElement,...data.MainTopTab])

//       //     break;  
//       //   case "BYREVIEWCOUNT":
//       //     index= data.MainTopTab.findIndex(e=>e.reviewCount>0);
//       //     realElement = data.MainTopTab.splice(index); 
//       //     setPosts([...realElement,...data.MainTopTab])
//       //     break;  
//       //   case "BYLOWPRICE":
//       //   case "BYHIGHPRICE":
//       //   case "BYLATEST":
//       //     setPosts([...data.MainTopTab]);
//       //     break;  
//       // }
      
//     }
//   });

    // const beforeSearch= true;
    // const beforeSearch= false;
    return (
        <Container>
        <ScrollView>
            {
                posts===undefined
                ?
                    (
                        <>
                        <SectionFirst>
                            <Title>최근 검색한 상품</Title>
                            <List>
                                <Item backgroundColor={backgroundColor} onPress={onSubmit}>
                                    <ItemText color={color} >
                                        마요네즈
                                    </ItemText>
                                </Item>
                                
                                <Item backgroundColor={backgroundColor}>
                                    <ItemText color={color} >
                                        라면
                                    </ItemText>
                                </Item>
                                
                                <Item backgroundColor={backgroundColor}>
                                    <ItemText color={color} >
                                        마요네즈
                                    </ItemText>
                                </Item>
                                
                                <Item backgroundColor={backgroundColor}>
                                    <ItemText color={color} >
                                        라면
                                    </ItemText>
                                </Item>
                            </List>
                        </SectionFirst>
                        <SectionLast>
                            <Title>인기 상품</Title>
                            <List>
                                <Item backgroundColor={backgroundColor}>
                                    <ItemText color={color} >
                                        채담카레
                                    </ItemText>
                                </Item>
                                
                                <Item backgroundColor={backgroundColor}>
                                    <ItemText color={color} >
                                        풀무원 정면
                                    </ItemText>
                                </Item>
                                
                                <Item backgroundColor={backgroundColor}>
                                    <ItemText color={color} >
                                        채담카레
                                    </ItemText>
                                </Item>
                                
                                <Item backgroundColor={backgroundColor}>
                                    <ItemText color={color} >
                                        풀무원 정면
                                    </ItemText>
                                </Item>
                            </List>
                        </SectionLast>
                        </>
                    )
                :
                    (
                        <>
                            <SectionFirst>
                                <Title>브랜드</Title>
                                    <Brand>
                                        <ImageWrapper>
                                            <Image 
                                            resizeMode={"cover"}
                                            style={{
                                                width:constants.width/6,             
                                                height:constants.height/12, 
                                                borderRadius: 100,
                                                borderColor:"#dbdbdb",
                                                borderWidth:1
                                            }}
                                            source={require("../../assets/certi8.png")}
                                            />
                                        </ImageWrapper>
                                        
                                        <Description>
                                            <DescriptionWrapper>
                                                <MainText>더브레드블루</MainText>
                                                <SubText numberOfLines={2}>더브레드블루는 사랑입니다.더브레드블루는 사랑입니다.더브레드블루는 사랑입니다더브레드블루는 사랑입니다.더브레드블루는 사랑입니다.더브레드블루는 사랑입니다.</SubText>
                                            </DescriptionWrapper>
                                            <Link>
                                                <Icon>이동</Icon>
                                            </Link>
                                            
                                        </Description>
                                    </Brand>
                            </SectionFirst>
                            
                            
                            <SectionLast>
                                <Title>상품 {posts.length} 건</Title>

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
                                                <LeftFilter OnSubmit={onSubmit} setLeftToggle={setLeftToggle} orderingoption={orderingoption} setOrderingoption={setOrderingoption}  />
                                            </LeftFilterWrapper>
                                            )
                                        :
                                            (
                                            <></>
                                            )
                                    }
                                    <RightFilterIcon onPress={()=> navigation.navigate("DetailFilter",{
                                        onSubmit,certification,foodtypes,setFoodtypes,setCertification
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
                                    {posts.map((e,i)=>(
                                        <Post 
                                            post={e}
                                            index={i}
                                            fromSearchScreen={true}
                                        />
                                    ))}
                            </Posts>
                            </SectionLast>

                            
                        </>
                    )
            }
            </ScrollView>   
        </Container>
);

}

export default withNavigation(ProductBrand);
