import React from "react";
import styled from "styled-components"; 
import PropTypes from "prop-types";
import constants from "../../constants";

const Container = styled.View`
    margin-bottom:10px;
`; 

const TextInput = styled.TextInput`
    width:${constants.width/1.7};
    padding:10px;
    background-color:${props=>props.theme.greyColor};
    border: 0.5px solid ${props=>props.theme.darkGreyColor};
    border-radius:4px;
`; 


const AuthInput=({
    placeholder, 
    value,
    keyboardType="default",
    autoCapitalize="none",
    returnKeyType="done",
    onChange,
    onSubmitEditing=()=>null, 
    autoCorrect =true 
})=>(
    <Container>
        <TextInput 
            value={value}
            lan
            onChangeText={onChange}
            keyboardType={keyboardType}
            returnKeyType={returnKeyType}
            placeholder={placeholder}
            autoCapitalize={autoCapitalize}
            onSubmitEditing={onSubmitEditing}
            autoCorrect={autoCorrect}
        />
    </Container>
);

export default AuthInput; 