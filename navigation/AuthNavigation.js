import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
// import 

const Stack = createStackNavigator(); 

const AuthNavigation=()=>{
    return(
        <NavigationContainer>
            <Stack.Navigator headerMode="none">
                <Stack.Screen name="Login" component={}/>
                <Stack.Screen name="Signup" component={}/>
                <Stack.Screen name="Confirm" component={}/>
                <Stack.Screen name="Home" component={}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AuthNavigation;