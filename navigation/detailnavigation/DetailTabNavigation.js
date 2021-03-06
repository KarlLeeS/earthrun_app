import React from "react";
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import tempTabScreen from "../../screens/detail/tempTabScreen";
import ProductInfo from "../../components/Detail/BottomTab/ProductInfo";
import ReviewRating from "../../components/Detail/BottomTab/ReviewRating";
import Lines from "../../components/Detail/BottomTab/Lines";
import constants from "../../constants";

const Tab = createMaterialTopTabNavigator();

const DetailTabNavigation=({
    childrenTab,
    Postindex,
    data:{
        id,
        rawMaterials,
        description,certification,
        rawMaterialURL,
        reviewCount,rating,reviews=[],
        offline,online
    }
})=>{
    return(
        <Tab.Navigator
            lazy="true"
            tabBarOptions={{
                indicatorStyle:{
                    position:"absolute",
                    bottom:-5,
                    borderBottomColor:"#00cf84",
                    borderBottomWidth:4
                },
                labelStyle:{
                    fontSize:14,
                    fontWeight:"bold",
                },
                tabStyle:{
                    width:constants.width/3,
                    height:constants.height/20
                },
                style:{
                    borderTopColor:"#f0f0f0",
                    borderTopWidth:4,
                    elevation:0,
                },
                inactiveTintColor:"#717171",
                activeTintColor: "#00cf84"
            }}
            style={{
                    elevation:0,
            }}
        >
            <Tab.Screen name="상품정보" children={()=><ProductInfo
                description={description}
                certification={certification}
                rawMaterials={rawMaterials}
                rawMaterialURL={rawMaterialURL}
            />}/>
            <Tab.Screen name="리뷰 및 별점" children={()=><ReviewRating 
                postId={id}
                childrenTab={childrenTab}
                Postindex={Postindex}
                reviewCount={reviewCount}
                rating={rating}
                reviews={reviews}/>} 
            />
            <Tab.Screen name="판매처" children={()=><Lines 
                offline={offline}
                online={online}
                />}
            />
        </Tab.Navigator>
    );
}

export default DetailTabNavigation; 