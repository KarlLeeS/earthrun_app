import React from "react";
import NavIcon from "./NavIcon";

const Notification=()=>{
    console.log('설마 Notification?');

    return (
        <NavIcon name={'ios-notifications-outline'} color={"#000"} size={30}/>
    );
}

export default React.memo(Notification); 