
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import useInput from "../../components/useInput";
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
const View = styled.View`
  justify-content:center;
  align-items:center;
  flex:1; 
`;

const Text = styled.Text`
  font-weight:600;
`;

const Container = styled.View``; 

const Header = styled.View`` ;

const Form = styled.View`
  justify-content:center;
  align-items:center;
  /* flex:1; */
  height:1000;
`; 


// name:String!, 
// brand:String,
// weight:Int,
// price:Int,
// preferences:[String!],
// description:String!,
// certification:[String],
// categories:[String],
// rawMaterials:[String!],
// rawMaterialURL:String!,
// files:[String],
// offline:[String],
// online:[String]

// export const UPLOAD_POST=gql`
//   mutation upload(
//     $name:String!, 
//     $brand:String,
//     $weight:Int,
//     $price:Int,
//     $preferences:[String!],
//     $description:String!,
//     $certification:[String],
//     $categories:[String],
//     $rawMaterials:[String!],
//     $rawMaterialURL:String!,
//     $files:[String],
//     $offline:[String],
//     $online:[String]
//   ){
//     upload(
//       name:$name
//       brand:$brand
//       weight:$weight
//       price:$price
//       preferences:$preferences
//       description:$description
//       certification:$certification
//       categories:$categories
//       rawMaterials:$rawMaterials
//       rawMaterialURL:$rawMaterialURL
//       files:$files
//       offline:$offline
//       online:$online
//     ){
//       ...PostPartsTEST
//     }
//   }
//   ${FULL_POST_TEST}
// `;

// 와 이거 좀 걸리겠다.. 




const UploadPost = () => {
  // 전체적으로 입력 된 정보에 대한 검증 로직까지는 너무 힘든 부분이 있다. 
  // 일단은 넘어가자. 
  
  const nameInput = useInput("시험용"); 
  const brandInput = useInput("시험용"); 

  // number 키패드 처리 유의 
  const weightInput = useInput(100); 
  const priceInput = useInput(2500);
  
  // TextInput 
  const descriptionInput = useInput("시험용설명이지이거는"); 
  const [preferences,setPreferences] = useState(["비건"]); 
  const [certification,setCertification] = useState(["한국 비건인증원"]); 
  const [categories,setCategories] = useState(["식품","간식"]); 


  const [hasPermission,setHasPermission]= useState(false); 



  const submitPhoto=async (photo)=>{
    // http://77d3358ec946.ngrok.io
    
    const fromData= new FormData();
    
    const name = photo.filename;
    const [, type] = name.split(".");
    fromData.append("file",{
      name,
      type:"image/jpeg",
      uri: photo.uri
    })
    const {
      data
    }= await axios.post(
      "http://9fa3a26cc588.ngrok.io/api/upload",
      fromData,
      {
        headers:{
          "Contents-type":"multipart/form-data"
        }
      }
    )
    console.log(data);
    // console.log("amazon link :" ,)
  }  


  // PROJ #1 사진을 터치했을 때의 페이지도 만들어줘야 함. 
  const getPhotos= async()=>{
    try{
      const {assets}= await MediaLibrary.getAssetsAsync(); 
      console.log(assets.length);
      const [firstPhoto]= assets; 
      console.log(firstPhoto);
      submitPhoto(firstPhoto)
      // TODO 디바이스로부터 사진 받아오기 성공, 이 값을 바탕으로 #1 의 그림을 그리면 되겠다.
      // TODO 인피니트 스크롤링에 대비해야하나? 아니다 가장 최근 사진을 선택할 것이기 때문에.
    }catch(e){
      console.log(e);
    }finally{

    }
  }

  const askPermission = async()=>{
    try{
      const {status} = await Permissions.askAsync(Permissions.CAMERA_ROLL); 
      if(status==="granted"){
        setHasPermission(true);
        getPhotos();
      }
    }catch(e){
      console.log(e);
    }
  }

  useEffect(()=>{
    askPermission(); 
  },[])

  const [rawMaterials,setRawMaterials] =useState(["양파","마늘"]); 

  // PROJ 구체적인 업로드와 리뷰의 디자인 시안 간략하게 나마 요청할 것. 그리고 패딩이나 마진 이런 부분에서 전체 디바이스대비 비율 척도로 알려달라고 할 것 
  // FIND 사실 필드를 어떻게 채우느냐는 지금 단계에서 디자인 시안이 나와봐야 아는 것이기 때문에 결정하는 것은 조금 무리가 있다. 차라이 파일 업로드 관련된 로직을 짜는 것이 더 이치에 맞는 일이다. 왜 알면서 그랬을까. 
  const [rawMaterialURL,setrawMaterialURL] =useState("https://cdn.pixabay.com/photo/2020/08/14/15/22/canal-5488271_960_720.jpg"); 

  
  const [files,setFiles] =useState(["https://cdn.pixabay.com/photo/2020/08/14/15/22/canal-5488271_960_720.jpg"]); 
  const [offline,setOffline] =useState(["이마트"]); 
  const [online,setOnline] =useState(["비거뉘즘"]); 
  
  // 초기에 이 링크에 대한 고민까지 더 했으면 데이터베이스를 더 잘 짰을 텐데 아쉽구만. 
  // 사실 이 항목도 우리가 원하는 방식으로 input을 받으려면 검증코드와 추천코드가 들어가야 한다. 
  

  // const [uploadPostMutation]= useMutation(UPLOAD_POST,{
  //   variables:{
  //     name:nameInput.value,
  //     brand:brandInput.value,
  //     weight:weightInput.value,
  //     price:priceInput.value,
  //     description:descriptionInput.value,
  //     preferences,
  //     certification,
  //     categories,
  //     rawMaterials,
  //     rawMaterialURL,
  //     files,
  //     offline,
  //     online
  //   }
  // })
  // const onSubmit= async ()=>{
  //   const result = await uploadPostMutation(); 
  //   console.log({result});
  //   // 오케이 업로드 확인 ! 이제 포맷을 잡아볼까나까나나나
  // }

  

  return (
    <ScrollView>

    <Container>
    <Header>
      
    </Header>
    <Form>
        {/* <InputTemplate 
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
          placeholder="상품 무게"
          autoCapitalize="words"
        />
        <InputTemplate 
          {...priceInput}
          placeholder="상품 가격"
          autoCapitalize="words"
        />
        <InputTemplate 
          {...descriptionInput}
          placeholder="상품 설명"
          autoCapitalize="words"
        /> */}
        
        <Button stlye={{top:10}} onPress={()=>submitPhoto()} title={"사진 올리기"}/>
        {/* <Selection preferences={preferences} setPreferences={setPreferences} type={"radio"}/>
        <Selection certification={certification} setCertification={setCertification} type={"multi"}/>
        <Selection rawMaterials={rawMaterials} setRawMaterials={setRawMaterials} type={"multi"}/> */}

        {/* 
        NOTE multiple selection part에서의 효과적 재사용 적용 중 
        1. 각 종류에 해당하는 json 파일을 만든다 .
        2. 각 컴포넌트에서 받은 prop에 따라서 해당 파일을 import를 하고 
        3. 각 구조에 맞게 보여주도록 한다. 

        */}

        {/* TODO TextInput reuseable component 할 걸. 전체적으로 구조바꾸자*/}
        {/* <Button onPress={()=>onSubmit()} title="제출합니다잉"/> */}
    </Form>
    </Container>
    </ScrollView>

  )
};
export default UploadPost; 





// 1. 성품정보사진을 벡엔드에 post로 요청하기
// 2. (영훈) 벡엔드에서는 aws에 업로드 함과 동시에, response url을 기다리지 않고 
//  영훈 파이썬 서버에 post data 보내기, [*] post data to python 먼저, 그 후에 aws s3  
// 3. 받아온 데이터를 json 파일로 프론트에 보내고 해당 내용으로 useState 설정하기
// 4. 사용자에게 self correct 요청하기 
// 4. 제품 사진 벡엔드에 post로 요청하기
// 5. aws s3 uplaod
// 6. 최종 처리하기. 


