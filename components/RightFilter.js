import React from "react"; 
import {Button, TouchableOpacity} from "react-native";
import styled from "styled-components";
import constants from "../constants";
import RightFilterButton from "./Detail/BottomTab/RightFilterButton";
import NavIcon from "./NavIcon";

const Container = styled.View``; 

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



const RightFilter = ()=>{
    return (
        <Container>
            <Header>
                <TouchableOpacity>
                    <NavIcon name={"md-arrow-back"} color={"#000"} size={24} />
                </TouchableOpacity>
                <CenterText>상세필터</CenterText>
                <TouchableOpacity>
                    <InitOptions>초기화</InitOptions>
                </TouchableOpacity>
            </Header>
            <Preferences>
                <Title>채식주의 유형</Title>
                <PreferList>
                    <RightFilterButton text={"비건"}/>
                    <RightFilterButton text={"락토"}/>
                    <RightFilterButton text={"오보"}/>
                    <RightFilterButton text={"락토오보"}/>
                    <RightFilterButton text={"페스코"}/>
                    <RightFilterButton text={"폴로"}/>
                </PreferList>
                
            </Preferences>
            <Certification>
                <Title>인증 마크</Title>
                <CertificationList>
                    <RightFilterButton text={"한국 비건인증원"}/>
                    <RightFilterButton text={"영국 비건 협회"}/>
                    <RightFilterButton text={"NON-GMO project"}/>
                    <RightFilterButton text={"리핑 버니"}/>
                    <RightFilterButton text={"Vegan Action"}/>
                    <RightFilterButton text={"우수 재활용"}/>
                    <RightFilterButton text={"환경표지"}/>
                    <RightFilterButton text={"저탄소"}/>
                </CertificationList>
            </Certification>
            <TouchableOpacity>
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