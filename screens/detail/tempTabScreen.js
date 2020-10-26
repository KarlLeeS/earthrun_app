
import React from "react";
import styled from "styled-components";
import {View,Text} from "react-native";

const Container = styled.View`
  border-top-color:#dbdbdb;
  border-top-width:1;
  background-color:#fff;
`;


export default () => {
  return(
    <Container>
      <View></View>
    </Container>
  ) 
}