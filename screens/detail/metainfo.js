
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

const PreferenceList = styled.View`
  flex-direction:row;

`; 

const Preference = styled.Text`
  margin-left:10px;
  margin-top:10px;
  color: #000;
  font-size:16px;
`; 



export default ({
  brand,
  name,
  weight,
  price,
  preferences
}) => {
  return(<Container>
      <Brand>{brand}</Brand>
      <Name>{name}</Name>
      <WeightPrice>{weight}g / {price}원</WeightPrice>
      <PreferenceList>
        {preferences.map(e=>(
          <Preference key={e.id}>{e.name}</Preference>
        ))}
      </PreferenceList>
    </Container>
  ) 
}