import React from "react" ;
import {} from "react-native";
import styled from "styled-components";
import constants from "../../../constants";
import OffLineBox from "./OffLineBox";
import OnLineBox from "./OnLineBox";

const Container= styled.View`
    background-color:white;
    height:${constants.height};
    padding: 0 20px;
`; 

const OffLine = styled.View`
    padding:20px 0px;
    border-bottom-color:#ececec;
    border-bottom-width:1;
`; 

const Title = styled.Text`
    font-size:18px;
    font-weight:bold;
    margin-bottom:10px;

`;

const Description = styled.Text`
    color:#979ca3;
    margin-bottom:20px;

`; 

const OffLineList = styled.View`
    flex-direction:row; 
    justify-content:flex-start;
    flex-wrap:wrap;
`; 


const OnLine = styled.View`
    padding:20px 0px;
    
`; 

const OnLineList = styled.View`
    padding: 20px 0px;
`; 


const Lines = ()=>{
    return(
        <Container>
            <OffLine>
                <Title>오프라인 (5)</Title>
                <Description>지점별 재고 상활에 따라 다를 수 있습니다.</Description>
                <OffLineList>
                    <OffLineBox />
                    <OffLineBox />
                    <OffLineBox />
                    <OffLineBox />
                </OffLineList>
            </OffLine>
            <OnLine>
                <Title>온라인 (10)</Title>
                <Description>탭하면 구매 페이지로 이동합니다.</Description>
                <OnLineList>
                    <OnLineBox />
                    <OnLineBox />
                    <OnLineBox />
                    <OnLineBox />
                </OnLineList>
            </OnLine>
        </Container>
    )
}

export default Lines;