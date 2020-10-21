import { StatusBar } from 'expo-status-bar';
import { Ionicons } from "@expo/vector-icons";
import * as Font from "expo-font"
import React, { useState } from 'react';
import { AsyncStorage, StyleSheet, Text, View } from 'react-native';
import { persistCache } from "apollo-cache-persist";
import { ApolloClient } from 'apollo-boost';
import Navcontroller from './components/Navcontroller';

import {ApolloProvider} from "@apollo/client";
export default function App() {
  const [loaded, setLoaded] = useState(false);
  const [client, setClient] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const preLoad = async () => {
    try {

      // await Font.loadAsync({
      //   ...Ionicons.font
      // });

      // await assertType.loadAsync([require("./assets/logo.png")]);

      // const cache = new InMemoryCache();
      // await persistCache({
      //   cache,
      //   storage: AsyncStorage
      // });

      // const client = new ApolloClient({
      //   cache,
      //   request: async operation => {
      //     const token = await AsyncStorage.getItem("jwt");
      //   }
      // })


    } catch (error) {
      console.log(error);
    }
  }


  return (
    <Navcontroller />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
;