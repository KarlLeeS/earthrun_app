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


const ProductInfo=({
    description,
    certification,
    rawMaterials,
    rawMaterialURL
})=>{
    return(
        <Container>
            <DescriptionWrap>
                <Title>상품 설명</Title>
                <DescriptionSubText>{description}</DescriptionSubText>
            </DescriptionWrap>
            <CertificationWrap>
                <Title>인증 마크</Title>
                <CertificationImages>
                    {certification.map(e=>(
                        <Certification key={e.id} url={e.url}/>
                    ))}
                </CertificationImages>
            </CertificationWrap>
            <RawMaterialWrap>
                <Title>원재료</Title>
                <RawMaterialList>
                    {
                        rawMaterials.map(e=>(
                            <Rawmaterial key={e.id} label={e.name}/>
                        ))
                    }
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
                source={{uri:rawMaterialURL}}/>
            </RawMaterialImageWrap>
        </Container>
    )
}

export default ProductInfo;