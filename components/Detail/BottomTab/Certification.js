import React from "react";
import {Image, TouchableOpacity} from "react-native"; 
import styled from "styled-components"; 
import constants from "../../../constants";
const Touchable = styled.TouchableOpacity`

`; 

const Certification = ({url})=>{

    
    return (
        <Touchable>
            <Image
                style={{
                    width: constants.width/7,
                    height: constants.height/14,
                    borderRadius: 5,
                    marginRight:10
                }}
                source={require('./../../../assets/post.png')}
            />
        </Touchable>
    );
}

export default Certification;