import React, { useState } from "react"; 
import {TouchableOpacity} from "react-native";
import styled from "styled-components";
import constants from "../constants";

const Container = styled.View`
    width:${constants.width/4.5};
    /* border:1px solid red; */
` ;
const Touchable = styled.TouchableOpacity`
    width:${constants.width/4.5};
background-color:${props=>props.on?"#00cf85":"#fff"};
`; 
const Item = styled.Text`
    color:${props=>props.on ?"#fff":"#000"} ;
    font-size:14px;
    padding:2px 0px;
    text-align:center;
    /* padding-left:13px; */
`;
    /* background-color:${props.clicked?"#00cf85":"#fff"}; */
// 

// BYLOWPRICE
// BYHIGHPRICE
// BYRATING
// BYCLICK
// BYREVIEWCOUNT
// BYLATEST
const makeInit=(orderingoption)=>{
    switch(orderingoption){
        case "BYRATING":
            return [true,false,false,false,false,false];
        case "BYCLICK":
            return [false,true,false,false,false,false];
        case "BYREVIEWCOUNT":
            return [false,false,true,false,false,false];
        case "BYLOWPRICE":
            return [false,false,false,true,false,false ];
        case "BYHIGHPRICE":
            return [false,false,false,false,true,false];
        case "BYLATEST":
            return [false,false,false,false,false,true];
    }
}


const LeftFilter = ({
    OnSubmit,
    setOrderingoption,
    orderingoption,
    setLeftToggle
})=>{
    
    const initValue = makeInit(orderingoption);
    const [filteringOption,setFilteringOption] = useState(initValue); 

    const submit=(type)=>{
        OnSubmit("",[],[],type);
        setOrderingoption(type);
        setLeftToggle(false);
    }
    
    return(
        <Container>
            <Touchable on={filteringOption[0]} onPress={()=>submit("BYRATING")}>
                <Item on={filteringOption[0]}>별점 순</Item>
            </Touchable>
            
            <Touchable on={filteringOption[1]}  onPress={()=>submit("BYCLICK")}>
                <Item on={filteringOption[1]} >조회 순</Item>
            </Touchable>
            
            <Touchable on={filteringOption[2]} onPress={()=>submit("BYREVIEWCOUNT")}>
                <Item  on={filteringOption[2]}>리뷰 순</Item>
            </Touchable>
            
            <Touchable on={filteringOption[3]}  onPress={()=>submit("BYLOWPRICE")}>
                <Item on={filteringOption[3]}>낮은 가격 순</Item>
            </Touchable>

            <Touchable on={filteringOption[4]} onPress={()=>submit("BYHIGHPRICE")}>
                <Item on={filteringOption[4]} >높은 가격 순</Item>
            </Touchable>

            <Touchable on={filteringOption[5]} onPress={()=>submit("BYLATEST")}>
                <Item on={filteringOption[5]} >최근출시 순</Item>
            </Touchable>

        </Container>
    )
}


export default LeftFilter; 