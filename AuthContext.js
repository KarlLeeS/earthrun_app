import React , {createContext, useContext, useState} from "react";
import AsyncStorage from "@react-native-community/async-storage";

import { GET_MAIN_SEARCH_BAR, USER_FRAGMENT,GET_MATERIAL_SEARCH } from "./fragments";
import { useMutation, useQuery } from "@apollo/client";
import {gql} from "apollo-boost";
import { cos } from "react-native-reanimated";
import Loader from "./components/Loader";
import produce from "immer";
import useInput from "./hooks/useInput";

export const AuthContext = createContext(); 

const post = []; 

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
const initialMainPosts= {
    "식품": //  parentTab
    {
        "대체육": //childrenTab
                [ ]
            ,
        "빵":[],
        "간편식·면류·통조림":[],
        "음료":[] ,
        "간식":[]
    },
}

export const AuthProvider = ({isLoggedIn:isLoggedInProp, children})=>{
    
    const [isLoggedIn,setIsLoggedIn] = useState(isLoggedInProp); 

    const [user,setUser]= useState({});
    const [ME_Loading,setMe_Loading] =useState(true); 

    const [MainTabPosts,setMainTabPosts] = useState(undefined); 
    const [MainTabPostsLoading,setMainTabPostsLoading] = useState(true); 

    // 위 더미데이터 참고
    const [MainPost0,setMainPosts0]= useState({type:"대체육",posts:[ ]})
    const [MainPost1,setMainPosts1]= useState({type:"빵",posts:[ ]})
    const [MainPost2,setMainPosts2]= useState({type:"간편식·면류·통조림",posts:[ ]})
    const [MainPost3,setMainPosts3]= useState({type:"음료",posts:[ ]})
    const [MainPost4,setMainPosts4]= useState({type:"간식",posts:[ ]})
    
    const [MainPostLoading0,setMainPostLoadings0]= useState(true)
    const [MainPostLoading1,setMainPostLoadings1]= useState(true)
    const [MainPostLoading2,setMainPostLoadings2]= useState(true)
    const [MainPostLoading3,setMainPostLoadings3]= useState(true)
    const [MainPostLoading4,setMainPostLoadings4]= useState(true)
    
    const searchInput=useInput("");


    const [SearchPost,setSearchPost] = useState();
    
    const [MAIN_SEARCH_BAR] = useMutation(GET_MAIN_SEARCH_BAR);

    const SearchBarSubmit= async (
        foodtypes=[...user?.foodtypes.map(e=>e.name)],
        certification=[],
        orderingoption="BYRATING",
        search = searchInput
    )=>{
        console.log("검색합니다잇");
        searchInput.setValue(search);
        const {data:{MainSearchBar}} =  await MAIN_SEARCH_BAR(
            {
                variables:{
                    certification,foodtypes,orderingoption,keyword:search
                }
            }
        );
        setSearchPost(MainSearchBar);
        
    }
   
    const setMainpostsWrapper=(type,posts,check)=>{
        if(check) return ; 
        switch (type) {
            case "대체육":
                setMainPosts0(prev=>{
                    return produce(prev,draft=>{
                        draft.posts=posts;
                    })
                })
                break;
            case "빵":
                setMainPosts1(prev=>{
                    return produce(prev,draft=>{
                        draft.posts=posts;
                    })
                })
                break;
            case "간편식·면류·통조림":
                setMainPosts2(prev=>{
                    return produce(prev,draft=>{
                        draft.posts=posts;
                    })
                })
                break;
            case "음료":
                setMainPosts3(prev=>{
                    return produce(prev,draft=>{
                        draft.posts=posts;
                    })
                })
                break;
            case "간식":
                setMainPosts4(prev=>{
                    return produce(prev,draft=>{
                        draft.posts=posts;
                    })
                })
                break;
        }
    }

    const [materials,setMaterials] = useState(undefined);
    const [materialLoading,setmaterialLoading] = useState(true);
    const [RAWMATERIAL_FRAGMENT] = useMutation(GET_MATERIAL_SEARCH);
    const settingMaterials = async (jaum,keyword="")=>{
        setmaterialLoading(true);
        const {data:{MaterialSearch}} = await RAWMATERIAL_FRAGMENT({
            variables:{
                jaum,keyword
            }
        });
        setMaterials(MaterialSearch);
        setmaterialLoading(false);
        MaterialSearch.map(e=>console.log(e.name));
    }

    const [currentPost,setCurrentPost] =useState([]); 
    const [avatar,setAvatar] = useState("");
    const [photoDisplay,setphotoDisplay] = useState([]);
    const [photomaterial,setphotoMaterial] = useState("");

    const setMainPostsLoadingWrapper=(type)=>{
        switch (type) {
            case "대체육":
                setMainPostLoadings0(prev=>!prev);
            case "빵":
                setMainPostLoadings1(prev=>!prev);
            case "간편식·면류·통조림":
                setMainPostLoadings2(prev=>!prev);
            case "음료":
                setMainPostLoadings3(prev=>!prev);
    
            case "간식":
                setMainPostLoadings4(prev=>!prev);
        }
    }

    const SettingUser=(user)=>{
        setUser(user);
    }

    const logUserIn = async token =>{
        try{
            await AsyncStorage.setItem("jwt",token); 
            setIsLoggedIn(true);
        }catch(e){
            // console.log(e);
            throw Error(e);
        }
    };
    const logUserOut = async ()=>{
        try{
            await AsyncStorage.setItem("isLoggedIn","false"); 
            setIsLoggedIn(false); 
        }catch(e){
            // console.log(e); 
        }
    };
    return (
    <AuthContext.Provider value={{
        materials,materialLoading,
        settingMaterials,
        SearchPost,
        SearchBarSubmit,
        searchInput,
        MainPost0,MainPost1,MainPost2,MainPost3,MainPost4,setMainpostsWrapper,
        MainPostLoading0,MainPostLoading1,MainPostLoading2,MainPostLoading3,MainPostLoading4
        ,setMainPostsLoadingWrapper,
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


export const usematerials=()=>{
    const {materials} = useContext(AuthContext);
    return materials;
}


export const usematerialLoading=()=>{
    const {materialLoading} = useContext(AuthContext);
    return materialLoading;
}


export const usesettingMaterials=()=>{
    const {settingMaterials} = useContext(AuthContext);
    return settingMaterials;
}


export const useSearchPost=()=>{
    const {SearchPost} = useContext(AuthContext);
    return SearchPost;
}


export const useSearchBarSubmit=()=>{
    const {SearchBarSubmit} = useContext(AuthContext);
    return SearchBarSubmit;
}


export const usesearchInput=()=>{
    const {searchInput} = useContext(AuthContext);
    return searchInput;
}

export const useMainPosts=(type)=>{
    const {MainPost0,MainPost1,MainPost2,MainPost3,MainPost4} =useContext(AuthContext);
    switch (type) {
        case "대체육":
            return MainPost0;
        case "빵":
            return MainPost1;
        case "간편식·면류·통조림":
            return MainPost2;
        case "음료":
            return MainPost3;

        case "간식":
            return MainPost4;
    }
}

export const usesetMainposts=()=>{
    const {setMainpostsWrapper} = useContext(AuthContext);
    return setMainpostsWrapper;
}

export const useMainPostsLoading=(type)=>{
    const {
        MainPostLoading0,MainPostLoading1,MainPostLoading2,MainPostLoading3,MainPostLoading4
    } =useContext(AuthContext);
    switch (type) {
        case "대체육":
            return MainPostLoading0
        case "빵":
            return MainPostLoading1
        case "간편식·면류·통조림":
            return MainPostLoading2
        case "음료":
            return MainPostLoading3

        case "간식":
            return MainPostLoading4
    }
}

export const usesetMainPostsLoading=()=>{
    const {setMainPostsLoadingWrapper} = useContext(AuthContext);
    return setMainPostsLoadingWrapper;
}


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

