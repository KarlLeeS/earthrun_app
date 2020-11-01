import React , {createContext, useContext, useState} from "react";
import AsyncStorage from "@react-native-community/async-storage";

import { USER_FRAGMENT } from "./fragments";
import { useQuery } from "@apollo/client";
import {gql} from "apollo-boost";
import { cos } from "react-native-reanimated";
import Loader from "./components/Loader";

export const AuthContext = createContext(); 

export const ME = gql`
    {
        me{
            ...UserParts
        }
    }
    ${USER_FRAGMENT}
`

export const AuthProvider = ({isLoggedIn:isLoggedInProp, children})=>{
    const [isLoggedIn,setIsLoggedIn] = useState(isLoggedInProp); 
    const [user,setUser]= useState({});
    
    const SettingUser=(user)=>{
        setUser(user);
    }

    const logUserIn = async token =>{
        // console.log(token); 
        try{
            await AsyncStorage.setItem("jwt",token); 
            setIsLoggedIn(true);
        }catch(e){
            console.log(e);
            throw Error(e);
        }
    };
    const logUserOut = async ()=>{
        try{
            await AsyncStorage.setItem("isLoggedIn","false"); 
            setIsLoggedIn(false); 
        }catch(e){
            console.log(e); 
        }
    };
    return (
    <AuthContext.Provider value={{user,SettingUser,isLoggedIn,logUserIn,logUserOut}}>
            {children}
    </AuthContext.Provider>
    )
};

export const useUser=()=>{
    const {user} = useContext(AuthContext);
    return user;
}

export const useSetUser=()=>{
    const {SettingUser} = useContext(AuthContext); 
    return SettingUser;
}

export const useIsLoggedIn=()=>{
    const {isLoggedIn} = useContext(AuthContext);
    return isLoggedIn;
};

export const useLogIn= ()=>{
    const {logUserIn} = useContext(AuthContext);
    return logUserIn;
}

export const useLogOut=()=>{
    const {logUserOut} = useContext(AuthContext); 
    return logUserOut;
}

