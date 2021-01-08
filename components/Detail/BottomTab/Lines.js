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


const Lines = ({
    offline,
    online
})=>{
    console.log("rendering detail/subtab/Lines");
    return(
        <Container>
            <OffLine>
                <Title>오프라인 ({offline?offline.length:0})</Title>
                <Description>지점별 재고 상활에 따라 다를 수 있습니다.</Description>
                <OffLineList>
                    {
                        offline&&offline.map((e,i)=>(
                            <OffLineBox key={Math.floor(Math.random()*100)+i} />
                        ))
                    }
                </OffLineList>
            </OffLine>
            <OnLine>
                <Title>온라인 ({online?online.length:0})</Title>
                <Description>탭하면 구매 페이지로 이동합니다.</Description>
                <OnLineList>
                    {
                        online&&online.map((e,i)=>(
                            <OnLineBox key={Math.floor(Math.random()*100)+i}  />
                        ))
                    }
                </OnLineList>
            </OnLine>
        </Container>
    )
    
}


export default Lines;