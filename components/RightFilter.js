import React, { useState } from "react"; 
import {Button, TouchableOpacity} from "react-native";
import styled from "styled-components";
import { useUser } from "../AuthContext";
import constants from "../constants";
import { ConvertCertification, ConvertPreference } from "../utils";
import RightFilterButton from "./Detail/BottomTab/RightFilterButton";
import NavIcon from "./NavIcon";

const Container = styled.View`
    background-color:white;
    border-radius:5;
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


const initCertiS=(certification)=>{
    const tempArr= [0,0,0,0,0,0];
    certification.forEach(e=>{
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
    // console.log({tempArr})
    return tempArr;
}

const initPreferS=(preferences )=>{
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
    return tempArr;
}


const RightFilter = ({
    certification,
    setPreferences,
    setCertification,
    preferences,
    setRightToggle,
    onSubmit
})=>{   
    const user = useUser();
    
    // console.log(`안녕 rightFilter`, certification,preferences)
    const initPreferecnes = initPreferS(preferences);
    const initCertification = initCertiS(certification);
    
    // [비건 , 락토 , 오보 , 락토오보 , 페스코 , 폴로]
    const [prefer0,setprefer0] = useState(initPreferecnes[0]); 
    const [prefer1,setprefer1] = useState(initPreferecnes[1]); 
    const [prefer2,setprefer2] = useState(initPreferecnes[2]); 
    const [prefer3,setprefer3] = useState(initPreferecnes[3]); 
    const [prefer4,setprefer4] = useState(initPreferecnes[4]); 
    const [prefer5,setprefer5] = useState(initPreferecnes[5]); 
    // [한국 비건인증원,영국 비건 협회,우수 재활용,리핑 버니,환경표지,저탄소]
    const [certi0,setcerti0] = useState(initCertification[0]); 
    const [certi1,setcerti1] = useState(initCertification[1]); 
    const [certi2,setcerti2] = useState(initCertification[2]); 
    const [certi3,setcerti3] = useState(initCertification[3]); 
    const [certi4,setcerti4] = useState(initCertification[4]); 
    const [certi5,setcerti5] = useState(initCertification[5]); 

    // console.log(prefer0,prefer1,prefer2,prefer3,prefer4,prefer5);
    // console.log(certi0,certi1,certi2,certi3,certi4,certi5);

    const submit=()=>{  
        const preferenceResult=ConvertPreference([prefer0,prefer1,prefer2,prefer3,prefer4,prefer5]);
        const certificationResult=ConvertCertification([certi0,certi1,certi2,certi3,certi4,certi5]);
        // console.log({preferenceResult});
        console.log({certificationResult});
        setPreferences(preferenceResult);
        setCertification(certificationResult);
        onSubmit(preferenceResult,certificationResult);
        setRightToggle(false);
    }

    const setInit=()=>{
        setPreferences([`${user?.preference.name}`]);
        setCertification([]);
        const initPrefer = initPreferS([`${user?.preference.name}`]);
        const initCerti = initCertiS([]);
        setprefer0(initPreferecnes[0]);
        setprefer1(initPreferecnes[1]);
        setprefer2(initPreferecnes[2]);
        setprefer3(initPreferecnes[3]);
        setprefer4(initPreferecnes[4]);
        setprefer5(initPreferecnes[5]);

        setcerti0(initCertification[0]);
        setcerti1(initCertification[1]);
        setcerti2(initCertification[2]);
        setcerti3(initCertification[3]);
        setcerti4(initCertification[4]);
        setcerti5(initCertification[5]);
    }

    return (user&&
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
                    <RightFilterButton value={prefer0} setValue={setprefer0} text={"비건"}/>
                    <RightFilterButton value={prefer1} setValue={setprefer1} text={"락토"}/>
                    <RightFilterButton value={prefer2} setValue={setprefer2} text={"오보"}/>
                    <RightFilterButton value={prefer3} setValue={setprefer3} text={"락토오보"}/>
                    <RightFilterButton value={prefer4} setValue={setprefer4} text={"페스코"}/>
                    <RightFilterButton value={prefer5} setValue={setprefer5} text={"폴로"}/>
                </PreferList>
                
            </Preferences>
            <Certification>
                <Title>인증 마크</Title>
                <CertificationList>
                    <RightFilterButton value={certi0} setValue={setcerti0} text={"한국 비건인증원"}/>
                    <RightFilterButton value={certi1} setValue={setcerti1} text={"영국 비건 협회"}/>
                    <RightFilterButton value={certi2} setValue={setcerti2} text={"우수 재활용"}/>
                    <RightFilterButton value={certi3} setValue={setcerti3} text={"리핑 버니"}/>
                    <RightFilterButton value={certi4} setValue={setcerti4} text={"환경표지"}/>
                    <RightFilterButton value={certi5} setValue={setcerti5} text={"저탄소"}/>
                    
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