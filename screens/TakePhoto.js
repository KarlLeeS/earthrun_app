import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, StatusBar, Touchable } from 'react-native';
import styled from "styled-components"; 
import { Camera } from 'expo-camera';
import NavIcon from '../components/NavIcon';
import constants from "../constants";
import Camerafocus from '../components/Camerafocus';
import { RotationGestureHandler } from 'react-native-gesture-handler';
import Animated, { round } from 'react-native-reanimated';
import PhotoResult from '../components/PhotoResult';
import Loader from '../components/Loader';

const StyledContainer = styled.View`
  flex:1; 
  width:${constants.width};
  height:${constants.height};
`;

const StyledWrapper = styled.View`
  margin: 50px 39px;
`
const StyledHeader = styled.View`
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  height:${constants.height/4};
`
const StyledFlash = styled.View``
const StyledCancel = styled.View``

const StyledBody = styled.View`
/* background-color:red; */
  display:flex;
  flex-flow:column nowrap;
`

const StyledQrArea = styled.View`
  position:relative;
  height:${constants.height/3};
  margin-bottom:30;
`
const StyledDescription = styled.Text`
  font-size:16;
  color:#fff;
  text-align:center;

`
const StyledFooter = styled.View`
  height:${constants.height/7};
  display:flex;
  flex-direction:column;
  justify-content:flex-end;

`


const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    camera: {
      flex: 1,
    },
    buttonContainer: {
      flex: 1,
      backgroundColor: 'transparent',
      flexDirection: 'row',
      margin: 20,
    },
    button: {
      flex: 0.1,
      alignSelf: 'flex-end',
      alignItems: 'center',
    },
    text: {
      fontSize: 18,
      color: 'white',
    },
    qrcorner0:{
      width:20,
      height:20,
      position:"absolute",
      top:0,
      left:0
    },
    qrcorner1:{
      width:20,
      height:20,
      position:"absolute",
      top:0,
      right:0,
      transform: [
        {"rotateZ": "90deg"}
      ]
    },
    qrcorner2:{
      width:20,
      height:20,
      position:"absolute",
      left:0,
      bottom:0,
      transform: [
        {"rotateZ": "270deg"}
      ]
    },
    qrcorner3:{
      width:20,
      height:20,
      position:"absolute",
      bottom:0,
      right:0,
      transform: [
        {"rotateZ": "180deg"}
      ]
    },

});

  
const TakePhoto=({navigation})=>{
  const [hasPermission, setHasPermission] = useState(null);
  // const [type, setType] = useState(Camera.Constants.Type.front);
  const [flash,setFlash] = useState(Camera.Constants.Type.off);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [click,setClick] = useState(true); 
  const [loading,setLoading] = useState(false); 
  const [initLoading,setInitLoading] = useState(true); 
  
  // const [click,setClick] = useState(false); 
  // const [loading,setLoading] = useState(true); 
  

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
    (
      ()=>{
        setTimeout(() => {
          setInitLoading(false);
        }, 1000)  
      }
    )();
  }, []);

  const fake= ()=>{

    return new Promise((res,reject)=>{
      setTimeout(() => {
        res(); 
      }, 1000);
    })
  };

  const apiCall =async ()=>{
    console.log('hello')
    setLoading(!loading);
    setClick(!click);

    await fake();
    setClick(!click);
    
    setLoading(prev=>!prev);
  }


  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <StyledContainer >
      {
        initLoading?<View style={{backgroundColor:"white",flex:1,justifyContent:'center',alignItems:'center'}} >
          <Loader size="large" color="black"/>
        </View>:
      <Camera style={{flex:1}} type={type} flashMode={flash} >
        <StyledWrapper>
          <StyledHeader>
            <TouchableOpacity style={{width:110,height:110,position:"relative",display:"flex",alignItems:'center',justifyContent:'center',top:-30,left:-50}} onPress={()=>setFlash(prev=>prev===Camera.Constants.FlashMode.off?Camera.Constants.FlashMode.torch:Camera.Constants.FlashMode.off)}>
              <NavIcon name={"md-flash"} size={50} color={loading?"transparent":click?"#fff":"transparent"}/>
            </TouchableOpacity>
            <View>
              <TouchableOpacity onPress={()=>navigation.goBack()}>
                  <NavIcon name={"md-close"} size={36} color={"#fff"}/>
              </TouchableOpacity>
            </View>
          </StyledHeader>
          <StyledBody >
            {
              loading
              ?
              <Loader size="large" color="#fff" />
              :(
                  click?(
                    <TouchableOpacity onPress={apiCall}>
                      <StyledQrArea >
                      <View style={styles.qrcorner0}>
                        <Camerafocus />
                      </View>
                      <Animated.View style={styles.qrcorner1}>
                        <Camerafocus />
                      </Animated.View>
                      <Animated.View style={styles.qrcorner2}>
                        <Camerafocus />
                      </Animated.View>
                      <Animated.View style={styles.qrcorner3}>
                        <Camerafocus />
                      </Animated.View>
                    </StyledQrArea>
                    <StyledDescription>QR코드 또는 바코드를 촬영하여 성분과 채식주의 유형을 확인해보세요.</StyledDescription>
                    </TouchableOpacity>
                  )
                  :
                  <TouchableOpacity onPress={apiCall}>
                    <PhotoResult />
                  </TouchableOpacity>
              )
            }
          </StyledBody>
          {
            loading===false&&click?(
              <StyledFooter>
                <TouchableOpacity onPress={() => {
                  setType(
                    type === Camera.Constants.Type.back
                      ? Camera.Constants.Type.front
                      : Camera.Constants.Type.back
                  );
                }}>
                    <NavIcon name={"md-refresh"} size={36} color={"#fff"}/>
                </TouchableOpacity>
              </StyledFooter>
            ):(<></>)
          }
        </StyledWrapper>
      </Camera>
      }
      <StatusBar  translucent={true} backgroundColor="transparent"   />
    </StyledContainer>
  );
}


export default TakePhoto;

