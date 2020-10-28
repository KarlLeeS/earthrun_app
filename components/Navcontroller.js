import React from "react";
import MainNavigation from "../navigation/MainNavigation";
import styled from "styled-components";
import Loader from "./Loader";
import AuthNavigation from "../navigation/AuthNavigation";
import { useIsLoggedIn } from "../AuthContext";

const View = styled.View`
  justify-content:center;
  align-items:center;
  flex:1; 
`;

const Text = styled.Text`
  font-weight:900;
`;



export default () => {
  const isLoggedIn = true;
  // const isLoggedIn = useIsLoggedIn();

  // return isLoggedIn ? <MainNavigation /> : <AuthNavigation />; 
  return <MainNavigation /> 

}
