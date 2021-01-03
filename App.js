import React, { useEffect, useState } from 'react';
import * as Font from "expo-font"

import {Asset} from "expo-asset";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-community/async-storage";

import {  StyleSheet, Text, View } from 'react-native';
import { persistCache } from "apollo-cache-persist";
import { InMemoryCache } from "apollo-cache-inmemory"; 
import ApolloClient,{gql} from 'apollo-boost';

import {ApolloProvider, useQuery} from "@apollo/client";
import apolloClientOptions from './apolloClientOption';
import {ThemeProvider} from "styled-components/native";
import { AuthProvider } from './AuthContext';

import Navcontroller from './components/Navcontroller';
import { AppLoading } from 'expo';
import styles from './styles';
import Selection from './components/Selection';
import UploadPost from './screens/profile/UploadPost';
import { LogBox } from 'react-native';

export default function App() {
  LogBox.ignoreAllLogs();
  const [loaded, setLoaded] = useState(false);
  const [client, setClient] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  const preLoad = async () => {
    try {

      // pre-upload font 
      await Font.loadAsync({
        ...Ionicons.font
      });

      // pre-upload images
      await Asset.loadAsync([
        // 원하는 만큼 load 할 수가 있겠지. 
        require("./assets/logo.png"), 
        require("./assets/post.png"), 
        require("./assets/icon_chemical.png"),
        require("./assets/icon_vegetype_color_chicken.png"),
        require("./assets/icon_vegetype_color_egg.png"),
        require("./assets/icon_vegetype_color_fish.png"),
        require("./assets/icon_vegetype_color_leaf.png"),
        require("./assets/icon_vegetype_color_milk.png"),
        require("./assets/icon_vegetype_grey_chicken.png"),
        require("./assets/icon_vegetype_grey_egg.png"),
        require("./assets/icon_vegetype_grey_fish.png"),
        require("./assets/icon_vegetype_grey_leaf.png"),
        require("./assets/icon_vegetype_grey_milk.png"),
      ]);

      // device의 storage의 정보를 cache에 올림
      const cache = new InMemoryCache();
      await persistCache({
        cache,
        storage: AsyncStorage
      });
      
      // bridge between front and back by using graph ql. 
      const client = new ApolloClient({
        cache,
        request: async operation => {
          const token = await AsyncStorage.getItem("jwt");
          return operation.setContext({
            // headers:{Authorization:`Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNrZ2hiOWZveGMyN3cwOTk5dTg2dmF3dWoiLCJpYXQiOjE2MDQwMDY5NjZ9.RUtL870HvkJiYJC0G1d_ckCfhU_fOhYHy5RmQFtmQTc`}
            headers:{Authorization:`Bearer ${token}`}
          });
        },
        ...apolloClientOptions
      });

      const isLoggedIn = await AsyncStorage.getItem("isLoggedIn"); 
      if(!isLoggedIn|| isLoggedIn==="false"){
        setIsLoggedIn(false);
      }else{
        setIsLoggedIn(true); 
      }

      setLoaded(true);
      setClient(client);
    } catch (error) {
      console.log(error);
    }
  }

  // Like componentDidMount
  useEffect(()=>{
    preLoad();
  },[]);

  return loaded && client && isLoggedIn !== null ? (
    <ApolloProvider client={client}>
      <ThemeProvider theme={styles}>
        <AuthProvider  isLoggedIn={isLoggedIn}>
          <Navcontroller />
        </AuthProvider>
      </ThemeProvider>
    </ApolloProvider>
  ):(
    <AppLoading />
  );

}

// return <UploadPost />  

