import React from "react";
import MainNavigation from "../navigation/MainNavigation";

export default () => {
  const isLoggedIn = true;

  return isLoggedIn ? <MainNavigation /> : <View><Text>Login</Text></View>

}
