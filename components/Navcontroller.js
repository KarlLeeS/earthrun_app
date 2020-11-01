import React from "react";
import MainNavigation from "../navigation/MainNavigation";
import styled from "styled-components";
import Loader from "./Loader";
import AuthNavigation from "../navigation/AuthNavigation";
import { useIsLoggedIn} from "../AuthContext";
import { USER_FRAGMENT } from "../fragments";
import { useQuery } from "@apollo/client";
import {gql} from "apollo-boost"
import { cos } from "react-native-reanimated";
const View = styled.View`
  justify-content:center;
  align-items:center;
  flex:1; 
`;

const Text = styled.Text`
  font-weight:900;
`;



export default () => {

  const isLoggedIn = useIsLoggedIn();

  return isLoggedIn ? <MainNavigation /> : <AuthNavigation />; 
  // return  <MainNavigation />; 
  
  
}
