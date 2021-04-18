'use strict'
let weight ;
let Height ;
function start(){
   //----------- BMI-------------------------------------------   
    let button = document.getElementById("button");
    button.addEventListener("click",bmi,false);
    let result1 = document.getElementById("result");
    result1.setAttribute("value" , 0)
}
function bmi(){
    weight=parseInt(document.getElementById("Weight").value) ;
    Height=parseInt(document.getElementById("Height").value) ;
    let result1 = document.getElementById("result");
let result2 = document.getElementById("result2") ; 
let bmi = weight/((Height/100) * (Height/100));
    result1.setAttribute("value" ,bmi )
//---------------- the souce of these numbers is -----> https:// m.marefa.org 
if ( bmi < 16.5)
result2.setAttribute("value" , "you are severely uderwight");
else if (bmi >= 16.5 && bmi <=18.4 )
result2.setAttribute("value" , "you are uderwight");
else if (bmi >= 18.5 && bmi <=24.9 )
result2.setAttribute("value" , "you weight is normal ");
else if (bmi >= 25 && bmi <=30 )
result2.setAttribute("value" , "you are overwight ");
else if (bmi >= 30.1 && bmi <=34.9 )
result2.setAttribute("value" , " First-class obesity");
else if (bmi >= 35 && bmi <=40 )
result2.setAttribute("value" , "Second-class obesity");
else if (bmi >40 )
result2.setAttribute("value" , "Third-class obesity ");
    }//end function
window.addEventListener("load",start,false);