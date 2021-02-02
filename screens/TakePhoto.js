import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, StatusBar, Touchable } from 'react-native';
import styled from "styled-components"; 
import { Camera } from 'expo-camera';
import NavIcon from '../components/NavIcon';

const StyledContainer = styled.View`
  flex:1; 
`;

const StyledWrapper = styled.View`
  margin: 50px 39px;
`
const StyledHeader = styled.View`
`
const StyledFlash = styled.View``
const StyledCancel = styled.View``
const StyledBody = styled.View`
  display:flex;
  flex-flow:column nowrap;
`
const StyledQrArea = styled.View``
const StyledDescription = styled.Text`
  font-size:16;
  color:#fff;
  text-align:center;

`
const StyledFooter = styled.View``


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
});

  
const TakePhoto=({navigation})=>{
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.front);
  // const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <StyledContainer >
      <Camera style={{flex:1}} type={type}>
        <StyledWrapper>
          <StyledHeader>
            <StyledFlash>
              <TouchableOpacity onPress={()=>navigation.goBack()}>
                  <NavIcon name={"md-arrow-back"} size={24} color={"#000"}/>
              </TouchableOpacity>
            </StyledFlash>
            <StyledCancel>
              <TouchableOpacity onPress={()=>navigation.goBack()}>
                  <NavIcon name={"md-arrow-back"} size={24} color={"#000"}/>
              </TouchableOpacity>
            </StyledCancel>
          </StyledHeader>
          <StyledBody>
            <StyledQrArea></StyledQrArea>
            <StyledDescription>QR코드 또는 바코드를 촬영하여 성분과 채식주의 유형을 확인해보세요.</StyledDescription>
          </StyledBody>
          <StyledFooter>
            <TouchableOpacity onPress={()=>navigation.goBack()}>
                <NavIcon name={"md-arrow-back"} size={24} color={"#000"}/>
            </TouchableOpacity>
          </StyledFooter>
        </StyledWrapper>
      </Camera>
      <StatusBar  translucent={true} backgroundColor="transparent"   />
    </StyledContainer>
  );
}


export default TakePhoto;



{/* <View style={styles.buttonContainer}>
<TouchableOpacity
  style={styles.button}
  onPress={() => {
    setType(
      type === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back
    );
  }}>
  <Text style={styles.text}> Flip </Text>
</TouchableOpacity>
</View> */}