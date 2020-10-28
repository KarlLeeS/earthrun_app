// import React, { useEffect, useState } from "react";
// import styled from "styled-components";
// import { Alert, Keyboard,TouchableWithoutFeedback } from "react-native";
// import { useMutation } from "@apollo/client";
// import AuthInput from "../../components/Auth/AuthInput";
// import AuthButton from "../../components/Auth/AuthButton";
// import useInput from "../../components/useInput";
// import { CONFIRM_SECRET } from "./AuthQueries";
// import { useLogIn } from "../../AuthContext";

// const View = styled.View`
//     justify-content:center; 
//     align-items:center; 
//     flex:1 ;
// `; 

// const Confirm = ({route,navigation})=>{
//     const confirmInput = useInput(route.params.secret); 
//     const logIn = useLogIn();
//     const [loading,setLoading] = useState(false);
//     const {email} = route.params; 

//     const [confirmSecretMutation] = useMutation(CONFIRM_SECRET,{
//         variables:{
//             secret: route.params.secret,
//             email: route.params.email
//         }
//     });

    
//   useEffect(() => {
//     setTimeout(() => {
//       handleConfirm();
//     }, 500);
//   }, [])

//     const handleConfirm = async () => {

//         const {value} = confirmInput; 

//         if(value==="" || !value.includes(" ")){
//             return Alert.alert("Invalid Secret"); 
//         }

//         try{
//             setLoading(true); 
//             const {
//                 data:{ confirmSecret }
//             }= await confirmSecretMutation(); 
//             console.log({confirmSecret});
//             if(confirmSecret !=="" || confirmSecret !== false){
//                 // usercontext에 user 객체 넣는 작업 필요. 

//                 logIn(confirmSecret);
//             }else{
//                 Alert.alert("Wrong secret!"); 
//             }
//         }catch(e){
//             console.log(e); 
//             Alert.alert("Can't confirm secret");
//         }finally{
//             setLoading(false); 
//         }
//     }

//     return(
//         <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
//             <View>
//                 <AuthInput 
//                     {...confirmInput}
//                     placeholder="Secret"
//                     returnKeyType="send"
//                     onSubmitEditing={handleConfirm}
//                     autoCorrect={false}
//                 />
//                 <AuthButton loading={loading} onPress={handleConfirm} text="Confirm" />
//             </View>
//         </TouchableWithoutFeedback>
//     ); 
// }

// export default Confirm; 
