import React from "react"; 
import {Text,TextInput} from "react-native";
import PropTypes from "prop-types";
import styled from "styled-components";
import constants from "../constants";
import {Ionicons} from "@expo/vector-icons";
import { withNavigation } from "@react-navigation/compat";
import { TouchableOpacity } from "react-native-gesture-handler";

const SearchContainer = styled.View`
  position:relative;
  flex-direction:row;
  align-items:center;
`;

// const TSearchContainer = styled.Touchable`
//   position:relative;
//   flex-direction:row;
//   align-items:center;
// `;



const Touchable= styled.TouchableOpacity`
  width:${constants.width};
  background-color:red;
`;


const TextInputZ =React.forwardRef(
  ({
    onChange,
onSubmit,
value,
fake
  },ref)=>(
    <TextInput
        // ref={ref}
        style={{
          width: constants.width - 80,
          height: constants.height/20,
          backgroundColor: "#fff",
          borderRadius: 5,
          textAlign: "center",
          borderColor:"#DBDBDB",
          borderWidth:1,
          
        }}
        returnKeyType="search"
        onChangeText={onChange}
        onEndEditing={onSubmit}
        value={value}
        placeholder={fake===true?"상품,브랜드,원재료,성분":"검색어를 입력해주세요"}
        placeholderTextColor={"#000"}
        />
  )
) 

const SearchBar = (onChange, value, onSubmit,setValue, fake ,navigation) => {
  
  const searchBar = useRef();

  useEffect(()=>{
  const defaultFocus=()=>{
    console.log(searchBar);
    // searchBar.current.focus();
  }
  defaultFocus()
  },[])

  return (
    fake
    ?
      (
          <SearchContainer>
            <Ionicons style={{position:"absolute",zIndex:10,paddingLeft:15}}
            name={'md-search'} color={"#717171"} size={30} />
              <TextInput
                ref={ref}
                style={{
                  
                  width: constants.width - 40,
                  height: constants.height/20,
                  backgroundColor: "#fff",
                  borderRadius: 5,
                  textAlign: "left",
                  borderColor:"#DBDBDB",
                  borderWidth:1,
                  paddingLeft:50
                }}
                onTouchStart={()=>{navigation.navigate("Search",{})}}
                returnKeyType="search"
                value={value}
                placeholder={"상품,브랜드,원재료,성분"}
                placeholderTextColor={"#000"}
                />
          </SearchContainer>

      )
    :
      (
        <SearchContainer>
          <Ionicons style={{position:"absolute",zIndex:10,paddingLeft:15}}
          name={'md-search'} color={"#717171"} size={30} />
          <TextInputZ
              ref={searchBar}
              onChangeText={onChange}
              onEndEditing={onSubmit}
              value={value}
              fake={fake}
            />
          <Ionicons onPress={()=>{ setValue("") }} style={{position:"absolute",zIndex:10,right:10,paddingRight:15}} name={"md-refresh"} color={"#000"} size={24} />
        </SearchContainer>
      )
  );
}
  
  
export default React.forwardRef(withNavigation(SearchBar ));
