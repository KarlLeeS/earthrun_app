import React from "react"; 
import { Image, View,StyleSheet, Text } from "react-native";
import styled from "styled-components"; 
import constants from "../../../constants";
import Certification from "./Certification";
import Rawmaterial from "./Rawmaterial";

const Container = styled.View`
    background-color:white;
    flex-direction:column;
    padding-top:15;
`;

const DescriptionWrap = styled.View`
    padding : 0px 15px;
`;

const Title = styled.Text`
    font-size:18;
    font-weight:bold;
    margin : 10px 0px;
`;
const DescriptionSubText = styled.Text``;

const CertificationWrap = styled.View`
    padding : 0px 15px;
`;

const CertificationImages = styled.View`
    flex-direction:row;
`;

const RawMaterialWrap= styled.View`
    margin-top:20px;
    padding : 0px 15px;
    display:flex;

`; 

const RawMaterialImageWrap = styled.View`
    padding:15px;

`; 

const FoodtypeWrapper= styled.View`
    display:flex;
    flex-direction:row;
    align-items:center;
    /* width:${constants.width/2}; */
    padding:20px 0;
    margin-left:0px;
    border-top-color: #f0f0f0;
    border-top-width:1px;
`;


const MeterialList= styled.View`
    display:flex;
    flex-direction:row;
    width:${constants.width/1.17-constants.width/7};
    /* background-color:black; */
    flex-wrap:wrap;
    /* margin-top:10px; */
`;


const Meterial= styled.View`


/* 

    padding:10px;
    border-color:black;
    border-width:1px;
    border-radius:10px;
    margin-right:7px;
    margin-top:15px;
    background-color:red;
    elevation:5; 
    shadowOpacity: 0.25;
    shadowRadius: 3.84;
    shadowColor: "#000";
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},

elevation: 5,
    box-shadow: 0px 1px 2px #A0A0A0; */
`;

const MeterialText = styled.Text`
    font-weight:bold;
`;


const FoodType= styled.View`
    align-self:flex-start;
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin-right:25px;
    margin-left:15px;
    width:${constants.width/7};
  /* background-color:red; */
`
const FoodTypeText= styled.Text`
  font-size:16px;
  font-weight:bold;
  width:${constants.width/5};
  text-align:center;
  /* margin */
`



const ProductInfo=({
    description,
    certification,
    rawMaterials,
    rawMaterialURL
})=>{
    console.log("rendering detail/subtab/ProductInfo");
    let leaf=[],milk=[],egg=[],fish=[],chicken=[], chemical=[];
    const resfunc=()=>{

        for(let i=0; i <rawMaterials.length;i++){
            if(rawMaterials[i].isChemical) chemical.push(rawMaterials[i]); 
            for(let j=0; j<rawMaterials[i].foodtypes.length;j++){
                const t= rawMaterials[i].foodtypes[j].name; 
                switch (t) {
                    case "채식":
                        // console.log(`이것은 ${t} 입니다. 그래서 leaf에 넣겠습니다`)

                        leaf.push(rawMaterials[i])
                        break;
                    case "유제품":
                        // console.log(`이것은 ${t} 입니다. 그래서 milk에 넣겠습니다`)
                        milk.push(rawMaterials[i])
                        break;
                    case "달걀":
                        // console.log(`이것은 ${t} 입니다. 그래서 egg에 넣겠습니다`)
                        egg.push(rawMaterials[i])
                        break;
                    case "어류":
                        // console.log(`이것은 ${t} 입니다. 그래서 fish에 넣겠습니다`)
                        fish.push(rawMaterials[i])
                        break;
                    case "조류":
                        // console.log(`이것은 ${t} 입니다. 그래서 chicken에 넣겠습니다`)
                        chicken.push(rawMaterials[i])
                        break;
                }
            }
            
        }
    }
    resfunc();
    return(
        <Container>
            <DescriptionWrap>
                <Title>상품 설명</Title>
                <DescriptionSubText>{description}</DescriptionSubText>
            </DescriptionWrap>
            <CertificationWrap>
                <Title>인증 마크</Title>
                <CertificationImages>
                    {certification.map(e=>(
                        <Certification key={e.id} name={e.name}/>
                    ))}
                </CertificationImages>
            </CertificationWrap>
            <RawMaterialWrap>
                <Title>유의할 원재료</Title>
                {
                    leaf.length!==0 ?
                        (
                            <FoodtypeWrapper>
                                <FoodType>
                                    <Image resizeMode="contain"
                                    style={{
                                        width:constants.width/8,
                                        height:constants.height/16,
                                    }}
                                    source={require('../../../assets/icon_vegetype_color_leaf.png')}
                                    />
                                    <View style={{justifyContent:"flex-end",alignItems:"center"}}>
                                    <FoodTypeText>
                                        채식
                                    </FoodTypeText>
                                    </View>
                                </FoodType>
                                <MeterialList>
                                    {
                                        leaf.map(e=>(
                                            <View style={styles.cardShadow}>
                                                <View style={styles.cardContainer}>
                                                    <MeterialText>{e.name}</MeterialText>
                                                </View>
                                            </View>
                                        ))
                                    }
                                </MeterialList>
                            </FoodtypeWrapper>
                        )
                    :<></>
                }
                
                
                {
                    milk.length!==0 ?
                        (
                            <FoodtypeWrapper>
                                <FoodType>
                                    <Image resizeMode="contain"
                                    style={{
                                        width:constants.width/8,
                                        height:constants.height/16,
                                    }}
                                    source={require('../../../assets/icon_vegetype_color_milk.png')}
                                    />
                                    <View style={{justifyContent:"flex-end",alignItems:"center"}}>
                                    <FoodTypeText>
                                        유제품
                                    </FoodTypeText>
                                    </View>
                                </FoodType>
                                <MeterialList>
                                    {
                                        milk.map(e=>(
                                            <View style={styles.cardShadow}>
                                                <View style={styles.cardContainer}>
                                                    <MeterialText>{e.name}</MeterialText>
                                                </View>
                                            </View>
                                        ))
                                    }
                                </MeterialList>
                            </FoodtypeWrapper>
                        )
                    :<></>
                }
                
                
                {
                    egg.length!==0 ?
                        (
                            <FoodtypeWrapper>
                                <FoodType>
                                    <Image resizeMode="contain"
                                    style={{
                                        width:constants.width/8,
                                        height:constants.height/16,
                                    }}
                                    source={require('../../../assets/icon_vegetype_color_egg.png')}
                                    />
                                    <View style={{justifyContent:"flex-end",alignItems:"center"}}>
                                    <FoodTypeText>
                                        달걀
                                    </FoodTypeText>
                                    </View>
                                </FoodType>
                                <MeterialList>
                                    {
                                        egg.map(e=>(
                                            <View style={styles.cardShadow}>
                                                <View style={styles.cardContainer}>
                                                    <MeterialText>{e.name}</MeterialText>
                                                </View>
                                            </View>
                                        ))
                                    }
                                </MeterialList>
                            </FoodtypeWrapper>
                        )
                    :<></>
                }
                
                
                {
                    fish.length!==0 ?
                        (
                            <FoodtypeWrapper>
                                <FoodType>
                                    <Image resizeMode="contain"
                                    style={{
                                        width:constants.width/8,
                                        height:constants.height/16,
                                    }}
                                    source={require('../../../assets/icon_vegetype_color_fish.png')}
                                    />
                                    <View style={{justifyContent:"flex-end",alignItems:"center"}}>
                                    <FoodTypeText>
                                        어류
                                    </FoodTypeText>
                                    </View>
                                </FoodType>
                                <MeterialList>
                                    {
                                        fish.map(e=>(
                                            <View style={styles.cardShadow}>
                                                <View style={styles.cardContainer}>
                                                    <MeterialText>{e.name}</MeterialText>
                                                </View>
                                            </View>
                                        ))
                                    }
                                </MeterialList>
                            </FoodtypeWrapper>
                        )
                    :<></>
                }
                
                {
                    chicken.length!==0 ?
                        (
                            <FoodtypeWrapper>
                                <FoodType>
                                    <Image resizeMode="contain"
                                    style={{
                                        width:constants.width/8,
                                        height:constants.height/16,
                                    }}
                                    source={require('../../../assets/icon_vegetype_color_chicken.png')}
                                    />
                                    <View style={{justifyContent:"flex-end",alignItems:"center"}}>
                                    <FoodTypeText>
                                        조류
                                    </FoodTypeText>
                                    </View>
                                </FoodType>
                                <MeterialList>
                                    {
                                        chicken.map(e=>(
                                            <View style={styles.cardShadow}>
                                            <View style={styles.cardContainer}>
                                                <MeterialText>{e.name}</MeterialText>
                                            </View>
                                        </View>
                                        ))
                                    }
                                </MeterialList>
                            </FoodtypeWrapper>
                        )
                    :<></>
                }
                
                {
                    chemical.length!==0 ?
                        (
                            <FoodtypeWrapper>
                                <FoodType>
                                    <Image resizeMode="contain"
                                    style={{
                                        width:constants.width/8,
                                        height:constants.height/16,
                                    }}
                                    source={require('../../../assets/icon_chemical.png')}
                                    />
                                    <View style={{justifyContent:"flex-end",alignItems:"center"}}>
                                    <FoodTypeText>
                                        화학첨가물
                                    </FoodTypeText>
                                    </View>
                                </FoodType>
                                <MeterialList>
                                    {
                                        chemical.map(e=>(
                                            <View style={styles.cardShadow}>
                                                <View style={styles.cardContainer}>
                                                    <MeterialText>{e.name}</MeterialText>
                                                </View>
                                            </View>
                                        ))
                                    }
                                </MeterialList>
                            </FoodtypeWrapper>
                        )
                    :<></>
                }
            </RawMaterialWrap>
                  
            


            <RawMaterialImageWrap>
                
                <Title>성분표</Title>
                <Image 
                style={{
                    // paddin:10,
                    width: constants.width/1-30,
                    height: constants.height/2,
                    borderRadius: 5
                }}
                source={{uri:rawMaterialURL}}/>
            </RawMaterialImageWrap>
        </Container>
    )
}

const styles = StyleSheet.create({
    cardShadow: {
        marginRight:10,
        borderRadius: 10,
        // paddingLeft:10,
        // paddingRight:10,
        maxWidth:120,
        backgroundColor: 'transparent',
        marginBottom:10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        
        elevation: 5,
   },
   cardContainer: {
        maxWidth:120,
        paddingLeft:15,
        paddingRight:15,
        paddingTop:10,
        paddingBottom:10,
        backgroundColor: '#fff',
        borderRadius: 10,
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
   },
  });

export default ProductInfo;