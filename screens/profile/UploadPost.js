
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import * as Permissions from "expo-permissions";
import * as MediaLibrary from "expo-media-library";
import axios from "axios";
import {gql} from "apollo-boost";
// import { useMutation } from "@apollo/client";
import { Button } from "react-native";
import { FULL_POST_TEST } from "../../fragments";
import Selection from "../../components/Selection";
import InputTemplate from "../../components/InputTemplate";
import { ScrollView, State } from "react-native-gesture-handler";
import { useMutation } from "@apollo/client";
import SelectPhoto from "../SelectPhoto";
import { usePhotoDisplay, usePhotoMaterial } from "../../AuthContext";
import useInput from "../../hooks/useInput";

const Container = styled.View``; 

const Header = styled.View`` ;

const Form = styled.View`
  margin-top:50;
  justify-content:center;
  align-items:center;
`; 

export const UPLOAD_POST=gql`
  mutation upload(
    $name:String!, 
    $brand:String,
    $weight:Int,
    $price:Int,
    $preferences:[String!],
    $description:String!,
    $certification:[String],
    $categories:[String],
    $rawMaterials:[String!],
    $rawMaterialURL:String!,
    $files:[String],
    $offline:[String],
    $online:[String]
  ){
    upload(
      name:$name
      brand:$brand
      weight:$weight
      price:$price
      preferences:$preferences
      description:$description
      certification:$certification
      categories:$categories
      rawMaterials:$rawMaterials
      rawMaterialURL:$rawMaterialURL
      files:$files
      offline:$offline
      online:$online
    ){
      ...PostPartsTEST
    }
  }
  ${FULL_POST_TEST}
`;


const UploadPost = ({navigation}) => {
  // NOTE 베타기능이라서 아직은 조금 두고봐야할 것 같다.
  
  const nameInput = useInput(""); 
  const brandInput = useInput(""); 

  // number 키패드 처리 유의 
  const weightInput = useInput(0); 
  const priceInput = useInput(0);
  
  // TextInput 
  const descriptionInput = useInput(""); 
  const [preferences,setPreferences] = useState(["비건"]); 
  const [certification,setCertification] = useState(["한국 비건인증원"]); 
  const [categories,setCategories] = useState(["식품","간식"]); 
  const [rawMaterials,setRawMaterials] =useState(["양파","마늘"]); 

  
  const photoForDisplay = usePhotoDisplay();
  const photoForMaterial= usePhotoMaterial();

  const askPermission = async()=>{
    try{
      const {status} = await Permissions.askAsync(Permissions.CAMERA_ROLL); 
      if(status==="granted"){
        setHasPermission(true);
      }
    }catch(e){
      console.log(e);
    }
  }

  useEffect(()=>{
    askPermission(); 
  },[])


  // PROJ 구체적인 업로드와 리뷰의 디자인 시안 간략하게 나마 요청할 것. 그리고 패딩이나 마진 이런 부분에서 전체 디바이스대비 비율 척도로 알려달라고 할 것 
  // FIND 사실 필드를 어떻게 채우느냐는 지금 단계에서 디자인 시안이 나와봐야 아는 것이기 때문에 결정하는 것은 조금 무리가 있다. 차라이 파일 업로드 관련된 로직을 짜는 것이 더 이치에 맞는 일이다. 왜 알면서 그랬을까. 

  
  const [offline,setOffline] =useState(["개발중"]); 
  const [online,setOnline] =useState(["개발중"]); 
  
  // 초기에 이 링크에 대한 고민까지 더 했으면 데이터베이스를 더 잘 짰을 텐데 아쉽구만. 
  // 사실 이 항목도 우리가 원하는 방식으로 input을 받으려면 검증코드와 추천코드가 들어가야 한다. 

  const [uploadPostMutation]= useMutation(UPLOAD_POST,{
    variables:{
      name:nameInput.value,
      brand:brandInput.value,
      weight:Number(weightInput.value),
      price:Number(priceInput.value), 
      description:descriptionInput.value,
      preferences,
      certification,
      categories,
      rawMaterials,
      rawMaterialURL:photoForMaterial[0],
      files:photoForDisplay,
      offline,
      online
    }
  })

  const onSubmit= async ()=>{
    await uploadPostMutation(); 
    navigation.navigate("HomeNavigation");
  }

  return (
    <ScrollView>
      <Container>
          <Header>
              
          </Header>
          <Form>
              <InputTemplate 
                {...nameInput}
                placeholder="상품 이름"
                autoCapitalize="words"
                />
              
              <InputTemplate 
                {...brandInput}
                placeholder="브랜드 이름"
                autoCapitalize="words"
              />
            
              <InputTemplate 
                {...weightInput}
                keyboardType="number-pad"
                placeholder="상품 무게"
                autoCapitalize="words"
              />
              <InputTemplate 
                {...priceInput}
                keyboardType="number-pad"
                placeholder="상품 가격"
                autoCapitalize="words"
              />
              <InputTemplate 
                {...descriptionInput}
                placeholder="상품 설명"
                autoCapitalize="words"
              />
            
            <Button 
              stlye={{top:10}} 
              onPress={()=>navigation.navigate("SelectPhoto",{
                limit:1,
                defaultViewCount:20
              })} 
              title={"원재료 사진올리기(1개)"}
            />

            <Button 
              stlye={{top:10}} 
              onPress={()=>navigation.navigate("SelectPhoto",{
                limit:3,
              })} 
              title={"원재료 사진올리기(다중)"}
            />

            
            <Selection preferences={preferences} setPreferences={setPreferences} type={"multi"}/>
            <Selection certification={certification} setCertification={setCertification} type={"multi"}/>
            <Selection rawMaterials={rawMaterials} setRawMaterials={setRawMaterials} type={"multi"}/>
              

              {/* TODO TextInput reuseable component 할 걸. 전체적으로 구조바꾸자*/}
              <Button onPress={()=>onSubmit()} title="제출합니다잉"/>
          </Form>
      </Container>
    </ScrollView>

  )
};
export default UploadPost; 
