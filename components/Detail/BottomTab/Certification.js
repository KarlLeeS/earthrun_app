import React from "react";
import {Image, TouchableOpacity} from "react-native"; 
import styled from "styled-components"; 
import constants from "../../../constants";
const Touchable = styled.TouchableOpacity`
`; 

const Certification = ({name})=>{
    console.log({name});
    return (
        <Touchable>
            <Image
                style={{
                    width: constants.width/7,
                    height: constants.height/14,
                    borderRadius: 5,
                    marginRight:10
                }}
                source={
                    
                    name==="한국 비건인증원"
                    ?
                    require("../../../assets/certi1.png")
                    :
                    name==="영국 비건 협회"
                    ?
                    require("../../../assets/certi2.png")
                    :
                    name==="NON-GMO"
                    ?
                    require("../../../assets/certi3.png")
                    :
                    name==="리핑 버니"
                    ?
                    require("../../../assets/certi4.png")
                    :
                    name==="VEGAN ACTION"
                    ?
                    require("../../../assets/certi5.png")
                    :
                    name==="우수 재활용"
                    ?
                    require("../../../assets/certi6.png")
                    :
                    name==="환경표지"
                    ?
                    require("../../../assets/certi7.png")
                    :
                    name==="저탄소"
                    ?
                    require("../../../assets/certi5.png")
                    :
                    require("../../../assets/certi5.png")
                }
            />
        </Touchable>
    );
}

export default Certification;