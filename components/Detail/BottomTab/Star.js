import React from "react";
import { Text } from "react-native";
import styled from "styled-components" ;
import NavIcon from "../../NavIcon";


const StarS =styled.View`

    flex-direction:row-reverse;
    justify-content:flex-end;
    align-items:center;
`;

const renderStar=(rating,size=24)=>{
    if(rating>4.5){
        return(
            <StarS>
                <NavIcon name={"md-star"} color={"#0069ca"} size={size}/>
                <NavIcon name={"md-star"} color={"#0069ca"} size={size}/>
                <NavIcon name={"md-star"} color={"#0069ca"} size={size}/>
                <NavIcon name={"md-star"} color={"#0069ca"} size={size}/>
                <NavIcon name={"md-star"} color={"#0069ca"} size={size}/>
            </StarS>
        )
    }else if(rating>4.0){
        return(
            <StarS>
                <NavIcon name={"md-star-half"} color={"#0069ca"} size={size}/>
                <NavIcon name={"md-star"} color={"#0069ca"} size={size}/>
                <NavIcon name={"md-star"} color={"#0069ca"} size={size}/>
                <NavIcon name={"md-star"} color={"#0069ca"} size={size}/>
                <NavIcon name={"md-star"} color={"#0069ca"} size={size}/>
            </StarS>
        )
    }else if(rating>3.5){
        return(
            <StarS>
                <NavIcon name={"md-star-outline"} color={"#0069ca"} size={size}/>
                <NavIcon name={"md-star"} color={"#0069ca"} size={size}/>
                <NavIcon name={"md-star"} color={"#0069ca"} size={size}/>
                <NavIcon name={"md-star"} color={"#0069ca"} size={size}/>
                <NavIcon name={"md-star"} color={"#0069ca"} size={size}/>
            </StarS>
        )
    }else if(rating>3.0){
        return(
            <StarS>
                <NavIcon name={"md-star-outline"} color={"#0069ca"} size={size}/>
                <NavIcon name={"md-star-half"} color={"#0069ca"} size={size}/>
                <NavIcon name={"md-star"} color={"#0069ca"} size={size}/>
                <NavIcon name={"md-star"} color={"#0069ca"} size={size}/>
                <NavIcon name={"md-star"} color={"#0069ca"} size={size}/>
            </StarS>
        )
    }else if(rating>2.5){
        return(
            <StarS>
                <NavIcon name={"md-star-outline"} color={"#0069ca"} size={size}/>
                <NavIcon name={"md-star-outline"} color={"#0069ca"} size={size}/>
                <NavIcon name={"md-star"} color={"#0069ca"} size={size}/>
                <NavIcon name={"md-star"} color={"#0069ca"} size={size}/>
                <NavIcon name={"md-star"} color={"#0069ca"} size={size}/>
            </StarS>
        )
    }else if(rating>2.0){
        return(
            <StarS>
                <NavIcon name={"md-star-outline"} color={"#0069ca"} size={size}/>
                <NavIcon name={"md-star-outline"} color={"#0069ca"} size={size}/>
                <NavIcon name={"md-star-half"} color={"#0069ca"} size={size}/>
                <NavIcon name={"md-star"} color={"#0069ca"} size={size}/>
                <NavIcon name={"md-star"} color={"#0069ca"} size={size}/>
            </StarS>
        )
    }else if(rating>1.5){
        return(
            <StarS>
                <NavIcon name={"md-star-outline"} color={"#0069ca"} size={size}/>
                <NavIcon name={"md-star-outline"} color={"#0069ca"} size={size}/>
                <NavIcon name={"md-star-outline"} color={"#0069ca"} size={size}/>
                <NavIcon name={"md-star"} color={"#0069ca"} size={size}/>
                <NavIcon name={"md-star"} color={"#0069ca"} size={size}/>
            </StarS>
        )
    }else if(rating>1.0){
        return(
            <StarS>
                <NavIcon name={"md-star-outline"} color={"#0069ca"} size={size}/>
                <NavIcon name={"md-star-outline"} color={"#0069ca"} size={size}/>
                <NavIcon name={"md-star-outline"} color={"#0069ca"} size={size}/>
                <NavIcon name={"md-star-half"} color={"#0069ca"} size={size}/>
                <NavIcon name={"md-star"} color={"#0069ca"} size={size}/>
            </StarS>
        )
    }else if(rating>0.5){
        return(
            <StarS>
                <NavIcon name={"md-star-outline"} color={"#0069ca"} size={size}/>
                <NavIcon name={"md-star-outline"} color={"#0069ca"} size={size}/>
                <NavIcon name={"md-star-outline"} color={"#0069ca"} size={size}/>
                <NavIcon name={"md-star-outline"} color={"#0069ca"} size={size}/>
                <NavIcon name={"md-star"} color={"#0069ca"} size={size}/>
            </StarS>
        )
    }else{
        return(
            <StarS>
                <NavIcon name={"md-star-outline"} color={"#0069ca"} size={size}/>
                <NavIcon name={"md-star-outline"} color={"#0069ca"} size={size}/>
                <NavIcon name={"md-star-outline"} color={"#0069ca"} size={size}/>
                <NavIcon name={"md-star-outline"} color={"#0069ca"} size={size}/>
                <NavIcon name={"md-star-half"} color={"#0069ca"} size={size}/>
            </StarS>
        )
    }
}

const Star =(props)=>{
    return renderStar(props.rating,props.size)
}

export default Star; 