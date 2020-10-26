import React from "react"; 
import {TextInput} from "react-native";
import PropTypes from "prop-types";
import styled from "styled-components";
import constants from "../constants";
import {Ionicons} from "@expo/vector-icons";

import styles from "../styles";
import NavIcon from "./NavIcon";

const SearchContainer = styled.View`
  position:relative;
  flex-direction:row;
  align-items:center;
`;

const SearchBar = ({ onChange=null, value="", onSubmit=null }) => (
    <>
      <SearchContainer>
        <Ionicons style={{position:"absolute",zIndex:10,paddingLeft:15}}
         name={'md-search'} color={"#717171"} size={30} />
          <TextInput
            style={{
              width: constants.width - 40,
              height: 40,
              backgroundColor: "#fff",
              padding: 20,
              borderRadius: 5,
              textAlign: "center",
              borderColor:"#DBDBDB",
              borderWidth:1
            }}
            returnKeyType="search"
            onChangeText={onChange}
            onEndEditing={onSubmit}
            value={value}
            placeholder={"비건행!!!!!!!!!!!!!!!!"}
            placeholderTextColor={styles.darkGreyColor}
          />
      </SearchContainer>
    </>
);
  
export default SearchBar;