import React, { useState } from "react"; 
import {Button, TouchableOpacity} from "react-native";
import styled from "styled-components";
import constants from "../constants";
import { ConvertCertification, ConvertPreference } from "../utils";
import RightFilterButton from "./Detail/BottomTab/RightFilterButton";
import NavIcon from "./NavIcon";

const Container = styled.View`
    background-color:white;
    border-radius:5;
    border-top-color:red;
    border-top-width:10px;
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
    margin-left:20px;
    margin-top:20px;
`; 

const Title = styled.Text`
    margin-bottom:10px;
    font-size:18px;
    font-weight:bold;

` ;

const PreferList = styled.View`
    flex-direction:row;
    justify-content:flex-start;
    flex-wrap:wrap;

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

const Apply = styled.View`
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



const RightFilter = ({
    certification,
    setPreferences,
    setCertification,
    preferences,
    setRightToggle,
    onSubmit
})=>{
    
    console.log(`안녕 rightFilter`, certification,preferences)

    // [비건 , 락토 , 오보 , 락토오보 , 페스코 , 폴로]
    const [preferS,setPreferS] = useState([]);
    // [한국 비건인증원,영국 비건 협회,우수 재활용,리핑 버니,환경표지,저탄소]
    const [certiS,setcertiS] = useState([]);

    const initPreferS=()=>{
        const tempArr= [0,0,0,0,0,0];
        preferences.forEach(e=>{
            switch(e){
                case "비건":
                    tempArr[0]=1;
                    break;
                case "락토":
                    tempArr[1]=1;
                    break;
                case "오보":
                    tempArr[2]=1;
                    break;
                case "락토오보":
                    tempArr[3]=1;
                    break;
                case "페스코":
                    tempArr[4]=1;
                    break;
                case "폴로":
                    tempArr[5]=1;
                    break;
            }
        })
        setPreferS(tempArr);
    }
    
    const initCertiS=()=>{
        const tempArr= [0,0,0,0,0,0];
        certiS.forEach(e=>{
            switch(e){
                case "한국 비건인증원":
                    tempArr[0]=1;
                    break;
                case "영국 비건 협회":
                    tempArr[1]=1;
                    break;
                case "우수 재활용":
                    tempArr[2]=1;
                    break;
                case "리핑 버니":
                    tempArr[3]=1;
                    break;
                case "환경표지":
                    tempArr[4]=1;
                    break;
                case "저탄소":
                    tempArr[5]=1;
            }
        })
        setPreferS(tempArr);
    }
    
    // 부모 엘리먼트로부터 받은 값으로 State 초기화
    initPreferS();
    initCertiS();

    const submit=()=>{  
        const preferenceResult=ConvertPreference(preferS);
        const certificationResult=ConvertCertification(certiS);
        setPreferences(preferenceResult);
        setCertification(certificationResult);
        onSubmit(preferenceResult,certificationResult);
        setRightToggle(false);
    }

    return (
        <Container>
            <Header>    
                <TouchableOpacity onPress={()=>setRightToggle(false)}>
                    <NavIcon name={"md-arrow-back"} color={"#000"} size={24} />
                </TouchableOpacity>
                <CenterText>상세필터</CenterText>
                <TouchableOpacity onPress={()=>setInit()}>
                    <InitOptions>초기화</InitOptions>
                </TouchableOpacity>
            </Header>
            <Preferences>
                <Title>채식주의 유형</Title>
                <PreferList>
                    <RightFilterButton index={0} toggle={preferS[0]} setcertiS={setPreferS} text={"비건"}/>
                    <RightFilterButton index={1} toggle={preferS[1]} setcertiS={setPreferS} text={"락토"}/>
                    <RightFilterButton index={2} toggle={preferS[2]} setcertiS={setPreferS} text={"오보"}/>
                    <RightFilterButton index={3} toggle={preferS[3]} setcertiS={setPreferS} text={"락토오보"}/>
                    <RightFilterButton index={4} toggle={preferS[4]} setcertiS={setPreferS} text={"페스코"}/>
                    <RightFilterButton index={5} toggle={preferS[5]} setcertiS={setPreferS} text={"폴로"}/>
                </PreferList>
                
            </Preferences>
            <Certification>
                <Title>인증 마크</Title>
                <CertificationList>
                    <RightFilterButton index={0} toggle={certiS[0]} setting={setcertiS} text={"한국 비건인증원"}/>
                    <RightFilterButton index={1} toggle={certiS[1]} setting={setcertiS} text={"영국 비건 협회"}/>
                    <RightFilterButton index={2} toggle={certiS[2]} setting={setcertiS} text={"우수 재활용"}/>
                    <RightFilterButton index={3} toggle={certiS[3]} setting={setcertiS} text={"리핑 버니"}/>
                    <RightFilterButton index={4} toggle={certiS[4]} setting={setcertiS} text={"환경표지"}/>
                    <RightFilterButton index={5} toggle={certiS[5]} setting={setcertiS} text={"저탄소"}/>
                    
                </CertificationList>
            </Certification>
            <TouchableOpacity onPress={()=>submit()}>
                <Apply>
                        <ApplyText>
                            적용하기
                        </ApplyText>
                </Apply>
            </TouchableOpacity>
        </Container>
    ); 
}

export default RightFilter; 