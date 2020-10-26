import React from "react";
import { Image ,TouchableOpacity} from "react-native";
import styled from "styled-components";
import constants from "../../../constants";

const Container = styled.TouchableOpacity`
    justify-content:center;
    align-items:center;
    background-color:white;
    width:${constants.width/3.35-10};
    height:${constants.height/15};
    border:1px solid #e5e5e5; 
    border-radius:5px;
    margin:5px;
`; 

const OffLineBox = ()=>{
    return (
        <Container>
            <Image
                style={{
                    width:constants.width/4.5,
                    height:constants.height/20
                }}
                source={require('./../../../assets/post.png')}
            />
        </Container>
    )
}

export default OffLineBox; 