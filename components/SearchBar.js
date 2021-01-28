import React, { useEffect, useRef } from "react"; 
import {Keyboard, KeyboardAvoidingView, Text,TextInput} from "react-native";
import PropTypes from "prop-types";
import styled from "styled-components";
import constants from "../constants";
import {Ionicons} from "@expo/vector-icons";
import { withNavigation } from "@react-navigation/compat";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useSearchBarSubmit, usesearchInput } from "../AuthContext";
import useInput from "../hooks/useInput";

const SearchContainer = styled.View`
  position:relative;
  flex-direction:row;
  align-items:center;
`;


const Touchable= styled.TouchableOpacity`
position:relative;
flex-direction:row;
align-items:center;
`;



const SearchBar = ({  fake ,navigation}) => {
  const SearchBarSubmit = useSearchBarSubmit()
  // const searchInput = usesearchInput();
  const searchInput = useInput();
  return (
    fake
    ?
      (
          <Touchable onPress={()=>navigation.navigate("Search",{})}>
            <Ionicons style={{position:"absolute",zIndex:10,paddingLeft:15}}
            name={'md-search'} color={"#a0a0a0"} size={30} />
              <TextInput
                style={{
                  width: constants.width - 40,
                  height: constants.height/20,
                  backgroundColor: "#fff",
                  borderRadius: 100,
                  textAlign: "left",
                  borderColor:"#DBDBDB",
                  borderWidth:1,
                  paddingLeft:50,

                }}
                editable={false}
                // onTouchStart={()=>{navigation.navigate("Search",{})}}
                // onPress={()=>Keyboard.dismiss()}
                showSoftInputOnFocus={false}
                // onPress={()=>console.log(2)}
                returnKeyType="search"
                placeholder={"상품,브랜드,원재료,성분"}
                placeholderTextColor={"#a0a0a0"}
                />
          </Touchable>

      )
    :
      (
        <SearchContainer>
          <Ionicons style={{position:"absolute",zIndex:10,paddingLeft:15}}
          name={'md-search'} color={"#717171"} size={30} />
          <TextInput
            style={{
              width: constants.width - 80,
              height: constants.height/20,
              backgroundColor: "#fff",
              borderRadius: 5,
              textAlign: "left",
              borderColor:"#DBDBDB",
              borderWidth:1,
              paddingLeft:50,
              
            }}
            // showSoftInputOnFocus={false}
            autoFocus
            returnKeyType="search"
            onChangeText={searchInput.onChange}
            // onEndEditing={SearchBarSubmit}
            onEndEditing={()=>{

              console.log(11);
              Keyboard.dismiss();
              console.log("searchInput.value",searchInput.value)
              if(searchInput.value==null){
                console.log('공백아닌가');
                return;
              }else{
                SearchBarSubmit(undefined,undefined,undefined,searchInput.value)
              }
            }}
            onSubmit={()=>{
             }}
            value={searchInput.value}
            placeholder={"상품,브랜드,원재료,성분"}
            placeholderTextColor={"#000"}
        />
          <Ionicons onPress={()=>{ searchInput.setValue("") }} style={{position:"absolute",zIndex:10,right:10,paddingRight:15}} name={"md-refresh"} color={"#000"} size={24} />
        </SearchContainer>
      )
  );
}
  
  
export default withNavigation(SearchBar);
