import React from "react";
import NavIcon from "./NavIcon";

const Notification=()=>{
    console.log("Rendering HomeNavigation/Notification");

    return (
        <NavIcon name={'ios-notifications-outline'} color={"#000"} size={30}/>
    );
}

export default React.memo(Notification); 