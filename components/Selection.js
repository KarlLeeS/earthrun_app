import { array } from "prop-types";
import React, { useEffect, useState } from "react";
import { Button, Text } from "react-native";
import dummyData from "../uploadPostJson";
import RightFilterButton from "./Detail/BottomTab/RightFilterButton";
import styled from "styled-components"; 
const Container= styled.View`
    margin: 50px 0px 0px 20px;
    flex-direction:row;
    flex-wrap:wrap;
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
        <Container>
            {
                multiple&&multiple.map((e,i)=>(
                    <RightFilterButton type={type} key={`${data[i]}`} index={i} value={e} setValue={setMultiple} text={data[i]}/>
                ))
            }
            <Button title="결정" onPress={()=>onSubmit()}  />
        </Container>
    )
}

export default Selection; 