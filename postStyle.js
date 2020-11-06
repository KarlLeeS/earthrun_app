
import constants from "./constants";

export default {
    "fromRecommendMyProfileRecently":{
        "image":{
            "width":constants.width/3,
            "height":constants.height/6,
            "borderRadius":0
        },
        "Touchable":{
            "height":constants.height/6,
            "marginLeft":10, 
            "marginBottom":10,
            "marginRight":0,
            "flexDirection":"column",
            "padding":"0px"
        },
        "MetaInfo":{
            "marginLeft":0,
            "position":"relative"  ,
            "height":"auto",
            "flexDirection":"column",
            "justifyContent":"flex-start"
        },
        "TextBrand":{
            "fontSize" :"12px",
            "letterSpacing":"-1px",
            "paddingTop":" 5px",
            "fontWeight":"bold",
            "color":" #a0a0a0"
        },
        "TextProductName":{
            "color":"#333333",
            "fontSize":"15px",
            "letterSpacing":"1px",
            "paddingTop":"3px",
            "fontWeight":"bold"
        },
        "TextWieghtPrice":{
            "fontSize":"12px",
            "paddingTop":"5px",
            "color":"#a0a0a0",
            "fontWeight":"normal",
        },
        "Scores":{
            "paddingTop":"3px",
            "flexDirection":"row",
            "justifyContent":"flex-start",
            "alignItems":"center",
            "position":"relative",
            "bottom":"0",
            "left":"0",
        }
    },
    "fromMainScreenNormalListAdd":{
        "image":{
            "width":constants.width/2.3,
            "height":constants.height/4.6,
            "borderRadius":0
        },
        "Touchable":{
            "flexDirection":"column",
            "height":constants.height/4.6,
            "marginBottom": constants.width*(0.12)*(1/3),
            "marginLeft": constants.width*(0.12)*(1/3),
            "marginRight": constants.width*(0.12)*(1/3)*(1/2),
            "padding":"0px 0px"
        },
        "MetaInfo":{
            "marginLeft":0,
            "position":"relative"  ,
            "height":"auto",
            "flexDirection":"column",
            "justifyContent":"flex-start"
        },
        "TextBrand":{
            "fontSize" :"12px",
            "letterSpacing":"-1px",
            "paddingTop":" 5px",
            "fontWeight":"bold",
            "color":" #a0a0a0"
        },
        "TextProductName":{
            "color":"#333333",
            "fontSize":"15px",
            "letterSpacing":"1px",
            "paddingTop":"3px",
            "fontWeight":"bold"
        },
        "TextWieghtPrice":{
            "fontSize":"12px",
            "paddingTop":"5px",
            "color":"#a0a0a0",
            "fontWeight":"normal",

        },
        "Scores":{
            "paddingTop":"3px",
            "flexDirection":"row",
            "justifyContent":"flex-start",
            "alignItems":"center",
            "position":"relative",
            "bottom":"0",
            "left":"0",
        }
    },

    "fromMainScreenNormalListEven":{
        "image":{
            "width":constants.width/2.3,
            "height":constants.height/4.6,
            "borderRadius":0
        },
        "Touchable":{
            "flexDirection":"column",
            "height":constants.height/4.6,
            "marginBottom":constants.width*(0.12)*(1/3),
            "marginLeft":constants.width*(0.12)*(1/3)*(1/2),
            "marginRight":constants.width*(0.12)*(1/3),
            "padding":"0px 0px"
        },
        "MetaInfo":{
            "marginLeft":0,
            "position":"relative"  ,
            "height":"auto",
            "flexDirection":"column",
            "justifyContent":"flex-start"
        },
        "TextBrand":{
            "fontSize" :"12px",
            "letterSpacing":"-1px",
            "paddingTop":" 5px",
            "fontWeight":"bold",
            "color":" #a0a0a0"
        },
        "TextProductName":{
            "color":"#333333",
            "fontSize":"15px",
            "letterSpacing":"1px",
            "paddingTop":"3px",
            "fontWeight":"bold"
        },
        "TextWieghtPrice":{
            "fontSize":"12px",
            "paddingTop":"5px",
            "color":"#a0a0a0",
            "fontWeight":"normal",

        },
        "Scores":{
            "paddingTop":"3px",
            "flexDirection":"row",
            "justifyContent":"flex-start",
            "alignItems":"center",
            "position":"relative",
            "bottom":"0",
            "left":"0",
        }
    },
    "fromRecommendBottom":{
        "image":{
            "width":constants.width/4,
            "height":constants.height/8,
            "borderRadius":10
        },
        "Touchable":{
            "flexDirection":"row",
            "height":constants.height/8,
            "marginLeft":"10px",
            "padding":"5px 0px",
            "marginBottom":0,
            "marginRight":0,
        },
        "MetaInfo":{
            "position":"relative"  ,
            "height":constants.height/8,
            "marginLeft":"30",
            "flexDirection":"column",
            "justifyContent":"flex-start"
        },
        "TextBrand":{
            "fontSize":"14px",
            "fontWeight":"bold",
            "color":"#a0a0a0",
            "letterSpacing":"0px",
            "paddingTop":" 0px",
        },
        "TextProductName":{
            "color": "#333333",
            "fontSize": "15px",
            "letterSpacing":"1px",
            "paddingTop" : "4px",
            "fontWeight":"bold"
        },
        "TextWieghtPrice":{
            "fontSize": "13px",
            "fontWeight":"bold",
            "paddingTop" : "5px",
            "color":"#a0a0a0"

            
        },
        "Scores":{
            "position":"absolute",
            "bottom":"0",
            "left":"0",
            "flexDirection":"row",
            "justifyContent":"flex-start",
            "alignItems":"center",
            "paddingTop":"0px",

        }
    }
}