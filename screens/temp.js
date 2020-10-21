
import React from "react";
import { Text, View } from "react-native";
import styled from "styled-components/native";
import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("screen");

const BIGTEMP = styled.View`
  width: ${width} ;
  height:${height};
`;

const BIGTEXT = styled.Text`
  font-weight:900;
`;


export default () => (
  <BIGTEMP><BIGTEXT>earth Run~~</BIGTEXT></BIGTEMP>)