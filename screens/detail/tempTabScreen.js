
import React from "react";
import styled from "styled-components";

const View = styled.View`
  justify-content:center;
  align-items:center;
  flex:1; 
`;

const Text = styled.Text`
  font-weight:600;
`;


export default () => {
  return <View><Text>this is tempTabScreen</Text></View>
}