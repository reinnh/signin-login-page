let dataBase=[];
let IndividualsInfo={};
let userCredentials=[];
let badCredential=false;
let LoginData;

function clearFormValue(){ //flashes the form clean 
    document.querySelectorAll('.js-input').forEach((innerValue)=>{
        innerValue.value='';
    });
}


function addToArrayAndWarn(){   //collect input and add to array and issue warning on empty input
    const inputCredents=document.querySelectorAll('.js-input');
    function showWarning(){
        inputCredents.forEach((innerValue, index)=>{
            const valueEl=innerValue.value;
            if(valueEl===''){
              document.querySelector(`.visible${index}`).classList.add('visible');
              badCredential=true;
              console.log(index);
            }
            else{
                userCredentials.push(valueEl);
                document.querySelector(`.visible${index}`).classList.remove('visible');
            }
            
        });
       
    }
    showWarning();             
    if(badCredential===false){               //creats an object to hold user information
        IndividualsInfo.name=userCredentials[0];
        IndividualsInfo.birthYear=userCredentials[1];
        IndividualsInfo.ID=userCredentials[2];
        IndividualsInfo.gender=userCredentials[3];
        IndividualsInfo.email=userCredentials[4];
        IndividualsInfo.country=userCredentials[5];
        IndividualsInfo.mobileNo=userCredentials[6];
        IndividualsInfo.age=(2024- Number(userCredentials[1]));
        clearFormValue();
        dataBase.push(IndividualsInfo);
    }
    console.log(userCredentials);
    console.log(IndividualsInfo)
    console.log(dataBase);
    userCredentials=[];
    IndividualsInfo={};
}
document.querySelector('.next').addEventListener('click',()=>{
    addToArrayAndWarn();
  
});
document.querySelector('.checkbox').addEventListener('click',()=>{
    if(badCredential===false){
        badCredential=true;
        document.querySelector('.js-submit').innerHTML=`<a href="account-configuration.html"><div class="next">Next</div></a>`;
    }
})





