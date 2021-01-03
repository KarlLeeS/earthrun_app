import React , {createContext, useContext, useState} from "react";
import AsyncStorage from "@react-native-community/async-storage";

import { USER_FRAGMENT } from "./fragments";
import { useQuery } from "@apollo/client";
import {gql} from "apollo-boost";
import { cos } from "react-native-reanimated";
import Loader from "./components/Loader";

export const AuthContext = createContext(); 

const post = []; 
const initialMainPosts= {
    "식품":
    {
        "대체육":{posts:[ ...post ]},
        "빵":[],
        "간편식·면류·통조림":[],
        "음료":[] 
    },
    "식품":
    {
        "대체육":[ ...post ],
        "빵":[],
        "간편식·면류·통조림":[],
        "음료":[] 
    },
    "식품":
    {
        "대체육":[ ...post ],
        "빵":[],
        "간편식·면류·통조림":[],
        "음료":[] 
    },
}


const initialMainTabPostsLoading= {
    "식품":
    {
        "대체육":true,
        "빵":true,
        "간편식·면류·통조림":[],
        "음료":[] 
    },
    "식품":
    {
        "대체육":[ ...post ],
        "빵":[],
        "간편식면류통조림":[],
        "음료":[] 
    },
    "식품":
    {
        "대체육":[ ...post ],
        "빵":[],
        "간편식면류통조림":[],
        "음료":[] 
    },
}

export const AuthProvider = ({isLoggedIn:isLoggedInProp, children})=>{
    const [isLoggedIn,setIsLoggedIn] = useState(isLoggedInProp); 

    const [user,setUser]= useState({});
    const [ME_Loading,setMe_Loading] =useState(true); 

    const [MainTabPosts,setMainTabPosts] = useState(undefined); 
    const [MainTabPostsLoading,setMainTabPostsLoading] = useState(true); 

    // 위 더미데이터 참고
    const [MainPosts,setMainPosts] = useState([]);
    const [MainPostsLoading,setMainPostsLoading] = useState([]);

    const [currentPost,setCurrentPost] =useState([]); 
    const [avatar,setAvatar] = useState("");
    const [photoDisplay,setphotoDisplay] = useState([]);
    const [photomaterial,setphotoMaterial] = useState("");

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
    <AuthContext.Provider value={{
        MainTabPosts,setMainTabPosts,
        MainTabPostsLoading,setMainTabPostsLoading,
        ME_Loading,setMe_Loading,
        avatar,setAvatar,
        photoDisplay,setphotoDisplay,
        photomaterial,setphotoMaterial,
        currentPost,setCurrentPost,
        user,SettingUser,
        isLoggedIn,logUserIn,
        logUserOut
        }}>
            {children}
    </AuthContext.Provider>
    )
};

export const useMainTabPosts=()=>{
    const {MainTabPosts} =useContext(AuthContext);
    return MainTabPosts;
}

export const usesetMainTabPosts=()=>{
    const {setMainTabPosts} = useContext(AuthContext);
    return setMainTabPosts;
}

export const useMainTabPostsLoading=()=>{
    const {MainTabPostsLoading} =useContext(AuthContext);
    return MainTabPostsLoading;
}

export const usesetMainTabPostsLoading=()=>{
    const {setMainTabPostsLoading} = useContext(AuthContext);
    return setMainTabPostsLoading;
}

export const useME_Loading=()=>{
    const {ME_Loading} =useContext(AuthContext);
    return ME_Loading;
}

export const usesetMe_Loading=()=>{
    const {setMe_Loading} = useContext(AuthContext);
    return setMe_Loading;
}

export const useAvatar=()=>{
    const {avatar} =useContext(AuthContext);
    return avatar;
}

export const useSetAvatar=()=>{
    const {setAvatar} = useContext(AuthContext);
    return setAvatar;
}

export const usePhotoDisplay=()=>{
    const {photoDisplay} = useContext(AuthContext);
    return photoDisplay;
}

export const useSetPhotoDisplay=()=>{
    const {setphotoDisplay} = useContext(AuthContext);
    return setphotoDisplay;
}

export const usePhotoMaterial=()=>{
    const {photomaterial} = useContext(AuthContext);
    return photomaterial;
}

export const useSetPhotoMaterial=()=>{
    const {setphotoMaterial} = useContext(AuthContext);
    return setphotoMaterial;
}


export const useCurrentPost=()=>{
    const {currentPost} = useContext(AuthContext);
    return currentPost;
}

export const useSetCurrentPost=()=>{
    const {setCurrentPost} = useContext(AuthContext); 
    return setCurrentPost;
}
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

