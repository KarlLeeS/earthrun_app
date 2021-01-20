import React from "react";
import {Image, View, StyleSheet,TouchableOpacity} from "react-native"; 
import styled from "styled-components"; 
import { withNavigation } from "@react-navigation/compat";
import constants from "../../../constants";

const Certification = ({name,navigation})=>{
    console.log({name});
    return (
        <View style={styles.cardShadow}> 
            <TouchableOpacity style={styles.cardContainer}  onPress={()=>navigation.navigate("CertificationInfo")}>
                <Image
                    resizeMode={"cover"}
                    style={{
                        width: constants.width/9,
                        height: constants.height/18,
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
            </TouchableOpacity>
        </View>

    );
}

const styles = StyleSheet.create({
    cardShadow: {
        marginRight:10,
        borderRadius: 16,
        // paddingLeft:10,
        // paddingRight:10,
        // maxWidth:120,
        backgroundColor: 'transparent',
        marginBottom:10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        
        elevation: 5,
   },
   cardContainer: {
        maxWidth:120,
        paddingLeft:6,
        backgroundColor: 'transparent',
        // paddingRight:5,
        paddingTop:5,
        paddingBottom:5,
        backgroundColor: '#fff',
        borderRadius: 16,
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
   },
  });

export default withNavigation(Certification);