import React from "react";
import { View } from "react-native";
import styled from "styled-components";

const Vieww = styled.View`
    justify-content:center; 
    align-items:center;
    flex:1;
`;

const Textt = styled.Text`
    font-size:20px; 
`; 


const NOTYET=({route})=>{
    return(
        <Vieww>
            <Textt>
                {route.text}
            </Textt>
        </Vieww>
    )

}

export default NOTYET;