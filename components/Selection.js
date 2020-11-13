import { array } from "prop-types";
import React, { useEffect, useState } from "react";
import { Alert, TouchableOpacity } from "react-native";
import dummyData from "../uploadPostJson";
import RightFilterButton from "./Detail/BottomTab/RightFilterButton";
import styled from "styled-components"; 
import constants from "../constants";
const Container= styled.View`
    /* padding: 20px 40px; */
    flex-direction:row;
    flex-wrap:wrap;
    justify-content:center;
    width:${constants.width/1.7};
    margin-bottom:10px;
`;
const Touchable = styled.TouchableOpacity`
    width:${constants.width/1.7};
    height:${constants.height/25};
    border-radius:10px;
    background-color: ${props=>props.theme.blueColor};
    justify-content:center;
    align-items:center;
    margin: 10px 0px;
`; 

const SelectText = styled.Text`
    color:#fff;
`;


const Selection=({
        certification,
        rawMaterials,
        preferences,
        setCertification,
        setRawMaterials,
        setPreferences,
        type
})=>{
    useEffect(()=>{
    // FIND useEffect는 가장 처음 파일이 읽히고 난 다음에야 실행 된다. 그러나 렌더링이 되기 이전에 실행되므로 주의하자. 내가 원하는 기능을 만들어내기 위해서 필요한 react life cycle 지식을 잘 찾아서 적용하자 
    },[]);
    let data,arr; 
    if(certification){
        data = dummyData.certification;

    }else if(rawMaterials){
        data = dummyData.rawMaterials;
    }else if(preferences){
        data = dummyData.preferences;
    }
    // TODO 지금은 FILL0 이 끝이지만 나중에는 MAPPER 함수 만들어서 1로 바꿔줘야 함. 
    arr = new Array(data.length).fill(0)
    
    const [multiple,setMultiple] =useState([...arr]);
    console.log(multiple);

    const onSubmit=()=>{
        let result= [];
        switch(type){
            case "radio":
                multiple.map((e,i)=>{
                    if(e===1){
                        result.push(data[i]);
                        return;
                    }
                })
                break;
            case "multi":
                multiple.map((e,i)=>{
                    if(e===1){
                        result.push(data[i]);
                        return;
                    }
                })
                break;
        }
        

        if(certification){
            setCertification(result);
        }
        if(rawMaterials){
            setRawMaterials(result);
        }
        if(preferences){
            setPreferences(result);
        }
        Alert.alert("설정한 성향은 마이 페이지에서 언제든 바꿀 수 있어요 :)");
        console.log(result);
    }

    // NOTE Multiple과 Radio 동일한 논리로 진행될 수 있다. 
    // preferences RADIO 만들어야함 
    // certification MUTIPLE SELECTION 만들어야함   
    // rawMaterials MUTIPLE SELECTION certification 재사용 가능 
    // categories 상단 RADIO 하단 RADIO 따로 만들어야 하나 preferences 컴포넌트 재사용 가능
    // console.log(dummyData);
    // console.log(11);
    return(
        <>
            <Container>
                {
                    multiple&&multiple.map((e,i)=>(
                        <RightFilterButton type={type} key={`${data[i]}`} index={i} value={e} setValue={setMultiple} text={data[i]}/>
                    ))
                }
            </Container>
            <Touchable onPress={()=>onSubmit()}>
                <SelectText>
                    성향선택
                </SelectText>
            </Touchable>
        </>
    )
}

export default Selection; 