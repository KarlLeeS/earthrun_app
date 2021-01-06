import React from "react";
import {Ionicons} from "@expo/vector-icons";
import styles from "../styles";


const NavIcon=({name="star",color="#000",size=24})=>(
    <Ionicons name={name} color={color} size={size}/>
)

export default NavIcon;