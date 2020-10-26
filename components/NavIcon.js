import React from "react";
import {Ionicons} from "@expo/vector-icons";
import styles from "../styles";

{/* <NavIcon name={'ios-notifications-outline'} color={"#000"} size={30}/> */}

const NavIcon=({name="star",color="#000",size=24})=>(
    <Ionicons name={name} color={color} size={size}/>
)

export default NavIcon;