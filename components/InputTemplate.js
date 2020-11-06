import React from "react";
import styled from "styled-components";
import constants from "../constants";


const Container = styled.View`
  margin-bottom:10px ;
`;

const TextInput = styled.TextInput`
  width:${constants.width / 1.7}; 
  padding:10px;
  background-color:#FAFAFA;
  border: 0.5px solid #999;
  border-radius:4px; 
`;


const InputTemplate=({
    placeholder,
    value,
    keyboardType = "default",
    autoCapitalize = "none",
    returnKeyType = "done",
    onChange,
    onSubmitEditing = () => null,
    autoCorrect = true
})=>{
    return(
        <Container>
            <TextInput
                value={value}
                onChangeText={onChange}
                keyboardType={keyboardType}
                returnKeyType={returnKeyType}
                placeholder={placeholder}
                autoCapitalize={autoCapitalize}
                onSubmitEditing={onSubmitEditing}
                autoCorrect={autoCorrect}
            />
        </Container>
    )
}

// AuthInput.propTypes = {
//     placeholder: PropTypes.string.isRequired,
//     value: PropTypes.string.isRequired,
//     keyboardType: PropTypes.oneOf([
//       "default",
//       "number-pad",
//       "decimal-pad",
//       "numeric",
//       "email-address",
//       "phone-pad"
//     ]),
//     autoCapitalize: PropTypes.oneOf([
//       "none",
//       "sentences",
//       "words",
//       "characters"
//     ]),
//     onChange: PropTypes.func.isRequired,
//     returnKeyType: PropTypes.oneOf(["done", "go", "next", "search", "send"]),
//     onSubmitEditing: PropTypes.func,
//     autoCorrect: PropTypes.bool
//   };


export default InputTemplate;