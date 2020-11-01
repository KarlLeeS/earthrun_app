export const ConvertPreference=(arr)=>{
    const result= []; 
    arr.forEach((e,i)=>{
        if(e===1){
            switch(i){
                case 0:
                    result.push("비건");
                    break;
                case 1:
                    result.push("락토");
                    break;
                case 2:
                    result.push("오보");
                    break;
                case 3:
                    result.push("락토오보");
                    break;
                case 4:
                    result.push("페스코");
                    break;
                case 5:
                    result.push("폴로");
                    break;
            }
        }
    })
    return result;
}

export const ConvertCertification=(arr)=>{
    const result= []; 
    arr.forEach((e,i)=>{
        if(e===1){
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