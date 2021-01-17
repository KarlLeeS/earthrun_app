export const ConvertFoodtypes=(arr)=>{
    const result= []; 
    arr.forEach((e,i)=>{
        if(e===true){
            switch(i){
                case 0:
                    result.push("채식");
                    break;
                case 1:
                    result.push("유제품");
                    break;
                case 2:
                    result.push("달걀");
                    break;
                case 3:
                    result.push("어류");
                    break;
                case 4:
                    result.push("조류");
                    break;
            }
        }
    })
    return result;
}

export const ConvertCertification=(arr)=>{
    // console.log("arr :",arr);
    const result= []; 
    arr.forEach((e,i)=>{
        if(e===true){
            switch(i){
                case 0:
                    result.push("한국 비건인증원");
                    break;
                case 1:
                    result.push("영국 비건 협회");
                    break;
                case 2:
                    result.push("우수 재활용");
                    break;
                case 3:
                    result.push("리핑 버니");
                    break;
                case 4:
                    result.push("환경표지");
                    break;
                case 5:
                    result.push("저탄소");
                    break;
            }
        }
    })
    return result;
}

export const makeToggleArr=(b,i,l)=>{
    const arr = (new Array(l)).fill(0);
    arr[i]=1; 
    return arr; 
}


export const CalculateDays=(date)=>{

    const start =date.split('T')[0]; 
    var today = new Date();
    var end = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    const startItems = start.split("-"); 
    const endItems = end.split("-"); 
    const diffInMs   = new Date(Number(endItems[0]),Number(endItems[1]),Number(endItems[2])) - new Date(Number(startItems[0]),Number(startItems[1]),Number(startItems[2]));
    const diffInDays = diffInMs / (1000 * 60 * 60 * 24);
    return Math.floor(diffInDays);
}

export const ConvertToKorean=(date)=>{
    const segment = date.split('T')[0];
    const pip = segment.split('-'); 
    return `${pip[0]}년 ${pip[1]}월 ${pip[2]}일` 
}

export const getParentTab=(sub)=>{
    switch (sub) {
        case "대체육":
        case "빵":
        case "간편식·면류·통조림":
        case "음료":
        case "간식":
            return "식품"
        default:
            break;
    }
}



export const initFoodtypes=(foodtypes)=>{
    const tempArr= [false,false,false,false,false];
    foodtypes.forEach((e)=>{
        switch(e){
            case "채식":
                tempArr[0]=true; 
                break;
            case "유제품":
                tempArr[1]=true; 
                break;
            case "달걀":
                tempArr[2]=true; 
                break;
            case "어류":
                tempArr[3]=true; 
                break;
            case "조류":
                tempArr[4]=true; 
                break;
        }
    })
    return tempArr;
}
