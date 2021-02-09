import React from "react";
import {ActivityIndicator} from "react-native";
import styled from "styled-components";
import styles from "../styles";

const Container = styled.View`
    flex:1;
    justify-content:center;
    align-items:center;
`;

const Loader =({size,color})=>(
        <ActivityIndicator  size={size}  color={color||styles.blackColor}/>
);
export default Loader;