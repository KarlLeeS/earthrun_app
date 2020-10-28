import React, { useEffect, useState } from 'react';
import * as Font from "expo-font"

import {Asset} from "expo-asset";
import { Ionicons } from "@expo/vector-icons";
import { AsyncStorage, StyleSheet, Text, View } from 'react-native';
import { persistCache } from "apollo-cache-persist";
import { InMemoryCache } from "apollo-cache-inmemory"; 
import ApolloClient from 'apollo-boost';

import {ApolloProvider} from "@apollo/client";
import apolloClientOptions from './apolloClientOption';
import {ThemeProvider} from "styled-components/native";
import { AuthProvider } from './AuthContext';

import Navcontroller from './components/Navcontroller';
import { AppLoading } from 'expo';
import styles from './styles';
import LeftFilter from './components/LeftFilter';
import RightFilter from './components/RightFilter';

export default function App() {
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
        require("./assets/logo.png"), 
      
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
            headers:{Authorization:`Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNrZ2hiOWZveGMyN3cwOTk5dTg2dmF3dWoiLCJpYXQiOjE2MDM4NTkxMTN9.jzKvAJ0OpwYcu5Ndx36ImQ-QIMiNjAp8MYwVg917iKw`}
            // headers:{Authorization:`Bearer ${token}`}
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
        <AuthProvider isLoggedIn={isLoggedIn}>
          <Navcontroller />
        </AuthProvider>
      </ThemeProvider>
    </ApolloProvider>
  ):(
    <AppLoading />
  );
}
