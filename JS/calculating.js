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
                range2 += (0.7 * j);
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
let resultBMI;
function start() {
    //----------- BMI-------------------------------------------   
    let button = document.getElementById("button");
    button.addEventListener("click", calBmi);
    let result1 = document.getElementById("result");
    result1.setAttribute("value", 0)
}
let bmi;
function calBmi() {
    weight = parseInt(document.getElementById("Weight").value);
    Height = parseInt(document.getElementById("Height").value);
    let result1 = document.getElementById("result");
    let result2 = document.getElementById("result2");
    bmi = weight / ((Height / 100) * (Height / 100));
    result1.setAttribute("value", bmi)
    //---------------- the souce of these numbers is -----> https:// m.marefa.org 

 
    if (bmi < 16.5) {
        resultBMI = "you are severely underweight";
        result2.setAttribute("value", resultBMI);
        underWeight.renderObjects();
    } else if (bmi >= 16.5 && bmi <= 18.4) {
        resultBMI = "you are underweight";
        result2.setAttribute("value", resultBMI);
        underWeight.renderObjects();
    }

    else if (bmi >= 18.5 && bmi <= 24.9) {
        resultBMI = "you weight is normal";
        result2.setAttribute("value", resultBMI);
        normalWeight.renderObjects();
    }

    else if (bmi >= 25 && bmi <= 30) {
        resultBMI = "you are overweight"
        result2.setAttribute("value", resultBMI);
        overWeight.renderObjects();
    }

    else if (bmi >= 30.1 && bmi <= 34.9) {
        resultBMI = "First-class obesity";
        result2.setAttribute("value", resultBMI);
        overWeight.renderObjects();
    }

    else if (bmi >= 35 && bmi <= 40) {
        resultBMI = "Second-class obesity";
        result2.setAttribute("value", resultBMI);
        overWeight.renderObjects();
    }

    else if (bmi > 40) {
        resultBMI = "Third-class obesity";
        result2.setAttribute("value", resultBMI);
        overWeight.renderObjects();
    }

}//end function
window.addEventListener("load", start);


//---------------------------- end To calculate BMI ----------------------------------------------

//------------------------------ start render data for div---------------------
let arrTips = [];
function advice(defintion , tips, source){
    this.defintion = defintion;
    this.tips = tips;
    this.source = source;
  
    arrTips.push(this);

  //video = d.createElement('video'),
}


let underWeight = new advice('lorem underWeight','lorem underWeight tips','./img/gympic.jpg');
let normalWeight = new advice('lorem normalWeight','lorem normalWeight tips','./img/gympic.jpg') ;
let overWeight = new advice('lorem overWeight','lorem overWeight tips','./img/gympic.jpg') ;



advice.prototype.renderObjects = function () {
    let parent = document.getElementById('addData');
    
    let def = document.createElement('p');
    parent.appendChild(def);
    def.textContent = this.defintion;


    console.log("22222"+def);

  let tipsElement = document.createElement('p');
  parent.appendChild(tipsElement);
  tipsElement.textContent = this.tips;

  console.log('Helloooo',tipsElement);

 
 let appearImg = document.createElement('img');
 appearImg.setAttribute('src', this.source);
 appearImg.setAttribute('alt'," ");
 parent.appendChild(appearImg);
 
}

//-------------------------------------------- End render data for div-------------