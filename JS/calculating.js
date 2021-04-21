'use strict';

//----------------------------------------------------- To calculate ----------------------------------------------
let parent = document.getElementById('addData');




let weight;
let Height;
let resultBMI;
let weight1;

let button
function start() {
    //----------- BMI-------------------------------------------   
    button = document.getElementById("button");
    button.addEventListener("click", calBmi);
    let result1 = document.getElementById("result");
    //result1.setAttribute("value", 0);


}


let bmi;
let resultRange;
function calBmi() {
    weight1 = document.getElementById("weightRange");
    weight = parseInt(document.getElementById("Weight").value);
    Height = parseInt(document.getElementById("Height").value);
    //     if (Height < 110 || Height > 300) {
    //       //alert('hint : maximum height is 300 cm and minimum and minimum height is 110 cm');
    //      //let parent2 = document.getElementById("addData").style.visibility = "hidden";


    //    }else{
    let heightArray = [];
    for (let i = 110; i <= 300; i++) {
        heightArray.push(i);
        //console.log(heightArray[i]);
    }

    let range1;
    let range2;
    for (let j = 0; j < heightArray.length; j++) {


        if (heightArray[j] === Height) {
            if (j === 0) {
                range1 = 17.6;
                range2 = 28.3;
                /*  console.log("r1= " + range1);
                  console.log("r2= " + range2);*/
                resultRange = `${range1} - ${range2} `;
                //   weight1.setAttribute("value", resultRange);

            } else {
                range1 = 35.6;
                range2 = 49.3;
                range1 += (0.6 * j);
                range2 += (0.7 * j)
                /*   console.log("r1= " + range1);
                   console.log("r2= " + range2);*/
                resultRange = `${range1} - ${range2} `;
                //weight1.setAttribute("value", resultRange);

            } break;
        } else {
            // alert('hint : maximum height is 300 cm and minimum and minimum height is 110 cm');
            // weight1.setAttribute("value", 'doesnt make sense');
            resultRange = 'doesnt make sense';

            // parent = document.getElementById("addData").style.display = "none";
        }
    }


    // let result1 = document.getElementById("result");
    // let result2 = document.getElementById("result2");
    bmi = weight / ((Height / 100) * (Height / 100));
    // result1.setAttribute("value", bmi);
    //---------------- the souce of these numbers is -----> https:// m.marefa.org 


    if (bmi < 16.5) {
        resultBMI = "you are severely underweight";
        parent.textContent = '';
        // result2.setAttribute("value", resultBMI);
        underWeight.renderObjects();
        listTips(tipsUnderWeight);

    } else if (bmi >= 16.5 && bmi <= 18.4) {
        resultBMI = "you are underweight";
        parent.textContent = '';
        //  result2.setAttribute("value", resultBMI);
        underWeight.renderObjects();
        listTips(tipsUnderWeight);

    }

    else if (bmi >= 18.5 && bmi <= 24.9) {
        resultBMI = "you weight is normal";
        parent.textContent = '';
        //  result2.setAttribute("value", resultBMI);
        normalWeight.renderObjects();
        listTips(tipsNormalWeight);
    }

    else if (bmi >= 25 && bmi <= 30) {
        resultBMI = "you are overweight";
        parent.textContent = '';
        //  result2.setAttribute("value", resultBMI);
        overWeight.renderObjects();
        listTips(tipsOverWeight);
    }

    else if (bmi >= 30.1 && bmi <= 34.9) {
        resultBMI = "First-class obesity";
        parent.textContent = '';
        // result2.setAttribute("value", resultBMI);
        overWeight.renderObjects();
        listTips(tipsOverWeight);
    }

    else if (bmi >= 35 && bmi <= 40) {
        resultBMI = "Second-class obesity";
        parent.textContent = '';
        //result2.setAttribute("value", resultBMI);
        overWeight.renderObjects();
        listTips(tipsOverWeight);
    }

    else if (bmi > 40) {
        resultBMI = "Third-class obesity";
        parent.textContent = '';
        //  result2.setAttribute("value", resultBMI);
        overWeight.renderObjects();
        listTips(tipsOverWeight);
    }
    button.removeEventListener("click", calBmi);
}
//end function
window.addEventListener("load", start);


//---------------------------- end To calculate  ----------------------------------------------

//------------------------------ start render data for div---------------------
let arrTips = [];


function advice(titlCase, defintion, titlUl, source) {
    this.titlCase = titlCase;
    this.defintion = defintion;
    this.titlUl = titlUl;
    this.source = source;

    arrTips.push(this);

    //video = d.createElement('video'),
}


let underWeight = new advice('What is a good way to gain weight for  underweight people?', 'Being underweight can be a concern if it is the result of poor nutrition or if you are pregnant or have other health concerns. So, if you are underweight, see your doctor or dietitian for an evaluation. Together ,you can plan how to meet your goal weight.', 'Here are some healthy ways to gain weight when you are underweight:', 'https://www.youtube.com/embed/KM3ko1Z4amA');
let normalWeight = new advice('To keep your weight as it is:', ' A healthy weight, or normal weight, means that your Body Mass Index falls within a weight range that is not associated with an increased risk for weight-related diseases and health issues. Body Mass Index is determined by your height and your weight.', 'Here are some healthy ways to keep your weight as it is:', 'https://www.youtube.com/embed/iVdlEWXWXRg');
let overWeight = new advice('What is a good way to  lose weight?', 'Being overweight or fat is having more body fat than is optimally healthy.Being overweight is especially common where food supplies are plentiful and lifestyles are sedentary. As of 2003, excess weight reached epidemic proportions globally, with more than 1 billion adults being either overweight or obese.', ' Here are some healthy ways to lose weight when you are overweight: ', 'https://www.youtube.com/embed/GGP3NbP7O2w');




let tipsUnderWeight = ['Eat more frequently.', 'Choose nutrient-rich foods.', 'Try smoothies and shakes.', 'Watch when you drink.', 'Make every bite count.',
    'Exercise.'];
/*********** */
let tipsNormalWeight = ['Exercise Often.', 'Try Eating Breakfast Every Day.', 'Eat Lots of Protein.', 'Weigh Yourself Regularly.', 'Be Mindful of Your Carb Intake.', 'Lift Weights.'];
/*************** */
let tipsOverWeight = ['Do not skip breakfast.', 'Eat regular meals.', 'Eat plenty of fruit and veg.', 'Get more active.', 'Drink plenty of water.', 'Eat high fibre foods.'];

advice.prototype.renderObjects = function () {
    // let parent = document.getElementById('addData') ;
    // parent = document.getElementById("addData").style.visibility = "visible";





    let titlCaseEl = document.createElement('h1');
    parent.appendChild(titlCaseEl);
    titlCaseEl.textContent = this.titlCase;



    let def = document.createElement('p');
    parent.appendChild(def);
    def.textContent = this.defintion;





    let parent2 = document.getElementById('addData2');
    let par1 = document.createElement('p');
    parent2.appendChild(par1);


    par1.textContent = `This your BMI :${bmi}`;

    let par2 = document.createElement('p');
    parent2.appendChild(par2);
    par2.textContent = `Case : ${resultBMI}`;

    let par3 = document.createElement('p');
    parent2.appendChild(par3);
    par3.textContent = `This is your range: ${resultRange}`;



    let apperVideo = document.createElement('IFRAME')
    apperVideo.setAttribute('src', this.source);
    apperVideo.setAttribute("height", "540");
    apperVideo.setAttribute("width", "1020");
    parent.appendChild(apperVideo);



    /*var videoEl = document.createElement("VIDEO");
 
     if (videoEl.canPlayType("video/mp4")) {
         videoEl.setAttribute("src",this.source);
     } else {
         videoEl.setAttribute("src",this.source);
     }
 
     videoEl.setAttribute("width", "520");
     videoEl.setAttribute("height", "540");
     videoEl.setAttribute("controls", "controls");
     parent.appendChild(videoEl);
     */


    let ULTitleEl = document.createElement('h3');
    parent.appendChild(ULTitleEl)
    ULTitleEl.textContent = this.titlUl;
    console.log(this.titlUl);
    console.log(ULTitleEl);







};

//-------------------------------------------- End render data for div-------------
function listTips(arrList) {

    let UlElement = document.createElement('ul');

    for (let i = 0; i < arrList.length; i++) {

        let tipsResult = document.createElement('li');
        UlElement.appendChild(tipsResult);
        tipsResult.textContent = arrList[i];



    }

    parent.appendChild(UlElement);
}
//-------------------------------------------Chart-------------------------------------
let arrName = [' severely underweight', ' underweight', 'weight is normal', "overweight", 'First-class obesity', 'Second-class obesity', 'Third-class obesity']

let arrBMI = ['bmi < 16.5', 'bmi >= 16.5 && bmi <= 18.4', 'bmi >= 18.5 && bmi <= 24.9', 'bmi >= 25 && bmi <= 30', 'bmi >= 30.1 && bmi <= 34.9', 'bmi >= 35 && bmi <= 40', 'bmi > 40']
function chart() {
    let ctx = document.getElementById('myChart').getContext('2d');

    let chart = new Chart(ctx, {
        // what type is the chart
        type: 'bar',

        //  the data for showing
        data: {
            //  for the names
            labels: arrName,

            datasets: [
                {
                    label: 'bmi',
                    data: [16.5, 18.4, 24.9, 25, 30.1, 34.9, 40],
                    backgroundColor: [
                        '#810000',
                    ],

                    borderWidth: 1
                }
            ]
        },

        options: {

            legend: {
                labels: {
                    color: 'black'

                    // This more specific font property overrides the global property

                }
            }
        }
    });



}








chart();