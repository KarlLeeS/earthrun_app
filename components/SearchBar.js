import React from "react"; 
import {Text, TextInput} from "react-native";
import PropTypes from "prop-types";
import styled from "styled-components";
import constants from "../constants";
import {Ionicons} from "@expo/vector-icons";
import { withNavigation } from "@react-navigation/compat";

import styles from "../styles";
import NavIcon from "./NavIcon";
import { TouchableOpacity } from "react-native-gesture-handler";
import useInput from "./useInput";

const SearchContainer = styled.View`
  position:relative;
  flex-direction:row;
  align-items:center;
`;

const Touchable= styled.TouchableOpacity`
  width:${constants.width-40};
  height:40;
  background-color:#fff;
  padding:20px;
  border-radius:5;
  border-color:#dbdbdb;
  border-width:1;
`;


const SearchBar = ({onChange, value, onSubmit,setValue, fake ,navigation}) => {
  return (
    fake
    ?
      (
        <SearchContainer>
          <Ionicons style={{position:"absolute",zIndex:10,paddingLeft:15}}
          name={'md-search'} color={"#717171"} size={30} />
          <Touchable onPress={()=>{navigation.navigate("Search",{})}} >
            </Touchable>
          </SearchContainer>
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
              textAlign: "center",
              borderColor:"#DBDBDB",
              borderWidth:1
            }}
            returnKeyType="search"
            onChangeText={onChange}
            onEndEditing={onSubmit}
            value={value}
            placeholder={"검색어를 입력해주세요"}
            placeholderTextColor={"#000"}
            />
          <Ionicons onPress={()=>{ setValue("") }} style={{position:"absolute",zIndex:10,right:10,paddingRight:15}} name={"md-refresh"} color={"#000"} size={24} />
        </SearchContainer>
      )
  );
}
  
  
export default withNavigation(SearchBar);