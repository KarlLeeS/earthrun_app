import React, { useEffect } from 'react';
import { View } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import styled from "styled-components"; 
import { usematerials, usesettingMaterials } from '../../AuthContext';
import constants from '../../constants';
import { withNavigation } from "@react-navigation/compat";
import { useState } from 'react/cjs/react.development';

const Container = styled.View``;
const SelectList = styled.View`
    padding-top:20px;
    display:flex;
    flex-wrap:wrap;
    flex-direction:row;
    background-color:#f8f8f8;
`;

const ItemWrapper = styled.TouchableOpacity`
    width:${constants.width/7-20};
    height:${constants.height/14-20};
    background-color:${props=>props.focus===true?"#3d3d3d":"#fff"};
    border-color:#dbdbdb;
    border-width:1px;
    margin:${props=>props.margin?props.margin:"10px"};
    justify-content:center;
    align-items:center;

`;

const Item = styled.Text`
    color:${props=>props.focus===true?"#fff":"#717171"};
`;

const ItemLinkWrapper = styled.View`
    width:${constants.width};
    min-height:${constants.height};
    background-color:white;
`; 

const Wrapper=  styled.TouchableOpacity`
    width:${constants.width}; 
    border-bottom-color:#f8f8f8; 
    border-bottom-width:2px;
    /* border-bottom-color:black;  */
    /* border-bottom-width:10px; */
`; 

const ItemLink = styled.TouchableOpacity`
    width:${constants.width-40};
    /* background-color:red; */
    flex-direction:row;
    justify-content:space-between;
    margin:20px;
`;


const ItemText = styled.Text`
    font-weight:bold;
    font-size:14px;
`;
const Link = styled.Text`

`;


const Materials = ({navigation}) => {
    console.log({navigation});
    // 처음 컴포넌트 마운트 될ㄸ ㅐ usemutation으로 ㄱ에 해당하는 놈으로 호출해서 posts에 세팅하기 
    // 그 후에는 검색과 클릭이벤트에 해당하는 내용 매핑해서 호출하기.
    const materials= usematerials();
    const settingMaterials= usesettingMaterials();
    useEffect(()=>{
        settingMaterials("ㄱ","");
    },[]
    );
    
    const initialArr = [
        {
            jaum:"ㄱ",
            state:true
        },
        {
            jaum:"ㄴ",
            state:false
        },
        {
            jaum:"ㄷ",
            state:false
        },
        {
            jaum:"ㄹ",
            state:false
        },
        {
            jaum:"ㅁ",
            state:false
        },
        {
            jaum:"ㅂ",
            state:false
        },
        {
            jaum:"ㅅ",
            state:false
        },
        {
            jaum:"ㅇ",
            state:false
        },
        {
            jaum:"ㅈ",
            state:false
        },
        {
            jaum:"ㅊ",
            state:false
        },
        {
            jaum:"ㅋ",
            state:false
        },
        {
            jaum:"ㅌ",
            state:false
        },
        {
            jaum:"ㅍ",
            state:false
        },
        {
            jaum:"ㅎ",
            state:false
        }
    ]

    const [jaumarr,setJaumarr] =useState(initialArr);
    return (
        <Container>
            <SelectList>
                {
                    jaumarr?.map(
                        (e,i)=>(
                        <ItemWrapper 
                            onPress={
                                ()=>{
                                    setJaumarr(prev=>prev.map((e,ci)=>ci===i?{
                                        jaum:e.jaum,state:true
                                    }:{
                                        jaum:e.jaum,state:false
                                    }))
                                    settingMaterials(e.jaum,""); 
                                }
                            } 
                            focus={e.state}
                        
                        >
                            <Item focus={e.state}>{e.jaum}</Item>
                        </ItemWrapper>
                    )
                    )
                }
            </SelectList>
            <ScrollView >
                <ItemLinkWrapper>
                    {materials?.map(e=>(
                        <Wrapper key={e.id} onPress={()=>{
                            console.log(111);
                            navigation.navigate("MaterialDetail",{
                            material:e
                        })}}>
                        <ItemLink >
                            <ItemText>{e.name}</ItemText>
                            <Link>이동</Link>
                        </ItemLink>
                        </Wrapper>
                    ))}
                </ItemLinkWrapper>
            </ScrollView>
            
        </Container>
        );

}
export default withNavigation(Materials);