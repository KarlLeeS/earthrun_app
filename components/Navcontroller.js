import React from "react";
import MainNavigation from "../navigation/MainNavigation";
import AuthNavigation from "../navigation/AuthNavigation";
import { useIsLoggedIn} from "../AuthContext";

const Navcontroller= () => {

  const isLoggedIn = useIsLoggedIn();

  return isLoggedIn ? <MainNavigation /> : <AuthNavigation />; 
}

export default Navcontroller;