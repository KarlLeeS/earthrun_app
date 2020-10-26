import React from "react"; 
import { Image } from "react-native";
import styled from "styled-components"; 
import constants from "../../../constants";
import Certification from "./Certification";
import Rawmaterial from "./Rawmaterial";

const Container = styled.View`
    background-color:white;
    flex-direction:column;
    padding-top:15;
`;

const DescriptionWrap = styled.View`
    padding : 0px 15px;
`;

const Title = styled.Text`
    font-size:18;
    font-weight:bold;
    margin : 10px 0px;
`;
const DescriptionSubText = styled.Text``;

const CertificationWrap = styled.View`
    padding : 0px 15px;
`;

const CertificationImages = styled.View`
    flex-direction:row;
`;

const RawMaterialWrap= styled.View`
    margin-top:20px;
    padding : 0px 15px;
`; 

const RawMaterialList = styled.View`
    flex-direction:row;
    justify-content:flex-start;
    flex-wrap:wrap;
`; 

const RawMaterialImageWrap = styled.View`
    padding:15px;

`; 


const ProductInfo=()=>{
    return(
        <Container>
            <DescriptionWrap>
                <Title>상품 설명</Title>
                <DescriptionSubText>남아프리카의 서식하는 독수리와 같은 강렬한 카레의 맛. 강추.</DescriptionSubText>
            </DescriptionWrap>
            <CertificationWrap>
                <Title>인증 마크</Title>
                <CertificationImages>
                    <Certification />
                    <Certification />
                    <Certification />
                    <Certification />
                </CertificationImages>
            </CertificationWrap>
            <RawMaterialWrap>
                <Title>원재료</Title>
                <RawMaterialList>
                    <Rawmaterial label={"더러운 깃털"}/>
                    <Rawmaterial label={"영롱한 눈"} special />
                    <Rawmaterial label={"더러운 균"}/>
                    <Rawmaterial label={"탐스러운 부리"} special/>
                    <Rawmaterial label={"시체썩은 냄새"}/>
                    <Rawmaterial label={"멋있는 갈기"} special/>
                    <Rawmaterial label={"멋있는 갈기"} special/>
                </RawMaterialList>
            </RawMaterialWrap>
            <RawMaterialImageWrap>
                <Title>성분표</Title>
                <Image 
                style={{
                    // paddin:10,
                    width: constants.width/1-30,
                    height: constants.height/2,
                    borderRadius: 5
                }}
                source={require('./../../../assets/post.png')}/>
            </RawMaterialImageWrap>
        </Container>
    )
}

export default ProductInfo;