import React from "react";

import Slider from "../../screens/detail/slider";
import Metainfo from "../../screens/detail/metainfo";
import DetailTabNavigation from "./DetailTabNavigation";

import styled from "styled-components";
import { StatusBar, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import constants from "../../constants";

const Container = styled.View`
`;

const Sliders   = styled(Slider)`
    width:${constants.width}; 
    height:${constants.height/3}; 
`;


const DetailNavigation =()=>{
    // 이미지에 대한 state 
    // meta info에 대한 state
    // DetailTabNavi에 대한 state

    return (
        <Container>
            <ScrollView>
                <Sliders />
                <Metainfo />
                <DetailTabNavigation />
            </ScrollView>
        </Container>
    )
}

export default DetailNavigation;