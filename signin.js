//import { LoginData } from "./signup.js";
const Login={};

document.querySelector('.signin-button').addEventListener('click',()=>{
    document.querySelectorAll('.text-box').forEach((LoginInfo,index)=>{
        console.log(LoginInfo.value);
     if(index===0){
        Login.name=LoginInfo.value;
     }
     else if(index==1){
        Login.password=LoginInfo.value
     }
    }); 

    console.log(Login);
})
