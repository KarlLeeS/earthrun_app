import React, { useEffect, useRef, useState } from "react";
import { Button,Image,ImageBackground,ScrollView,TouchableOpacity,TouchableWithoutFeedback } from "react-native";
import styled from "styled-components";
import * as Permissions from "expo-permissions";
import * as MediaLibrary from "expo-media-library";
import constants from "../constants";
import {Dimensions} from "react-native"; 
import Loader from "../components/Loader"
import { useSetPhotoDisplay, useSetPhotoMaterial } from "../AuthContext";
import Axios from "axios";

const Container = styled.View`

`; 
const Grid = styled.View`
    flex-direction:row;
    flex-wrap:wrap;
`; 

const Number = styled.Text`
    display:${props=>props.pushs?"flex":"none"};
    color:#000;
    font-size:50px;
    font-weight:bold;
`; 

const Touchable = styled.TouchableOpacity``; 
const SelectPhoto=({
    navigation
    ,route:{
        params:{
            limit=1,
            defaultViewCount=10,
    }}
})=>{
    const [limits,setLimits] = useState(0);
    const [photos,setPhotos]=useState();
    const [uriS,setUriS] =useState([]);
    const [filenameS,setFilenameS] =useState([]);

    const [pushs,setPushs] = useState([]);
    const [numbers,setNumbers] = useState([]);
    const [prev,setPrev]=useState([]);
    const [loading,setLoading] = useState(false);

    const SetPhotoDisplay= useSetPhotoDisplay();
    const SetPhotoMaterial= useSetPhotoMaterial();

    const getphotos= async()=>{
        try{
            const {assets}= await MediaLibrary.getAssetsAsync({
                first:defaultViewCount,
                sortBy:"modificationTime"
            }); 
            setPushs((new Array(defaultViewCount)).fill(false))
            setNumbers((new Array(defaultViewCount)).fill(0))
            setPhotos(assets);
            // TODO 디바이스로부터 사진 받아오기 성공, 이 값을 바탕으로 #1 의 그림을 그리면 되겠다.
            // TODO 인피니트 스크롤링에 대비해야하나? 아니다 가장 최근 사진을 선택할 것이기 때문에.
        }catch(e){
            console.log(e);
        }finally{
    
        }
    }

    const onChange =(e)=>{
        if(loading) return;
        console.log(e.nativeEvent.contentOffset.y+(constants.height));
        console.log(e.nativeEvent.contentSize);
        if(e.nativeEvent.contentOffset.y+(constants.height)>=e.nativeEvent.contentSize.height){
            // setLoading(true);
            // console.log("왔네");
            // setTimeout(() => {
            //     setLoading(false);
            // }, 3000);
        }
    // const currentHeight= Dimensions.get("window").height;
    // const fullHeight= Dimensions.get("screen").height;
    // console.log({currentHeight})
    // console.log({fullHeight})
    }

    useEffect(()=>{
        getphotos();
    },[])



    const toggle=(filename,uri,index)=>{
        if(limits <= limit){
            if(pushs[index]){
                console.log("before",prev,index);
                if(prev[(prev.length)-1]!==(index)){
                    return;
                }
                setLimits(e=>e-1); 
                setPushs((e)=>{
                    let result = [...e]; 
                    result[index]=!result[index];
                    return result;
                }) 

                setPrev(e=>e.slice(0,-1));
                // setPrev(e=>e.filter((_,i)=>i!==l-1));
                
                setUriS(e=>e.filter(e=>(e!==uri))); 
                setFilenameS(e=>e.filter(e=>(e!==filename))); 
                console.log("after ",prev,index);

            }else{ 
                if(limits === limit) return;
                setNumbers(e=>{
                    let result = [...e]; 
                    result[index]=limits+1;
                    return result;
                })  
                setLimits(e=>e+1); 
                setPrev(e=>([...e,index]))

                setPushs((e)=>{
                    let result = [...e]; 
                    result[index]=!result[index];
                    return result;
                }) 
                setUriS(e=>[...e,uri]); 
                setFilenameS(e=>[...e,filename]); 
                // console.log({uriS});
            }
        }else{
            console.log("can't add in excess of limit");
        }
    }

    const submit =()=>{
        // console.log("제출하자"); 
        // console.log(filenameS, uriS);
        filenameS.forEach(e=>{
            
        })
        const result = [] ;
        filenameS.forEach((e,i)=>{
            result.push({
                "filename":filenameS[i],
                "uri": uriS[i]
            });
        })
        // console.log(result);
        if(limit===3){
            const formDataForDisplay= new FormData();
            result.forEach(photo=>{
                formDataForDisplay.append("file",{
                    name:photo.filename,
                    type:"image/jpeg",
                    uri:photo.uri
                })
            });

            const res = Axios.post(
                "https://earthrunbackend.herokuapp.com/api/upload",
                formDataForDisplay,
                {
                  headers:{
                    "Contents-type":"multipart/form-data"
                  }
                }
              );
              res.then(data=>{
                  const {
                      data:{result} 
                  }=data; 
                console.log("왓고 이거 넣었다",result);
                SetPhotoDisplay([...result]);
              })
        }else{
            const fromDataForMaterial= new FormData();
            fromDataForMaterial.append("file",{
                name:result[0].filename,
                type:"image/jpeg",
                uri:result[0].uri
            })

            console.log(fromDataForMaterial);

            const res = Axios.post(
                "https://earthrunbackend.herokuapp.com/api/upload",
                fromDataForMaterial,
                {
                  headers:{
                    "Contents-type":"multipart/form-data"
                  }
                }
            );
            res.then(data=>{
                const {
                    data:{result} 
                }=data; 
                SetPhotoMaterial([...result]);
            });
        }
        navigation.goBack();
    }
    return loading
        ?(
            <Loader />
            )
        :
            (
                <Container>
                    <Button title={"제출"}  onPress={()=>submit()} />
                    <ScrollView
                    >
                        <Grid>
                            {
                                pushs&&photos?.map((e,i)=>(
                                    <Touchable key={e.filename+i} onPress={()=>toggle(e.filename,e.uri,i)}>
                                        
                                        <ImageBackground
                                            source={{ uri: e.uri }}
                                            style={{
                                                opacity:pushs[i]?0.6:1,
                                                width:constants.width/2,
                                                height:constants.height/4,
                                                justifyContent:"center",
                                                alignItems:"center"
                                            }}
                                            >
                                            <Number pushs={pushs[i]}>
                                                {pushs[i]?`${numbers[i]}`:``}
                                            </Number>
                                        </ImageBackground>
                                    </Touchable>
                                ))
                            }
                        </Grid>
                    </ScrollView>
                </Container>
            )
}

export default SelectPhoto;
