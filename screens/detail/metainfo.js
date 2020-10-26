
import React from "react";
import styled from "styled-components";


const Container = styled.View`  
  background-color:white;
  padding: 10px;
`;
const Brand= styled.Text`
  color: #a0a0a0;
  font-weight:bold;
`;
const Name= styled.Text`
  margin-top: 5px;
  color: #000;
  font-size:30px;
  font-weight:bold;
`;
const WeightPrice = styled.Text`
  color: #a0a0a0;
  font-size:16px;
`;
const Preference = styled.Text`
  margin-top:10px;
  color: #000;
  font-size:16px;
`; 



export default () => {
  return(
    <Container>
      <Brand>순수람</Brand>
      <Name>독수리 카레</Name>
      <WeightPrice>3000g / 28억원</WeightPrice>
      <Preference>플렉시테리언</Preference>
    </Container>
  ) 
}