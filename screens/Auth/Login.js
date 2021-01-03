import React, { useEffect, useState } from "react"; 
import styled from "styled-components";
import {TouchableWithoutFeedback,Keyboard,Alert} from "react-native"; 
import { useMutation } from "@apollo/client";
import AuthInput from "../../components/Auth/AuthInput";
import AuthButton from "../../components/Auth/AuthButton";
import { LOG_IN } from "./AuthQueries";
import useInput from "../../hooks/useInput";

const View = styled.View`
    justify-content:center; 
    align-items:center;
    flex:1;
`;


const Login=({route,navigation})=>{
    const see = route?.params?.email; 
    // const emailInput= useInput(see); 
    const emailInput= useInput("1@1.com"); 
    
    const [loading,setLoading] =useState(false); 
    const [requestSecretMutation] = useMutation(LOG_IN, {
        variables:{
            email:emailInput.value
        }
    }); 

    const handleLogin= async()=>{
        const {value} = emailInput;
        const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (value === "") {
            return Alert.alert("Email can't be empty");
        }
        else if(!value.includes("@") || !value.includes(".")){
            return Alert.alert("please write an email"); 
        }
        try{
            setLoading(true); 
            const {
                data:{requestSecret}
            } = await requestSecretMutation(); 
            if(requestSecret){
                // Alert.alert("Check your email"); 
                
                // navigation.navigate("Confirm",{email:value,secret:requestSecret}); 
                navigation.navigate("Confirm",{email:emailInput.value,secret:requestSecret}); 
            }else{
                Alert.alert("Account not found"); 
                navigation.navigate("Signup",{email:value}); 
            }
        }catch(e){
            console.log(e); 
            Alert.alert("can't log in now"); 
        }finally{
            setLoading(false); 
        }
    }

    useEffect(()=>{
        handleLogin();
    },[])
    

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View>
                <AuthInput 
                    {...emailInput}
                    placeholder="Email"
                    keyboardType="email-address"
                    returnKeyType="send"
                    onSubmitEditing={handleLogin}
                    autoCorrect={false}
                />
                <AuthButton loading={loading} onPress={handleLogin} text="Log In" />
            </View>
        </TouchableWithoutFeedback>
    )

};

export default Login; 