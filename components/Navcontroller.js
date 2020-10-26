import React from "react";
import MainNavigation from "../navigation/MainNavigation";
import styled from "styled-components";
import Loader from "./Loader";

const View = styled.View`
  justify-content:center;
  align-items:center;
  flex:1; 
`;

const Text = styled.Text`
  font-weight:900;
`;



export default () => {
  const isLoggedIn = false;

  return isLoggedIn ? <MainNavigation /> : <AuthNavigation />; 

}
