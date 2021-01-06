import React, { useState } from "react"; 
import { Image, Text, TouchableOpacity, View} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import styled from "styled-components";
import CertificationItem from "../components/Certifications/CertificationItem";
import NavIcon from "../components/NavIcon";
import constants from "../constants";


const Container = styled.View`
    background-color:white;
    border-radius:5;
    min-height: ${constants.height};
    width:${constants.width};
`; 

const Header = styled.View`
    position:relative;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    padding:20px;
    border-bottom-color: #dedede;
    border-bottom-width:1;
`; 

const HeaderBack = styled(TouchableOpacity)`
    position:absolute;
    left:20px;
`;


const CenterText =styled.Text`
    font-size:18px;
` ;

const CertifiLists = styled(ScrollView)`
    display:flex; 
    flex-direction:column;
    margin:20px 20px 0px 20px;
    /* background-color:red; */
    width:${constants.width-40};
    height:${constants.height/2};
`;

const CertifiItem = styled.View`
`



const certifiPack = [
    {
        type:"한국 비건 인증원",
        description:"한국 비건 인증원에서 실시하는 \‘비건 인증\'은 동물 유래 원재료를 사용거나 이용하지 않고, 교차오염되지 않도록 관리하며 , 제품에 동물실험을 하지 않는 기준으로 부여하는 인증입니다. \
        \n\n1.동물 유래 원재료를 이용하지 않아야 합니다.\
        \n\n2.동물을 이용한 실험을 해서는 안됩니다.\
        \n\n3.제품 생산 공정 전, 중, 후, 교차오염이 없어야 합니다.",
        path:"certi1.png"
    },
    {
        type:"영국 비건 협회",
        description:"\
        영국 비건 협회(The Vegan Society)는 세계에서 가장 오래된 독창적인 VEGAN조직으로써 70여년이 지난 지금까지도 전세계 그 어떤 비건 단체보다 활발한 활동으로 비건 개념과 필요성을 널리 확산시키고 있습니다.\n\n\
        1. 동물성 원료 & 동물 유래 성분\
        \n원료 선택부터 제품의 제조 및/또는 전체 생산 단계에 걸쳐 그 어떠한 동물성 원료 및 생산품, 부산품, 부산물 혹은 파생물의 사용을 포함하거나 관련되어서는 안됩니다.\
        \n\n2. 동물 실험\
        \n제품의 제조 및/또는 개발, 그리고 제품 성분에 대해 회사의 주도로 혹은 회사를 대신하여 혹은 회사가 통제할 수 있는 관계자에 의해 어떠한 종류의 동물에게도 실험을 하거나 실험을 했던 적이 없어야 합니다.\
        \n\n3.Genetically Modified Organisms (GMO) 유전자 변형 생물\
        \n유전자 변형 생물체(GMO)의 개발 및 생산 과정에서동물의 유전자 또는 동물 유래 성분과 절대 관련되지 않아야 합니다. 단, 식물성 성분은 해당되지 않습니다.\
        \n\n4.Cross Contamintion with Non-Vegan 논비건과의 교차 오염\
        \n동물성 원료 및 동물 유래 성분과의 잠재적 교차 오염을 최대한 방지해야 합니다.",
        path:"certi2.png"
    },
    {
        type:"Non-GMO Project",
        description:"Non-GMO Project는 Non-GMO 식품 공급을 구축하고 보호하는 데 전념하는 미션 중심의 비영리 조직입니다. Non-GMO 식품과 제품에 대해 북미에서 가장 신뢰받는 제3자 검증을 제공합니다.",
        path:"certi3.png"
    },
    {
        type:"리핑버니",
        description:"Leaping bunny는 완제품, 원료, 합성원료에 대한 동물 실험을 배제한 제품을 인증하는 마크입니다.",
        path:"certi4.png"
    },
    {
        type:"Vegan Action",
        description:"세계적으로 유통되고 인정받는 Certified Vegan 로고는 동물성 제품이나 부산물을 포함하지 않고 동물 실험을 하지 않은 제품에 대한 (kosher 마크와 유사한 성격) 등록 상표입니다.",
        path:"certi5.png"
    },
    {
        type:"우수재활용",
        description:"우수재활용(Good Recycled: GR)제품 인증이란 국내에서 개발된 재활용제품에 대해 해당 품질인증심사기준으로 평가하여 산업통상자원부장관이 우수하다고 인정하는 것을 말합니다.",
        path:"certi6.png"
    },
    {
        type:"환경표지",
        description:"환경표지제도는 같은 용도의 다른 제품에 비해 ‘제품의 환경성’을 개선한 경우 그 제품에 로고(환경표지)를 표시함으로써 소비자(구매자)에게 환경성 개선 정보를 제공하고, 소비자의 환경표지 제품 선호에 부응해 기업이 친환경제품을 개발·생산하도록 유도해 자발적 환경개선을 유도하는 자발적 인증제도입니다.\n\n환경표지제도는 동일용도의 다른 제품에 비하여 환경오염을 적게 일으키거나 자원을 절약할 수 있는 제품에 대하여 인증을 부여하고 있습니다.",
        path:"certi7.png"
    },
    {
        type:"저탄소",
        description:"\
        저탄소제품은 환경성적표지 인증을 받은 제품 중 ‘저탄소제품 기준’ 고시에 적합한 제품을 말합니다.\
        \n저탄소제품 인증은 대상제품의 환경성적표지 환경성 정보 중 탄소발자국 값이 최대허용탄소배출량 이하이거나 최소탄소감축률 이상이여야 합니다.\
        \n\n\
        - 최대허용탄소배출량: 동종제품 중 저탄소제품으로 인정받을 수 있는 탄소배출량의 최댓값\
        - 최소탄소감축률: 저탄소제품으로 인정받기 위해 감축해야 할 탄소배출량의 최소 비율",
        path:"certi8.png"
    }
]


const CertificationInfo = ({navigation})=>(
    <Container>
        <Header>    
            <HeaderBack onPress={()=>navigation.goBack()}>
                <NavIcon name={"md-arrow-back"} color={"#000"} size={24} />
            </HeaderBack>
            <CenterText>인증마크</CenterText>
        </Header>
        <CertifiLists 
            showsHorizontalScrollIndicator={false}
        >
        {
            certifiPack.map((e,i)=>
            (
                <CertifiItem>
                    <CertificationItem
                        type={e.type}
                        description={e.description}                        
                        index={i}
                    />
                </CertifiItem>
            ))
        }
        </CertifiLists>
    </Container>
); 

export default CertificationInfo; 


