import React from 'react';
import { View } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import styled from "styled-components"; 
import constants from '../../constants';

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
    background-color:${props=>props.focus?"#3d3d3d":"#fff"};
    border-color:#dbdbdb;
    border-width:1px;
    margin:${props=>props.margin?props.margin:"10px"};
    justify-content:center;
    align-items:center;

`;

const Item = styled.Text`
    color:${props=>props.focus?"#fff":"#717171"};
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

const ItemLink = styled.View`
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


const Materials = () => (
    <Container>
        <SelectList>
            <ItemWrapper focus>
                <Item focus>ㄱ</Item>
            </ItemWrapper>
            
            <ItemWrapper>
                <Item>ㄴ</Item>

            </ItemWrapper>
            
            <ItemWrapper>
                <Item>ㄷ</Item>
            </ItemWrapper>
            
            <ItemWrapper>
                <Item>ㄹ</Item>
            </ItemWrapper>
            
            <ItemWrapper>
                <Item>ㅁ</Item>
            </ItemWrapper>
            
            <ItemWrapper>
                <Item>ㅂ</Item>
            </ItemWrapper>
            
            <ItemWrapper>
                <Item>ㅅ</Item>
            </ItemWrapper>
            
            <ItemWrapper>
                <Item>ㅇ</Item>
            </ItemWrapper>
            
            <ItemWrapper>
                <Item>ㅈ</Item>
            </ItemWrapper>
            
            <ItemWrapper>
                <Item>ㅊ</Item>
            </ItemWrapper>
            
            <ItemWrapper>
                <Item>ㅋ</Item>
            </ItemWrapper>
            
            <ItemWrapper>
                <Item>ㅌ</Item>
            </ItemWrapper>
            
            <ItemWrapper>
                <Item>ㅍ</Item>
            </ItemWrapper>

            <ItemWrapper>
                <Item>ㅎ</Item>
            </ItemWrapper>

        </SelectList>
        <ScrollView >
            <ItemLinkWrapper>
                <Wrapper>
                    <ItemLink onPress={()=>{console.log(1)}}>
                        <ItemText>카나우바왁스</ItemText>
                        <Link>이동</Link>
                    </ItemLink>
                </Wrapper>
                
                <Wrapper>
                    <ItemLink onPress={()=>{console.log(1)}}>
                        <ItemText>카나우바왁스</ItemText>
                        <Link>이동</Link>
                    </ItemLink>
                </Wrapper>
                
                <Wrapper>
                    <ItemLink onPress={()=>{console.log(1)}}>
                        <ItemText>카나우바왁스</ItemText>
                        <Link>이동</Link>
                    </ItemLink>
                </Wrapper>
                
                <Wrapper>
                    <ItemLink onPress={()=>{console.log(1)}}>
                        <ItemText>카나우바왁스</ItemText>
                        <Link>이동</Link>
                    </ItemLink>
                </Wrapper>
                
                <Wrapper>
                    <ItemLink onPress={()=>{console.log(1)}}>
                        <ItemText>카나우바왁스</ItemText>
                        <Link>이동</Link>
                    </ItemLink>
                </Wrapper>
                
                <Wrapper>
                    <ItemLink onPress={()=>{console.log(1)}}>
                        <ItemText>카나우바왁스</ItemText>
                        <Link>이동</Link>
                    </ItemLink>
                </Wrapper>
                
                <Wrapper>
                    <ItemLink onPress={()=>{console.log(1)}}>
                        <ItemText>카나우바왁스</ItemText>
                        <Link>이동</Link>
                    </ItemLink>
                </Wrapper>
                
                <Wrapper>
                    <ItemLink onPress={()=>{console.log(1)}}>
                        <ItemText>카나우바왁스</ItemText>
                        <Link>이동</Link>
                    </ItemLink>
                </Wrapper>
                
                <Wrapper>
                    <ItemLink onPress={()=>{console.log(1)}}>
                        <ItemText>카나우바왁스</ItemText>
                        <Link>이동</Link>
                    </ItemLink>
                </Wrapper>
            </ItemLinkWrapper>
        </ScrollView>
        
    </Container>
    );

export default Materials;