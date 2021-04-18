'use strict'


//----------------------------------------------------- To calculate weight ----------------------------------------------

function startNormal_weight() {
    var button1 = document.getElementById("cal");
    button1.addEventListener("click", normal_weight);
    // weight.setAttribute("value" ,"41.6 - 56.3 g "); 

}// end star function


function normal_weight() {

    let height1 = parseInt(document.getElementById("height").value);
    let weight1 = document.getElementById("weight");
    let heightArray = [];


    for (let i = 150; i <= 200; i++) {
        heightArray.push(i);
        //console.log(heightArray[i]);
    }

    let range1;
    let range2;
    for (let j = 0; j < heightArray.length; j++) {


        if (heightArray[j] === height1) {
            if (j === 0) {

                range1 = 41.6;
                range2 = 56.3;
                /*  console.log("r1= " + range1);
                  console.log("r2= " + range2);*/
                let resultRange = `${range1}-${range2} `;
                weight1.setAttribute("value", resultRange);

            } else {
                range1 = 41.6;
                range2 = 56.3;
                range1 += (0.6 * j);
                range2 += (0.7 * j)
                /*   console.log("r1= " + range1);
                   console.log("r2= " + range2);*/
                let resultRange = `${range1}-${range2} `;
                weight1.setAttribute("value", resultRange);

            }

        }
    }


}



window.addEventListener("load", startNormal_weight);



//-----------------------------------------------------end  To calculate weight ----------------------------------------------



//----------------------------------------------------- To calculate BMI ----------------------------------------------
let weight;
let Height;
function start() {
    //----------- BMI-------------------------------------------   
    let button = document.getElementById("button");
    button.addEventListener("click", bmi);
    let result1 = document.getElementById("result");
    result1.setAttribute("value", 0)
}
function bmi() {
    weight = parseInt(document.getElementById("Weight").value);
    Height = parseInt(document.getElementById("Height").value);
    let result1 = document.getElementById("result");
    let result2 = document.getElementById("result2");
    let bmi = weight / ((Height / 100) * (Height / 100));
    result1.setAttribute("value", bmi)
    //---------------- the souce of these numbers is -----> https:// m.marefa.org 

    let resultBMI
    if (bmi < 16.5) {
        resultBMI = "you are severely uderwight";
        result2.setAttribute("value", resultBMI);

    } else if (bmi >= 16.5 && bmi <= 18.4) {
        resultBMI = "you are uderwight";
        result2.setAttribute("value", resultBMI);
    }

    else if (bmi >= 18.5 && bmi <= 24.9) {
        resultBMI = "you weight is normal";
        result2.setAttribute("value", resultBMI);
    }

    else if (bmi >= 25 && bmi <= 30) {
        resultBMI = "you are overwight"
        result2.setAttribute("value", resultBMI);
    }

    else if (bmi >= 30.1 && bmi <= 34.9) {
        resultBMI = "First-class obesity";
        result2.setAttribute("value", resultBMI);
    }

    else if (bmi >= 35 && bmi <= 40) {
        resultBMI = "Second-class obesity";
        result2.setAttribute("value", resultBMI);
    }

    else if (bmi > 40) {
        resultBMI = "Third-class obesity";
        result2.setAttribute("value", resultBMI);
    }

}//end function
window.addEventListener("load", start);


//----------------------------------------------------- end To calculate BMI ----------------------------------------------

