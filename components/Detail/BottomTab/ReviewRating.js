import { symbol } from "prop-types";
import React from "react";
import {Text, TouchableOpacity} from "react-native";
import styled from "styled-components";
import { useCurrentPost } from "../../../AuthContext";
import constants from "../../../constants";
import NavIcon from "../../NavIcon";
import Review from "./Review";
import Star from "./Star";
import { withNavigation } from "@react-navigation/compat";

const Container = styled.View`
    background-color:#fff;
    /* padding:0 10px */
`;

const UploadReview = styled.View`
    justify-content:center;
    align-items:center;
    width:${constants.width};
    height:${constants.height/8};
    border-bottom-color:#f8f8f8;
    border-bottom-width:10px;
`;

const UploadButton = styled.Text`
    padding: ${constants.height/40-5}px ${constants.width/2-60}px;
    background-color:#00cf85;
    text-align:center;
    color:white;
    font-size:20px;
    font-weight:bold;
    border-radius:7px;
`;


const ReviewKeyword = styled.View``; 


const KeywordList= styled.View``; 


const TotalReview = styled.View`
    padding: 0px 20px;
    padding-top:20px;
`;
const ReviewTopInfo = styled.View`
    
    flex-direction:row;
    justify-content:space-between;
    align-items:center;

`; 
const Left = styled.View`` ;
const LeftTop  =styled.View`
    flex-direction:row;
    align-items:center;
`; 
const Title = styled.Text`
    font-size:18px;
    margin-right:5px;
    font-weight:bold;
    letter-spacing:-1px;
`; 
const Rating = styled.Text`
    font-size:16px;
    color:#0069ca;
    margin-left:5px;
`; 

const LeftBottom = styled.View`
    margin-top:10px;
    flex-direction:row;

`; 

const Touchable = styled.TouchableOpacity``; 

const FilterName =styled.Text`
    /* color :; */
    margin-right:15px;
    letter-spacing:-1px;
    color:#dbdbdb;
    font-weight:bold;
`; 

const FilterName2 = styled.Text`
    margin-right:15px;
    letter-spacing:-1px;
    color: #717171;
    font-weight:bold;
`;  


const Right = styled.TouchableOpacity``; 

const ReviewList = styled.View`
    /* padding-top:30px; */
    /* height:${constants.height}; */
`; 

const ReviewRating =({
    navigation,
    reviewCount=0,
    rating=0,
    reviews=[]
})=>{
    const post = useCurrentPost();
    return (
        <Container>
            <UploadReview>
                <TouchableOpacity onPress={()=>{navigation.navigate("UploadReview",{
                        type:"리뷰 올리기"
                    })}} >
                    <UploadButton>
                        리뷰 쓰기
                    </UploadButton>
                </TouchableOpacity>
            </UploadReview>
            <TotalReview>
                <ReviewTopInfo>
                    <Left>
                        <LeftTop>
                            <Title>총 리뷰 {reviewCount===null?0:reviewCount}개</Title>
                            <Star rating={rating===null?0:rating} />
                            <Rating>({rating===null?0: (rating).toFixed(1)})</Rating>
                        </LeftTop>
                        <LeftBottom>
                            {/* todo nstate를 통해서 바뀐 값 onPress를 통해 입력받고 리렌더링하기. */}
                            <Touchable><FilterName>최신 순</FilterName></Touchable>
                            <Touchable><FilterName2>별점 높은 순</FilterName2></Touchable>
                            <Touchable><FilterName>별점 낮은 순</FilterName></Touchable>
                        </LeftBottom>
                    </Left>
                    <Right>
                        <NavIcon name={"md-arrow-forward"} color={"#000"} size={24}/>
                    </Right>
                </ReviewTopInfo>
                <ReviewList>
                    {
                        reviews&&reviews[0]&&reviews.map(e=>(
                            <Review key={e.id}
                                {...e}
                            />
                        ))
                    }
                </ReviewList>
            </TotalReview>
        </Container>
    )
}

export default withNavigation(ReviewRating);