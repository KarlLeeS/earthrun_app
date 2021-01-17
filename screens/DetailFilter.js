import React, { useState } from "react"; 
import {Image, Text, TouchableOpacity, View} from "react-native";
import styled from "styled-components";
import { useUser } from "../AuthContext";
import RightFilterButton from "../components/Detail/BottomTab/RightFilterButton";
import NavIcon from "../components/NavIcon";
import constants from "../constants";
import { ConvertCertification, ConvertFoodtypes } from "../utils";
import {initFoodtypes} from "../utils"

const FoodtypeButton = styled(RightFilterButton)`
    background-color: #00CF85;
    color:#000;
`;
 
const Container = styled.View`
    background-color:white;
    border-radius:5;
    min-height: ${constants.height};
    width:${constants.width};
`; 

const Header = styled.View`
    flex-direction:row;
    justify-content:space-between;
    padding:20px;
    border-bottom-color: #dedede;
    border-bottom-width:1;
`; 


const CenterText =styled.Text`
    font-size:18px;
` ;

const InitOptions = styled.Text`
    text-decoration:underline;
`; 

const Preferences = styled.View`
    padding-left:20px;
    padding-right:20px;
    margin-top:20px;
`; 

const CertificationHeader = styled.View`
    display:flex; 
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
`; 

const Title = styled.Text`
    margin-bottom:10px;
    font-size:18px;
    font-weight:bold;
` ;

const InfoWrapper = styled(TouchableOpacity)`
    /* background-color:red; */
    width:25px;
    height:25px;
    display:flex;
    border-radius:50;
    border-color:#000;
    border-width:1px;
    justify-content:center;
    align-items:center;
`


const PreferList = styled.View`
    /* flex-direction:row;
    justify-content:flex-start;
    flex-wrap:wrap; */
`; 

const Certification = styled.View`
    margin: 20px;
    padding-top:20px;
    border-top-color:#dedede;
    border-top-width:1px;
`; 

const CertificationList  = styled.View`
    flex-direction:row;
    justify-content:flex-start;
    flex-wrap:wrap;
`; 

const Apply = styled(TouchableOpacity)`
    position:absolute;
    left:0;
    bottom: ${constants.height/12};
    height:${constants.height/9};
    width:${constants.width};
    justify-content:center;
    background-color:#00cf85;
    align-items:center;
    padding:20px;
`;


const ApplyText = styled.Text`
    font-size:30px;
    text-align:center;
    color:#fff;
`;

const Foodtypes = styled.View`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
`;

const Foodtype = styled.TouchableOpacity`
    display:flex;
    flex-direction:column;
    align-items:center;
`;



const initCertiS=(certification)=>{
    const tempArr= [false,false,false,false,false,false];
    certification.forEach(e=>{
        switch(e){
            case "한국 비건인증원":
                tempArr[0]=true; 
                break;
            case "영국 비건 협회":
                tempArr[1]=true; 
                break;
            case "우수 재활용":
                tempArr[2]=true; 
                break;
            case "리핑 버니":
                tempArr[3]=true; 
                break;
            case "환경표지":
                tempArr[4]=true; 
                break;
            case "저탄소":
                tempArr[5]=true; 
        }
    })
    return tempArr;
}



const DetailFilter = ({
    navigation,
    route:{params:{
        onSubmit,
        certification,setCertification,
        foodtypes,setFoodtypes
    }}
})=>{   
    const user = useUser();
    console.log({certification}); 
    console.log({foodtypes}); 
    const arr_Foodtype = initFoodtypes(foodtypes);

    const arr_Certification = initCertiS(certification);
    
    // [채식,유제품,달걀,어류,조류]
    const [foodtypeLeaf,setfoodtypeLeaf] = useState(arr_Foodtype[0]); 
    const [foodtypeMilk,setfoodtypeMilk] = useState(arr_Foodtype[1]); 
    const [foodtypeEgg,setfoodtypeEgg] = useState(arr_Foodtype[2]); 
    const [foodtypeFish,setfoodtypeFish] = useState(arr_Foodtype[3]); 
    const [foodtypeChicken,setfoodtypeChicken] = useState(arr_Foodtype[4]); 

    // [한국 비건인증원,영국 비건 협회,우수 재활용,리핑 버니,환경표지,저탄소]
    const [certi0,setcerti0] = useState(arr_Certification[0]); 
    const [certi1,setcerti1] = useState(arr_Certification[1]); 
    const [certi2,setcerti2] = useState(arr_Certification[2]); 
    const [certi3,setcerti3] = useState(arr_Certification[3]); 
    const [certi4,setcerti4] = useState(arr_Certification[4]); 
    const [certi5,setcerti5] = useState(arr_Certification[5]); 


    const submit=()=>{  
        const FoodtypesResult=ConvertFoodtypes([foodtypeLeaf,foodtypeMilk,foodtypeEgg,foodtypeFish,foodtypeChicken,]);
        const certificationResult=ConvertCertification([certi0,certi1,certi2,certi3,certi4,certi5]);
        
        console.log(FoodtypesResult);
        console.log(certificationResult);
        setFoodtypes(FoodtypesResult);
        setCertification(certificationResult);
        onSubmit(FoodtypesResult,certificationResult);
    }

    const setInit=()=>{
        // 이렇게 해도 괜찮은 이유는 리액트 내부에서 setState 함수에 대한 리렌더링 처리시
        // 연속적인 호출에 대해서 한번의 렌더링 최적화를 지원해주기 때문에 
        // setPreferences(user?.foodtypes);
        // setCertification([]);
        // const initPrefer = initFoodtypes(foodtypes);
        // const initCerti = initCertiS([]);
        setfoodtypeLeaf(arr_Foodtype[0]);
        setfoodtypeMilk(arr_Foodtype[1]);
        setfoodtypeEgg(arr_Foodtype[2]);
        setfoodtypeFish(arr_Foodtype[3]);
        setfoodtypeChicken(arr_Foodtype[4]);

        setcerti0(arr_Certification[0]);
        setcerti1(arr_Certification[1]);
        setcerti2(arr_Certification[2]);
        setcerti3(arr_Certification[3]);
        setcerti4(arr_Certification[4]);
        setcerti5(arr_Certification[5]);
    }
    return (user&&
        <Container>
            <Header>    
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                    <NavIcon name={"md-close"} color={"#000"} size={24} />
                </TouchableOpacity>
                <CenterText>상세필터</CenterText>
                <TouchableOpacity onPress={()=>setInit()}>
                    <InitOptions>초기화</InitOptions>
                </TouchableOpacity>
            </Header>
            <Preferences>
                <Title>선호하는 식재료만 선택해주세요</Title>
                <PreferList>
                    <Foodtypes>
                        <Foodtype onPress={()=>{setfoodtypeLeaf(prev=>!prev);}}>
                            <Image
                                resizeMode={"contain"}
                                style={{
                                    width:constants.width/9,
                                    height:constants.height/18,
                                }}
                                source={foodtypeLeaf===true?require('../assets/icon_vegetype_color_leaf.png'):require('../assets/icon_vegetype_grey_leaf.png')}
                            />
                            <FoodtypeButton 
                                backgroundColor={"#00cf85"}
                                textColor={"#fff"}
                                borderRadius={"8"}
                                value={foodtypeLeaf} 
                                setValue={setfoodtypeLeaf} 
                                text={"채식"}
                            />
                        </Foodtype>
                        
                        <Foodtype onPress={()=>{setfoodtypeMilk(prev=>!prev);}}>
                            <Image
                                resizeMode={"contain"}
                                style={{
                                    width:constants.width/9,
                                    height:constants.height/18,
                                }}
                                source={foodtypeMilk===true?require('../assets/icon_vegetype_color_milk.png'):require('../assets/icon_vegetype_grey_milk.png')}
                            />
                            <FoodtypeButton 
                            backgroundColor={"#00cf85"}
                            textColor={"#fff"}
                            borderRadius={"8"}
                            value={foodtypeMilk} setValue={setfoodtypeMilk} text={"유제품"}/>
                        </Foodtype>
                        
                        <Foodtype onPress={()=>{setfoodtypeEgg(prev=>!prev);}}>
                            <Image
                                resizeMode={"contain"}
                                style={{
                                    width:constants.width/9,
                                    height:constants.height/18,
                                }}
                                source={foodtypeEgg===true?require('../assets/icon_vegetype_color_egg.png'):require('../assets/icon_vegetype_grey_egg.png')}
                            />
                            <FoodtypeButton
                            
                            backgroundColor={"#00cf85"}
                            textColor={"#fff"}
                            borderRadius={"8"}
                            value={foodtypeEgg} setValue={setfoodtypeEgg} text={"달걀"}/>
                        </Foodtype>
                        
                        <Foodtype onPress={()=>{setfoodtypeFish(prev=>!prev);}}>
                            <Image
                                resizeMode={"contain"}
                                style={{
                                    width:constants.width/9,
                                    height:constants.height/18,
                                }}
                                source={foodtypeFish===true?require('../assets/icon_vegetype_color_fish.png'):require('../assets/icon_vegetype_grey_fish.png')}
                            />
                            <FoodtypeButton 
                            
                            
                            backgroundColor={"#00cf85"}
                            textColor={"#fff"}
                            borderRadius={"8"}
                            value={foodtypeFish} setValue={setfoodtypeFish} text={"어류"}/>
                        </Foodtype>
                        
                        <Foodtype onPress={()=>{setfoodtypeChicken(prev=>!prev);}}>
                            <Image
                                resizeMode={"contain"}
                                style={{
                                    width:constants.width/9,
                                    height:constants.height/18,
                                }}
                                source={foodtypeChicken===true?require('../assets/icon_vegetype_color_chicken.png'):require('../assets/icon_vegetype_grey_chicken.png')}
                            />
                            <FoodtypeButton 
                            
                            backgroundColor={"#00cf85"}
                            textColor={"#fff"}
                            borderRadius={"8"}
                            value={foodtypeChicken} setValue={setfoodtypeChicken} text={"조류"}/>
                        </Foodtype>
                        
                    </Foodtypes>
                </PreferList>
                
            </Preferences>
            <Certification>
                <CertificationHeader>
                    <Title>인증 마크</Title>
                    <InfoWrapper onPress={()=>navigation.navigate("CertificationInfo")}>
                        <NavIcon name={"md-information"} color={"#000"} size={24} />
                    </InfoWrapper>
                </CertificationHeader>
                <CertificationList>
                    <RightFilterButton value={certi0} setValue={setcerti0} text={"한국 비건인증원"}/>
                    <RightFilterButton value={certi1} setValue={setcerti1} text={"영국 비건 협회"}/>
                    <RightFilterButton value={certi2} setValue={setcerti2} text={"우수 재활용"}/>
                    <RightFilterButton value={certi3} setValue={setcerti3} text={"리핑 버니"}/>
                    <RightFilterButton value={certi4} setValue={setcerti4} text={"환경표지"}/>
                    <RightFilterButton value={certi5} setValue={setcerti5} text={"저탄소"}/>
                </CertificationList>
            </Certification>
            <Apply onPress={()=>submit()}>
                <ApplyText>
                    적용하기
                </ApplyText>
            </Apply>
        </Container>
    ); 
}

export default DetailFilter; 