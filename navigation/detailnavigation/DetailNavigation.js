import React from "react";

import Slider from "../../screens/detail/slider";
import Metainfo from "../../screens/detail/metainfo";
import DetailTabNavigation from "./DetailTabNavigation";


export default()=>
{
    return (
        <>
            <Slider></Slider>
            <Metainfo></Metainfo>
            <DetailTabNavigation />
        </>
    )
}