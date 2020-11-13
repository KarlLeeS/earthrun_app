import React, { useState } from "react";
import styled from "styled-components"; 
import { Alert, Keyboard,TouchableNativeFeedback,SectionList } from "react-native"; 
import { useMutation } from "@apollo/client";
import AuthInput from "../../components/Auth/AuthInput";
import AuthButton from "../../components/Auth/AuthButton";
import constants from "../../constants";
import {CREATE_ACCOUNT} from "./AuthQueries";
import useInput from "../../hooks/useInput";
import Selection from "../../components/Selection";

const View = styled.View`
    justify-content:center;
    align-items:center;
    flex:1; 
`;

const List = styled.View`
    flex-direction:row;
    flex-wrap:wrap;
    justify-content:center;
    width:${constants.width/1.7};
`;

const Signup =({navigation,route})=>{
    const emailInput = useInput(""); 
    const usernameInput = useInput(""); 
    const preferInput = useInput(""); 
    const [loading,setLoading] = useState(false); 
    const [preferences,setPreferences]= useState([]);

    const [createAccountMutation] = useMutation(CREATE_ACCOUNT,{
        variables:{
            email:emailInput.value,
            username:usernameInput.value,
            preference: preferences[0]
        }
    });

    const handleSignup = async ()=>{
        const {value:email} = emailInput;
        // console.log(emailInput.value,usernameInput.value, preferences[0])
        const {value:username} = usernameInput; 
        const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!emailRegex.test(email)){
            return Alert.alert("That email is invalid"); 
        }
        if(username===""){
            return Alert.alert("Invalid username");
        }
        try{
            setLoading(true); 
            // real 
            const{
                data:{createAccount}
            } = await createAccountMutation(); 
            if(createAccount){
                Alert.alert("Account created","Log in now");
                navigation.navigate("Login",{email});
            }

        }catch(e){
            console.log(e);
            Alert.alert("Username taken","Log in instead");
            navigation.navigate("Login",{email});
        }finally{
            setLoading(false); 
        }
    }
    
    return(
        <TouchableNativeFeedback onPress={Keyboard.dismiss}>
            <View>
                <AuthInput 
                    {...emailInput}
                    placeholder="Email"
                    keyboardType="email-address"
                    returnKeyType="send" 
                    autoCorrect={false}
                />
                <AuthInput 
                    {...usernameInput}
                    placeholder="Nickname"
                    autoCapitalize="words"
                />
                <Selection preferences={preferences} setPreferences={setPreferences} type={"radio"}/>
               
                <AuthButton loading={loading} onPress={handleSignup} text="Sign up" />
            </View>
        </TouchableNativeFeedback>
    );
};

export default Signup;
