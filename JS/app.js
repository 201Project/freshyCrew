'use strict';
let locations = [];

let result = document.getElementById('result');


const gymName = ['gym1', 'gym2', 'gym3', 'gym4', 'gym5', 'gym6', 'gym7', 'gym8'];
const gymLocation = ['Amman', 'Zarqa', 'Irbid', 'Amman', 'Zarqa', 'Irbid', 'Online', 'Online'];
const gymDesq = ['FirstDesqAmman', 'SecondDesqZarqa', 'ThirdDesqIrbid', '2FirstDesqAmman', '2SecondDesqZarqa', '2ThirdDesqIrbid', 'FIRSTonline', 'SecondOnline'];
const gymImg = ['./img/0.jpg', 'SecondimgZarqa', 'ThirdimgIrbid', '2FirstimgAmman', '2SecondimgZarqa', '2ThirdimgIrbid', 'FIRSTimgonline', 'SecondimgOnline'];
const gymCoast = [50, 150, 100, 120, 150, 200, 75, 250];
const gymGender = ['Men', 'Women', 'Men', 'Mix', 'Men', 'Mix', 'Mix', 'Mix'];

function GymCategories(name, cities, description, image, price, gender) {
  this.gymName = name;
  this.gymLocation = cities;
  this.gymDesq = description;
  this.gymImg = image;
  this.gymCoast = price;
  this.gymGender = gender;

  locations.push(this);
}
for (let i = 0; i < gymLocation.length; i++) {
new GymCategories(gymName[i], gymLocation[i], gymDesq[i], gymImg[i], gymCoast[i], gymGender[i]);

}
 let clickedItem=[];
if (localStorage.getItem('gyms') !== null) {
   let parsedStorage = JSON.parse(localStorage.getItem('gyms'));
  clickedItem = parsedStorage;
}

GymCategories.prototype.inject =function(gym){


    let locationContainer = document.createElement('div');
    locationContainer.className = 'location';
    result.appendChild(locationContainer);

    let imgContainer = document.createElement("div");
    imgContainer.className = "divLeft";
    locationContainer.appendChild(imgContainer);

    let locationImage = document.createElement("img");
    imgContainer.appendChild(locationImage);
    locationImage.src = gym.gymImg;

    let textContainer = document.createElement("div");
    textContainer.className = "divRight";
    locationContainer.appendChild(textContainer);

    let heading = document.createElement("h2");
    textContainer.appendChild(heading);
    heading.textContent = gym.gymName;

    let description = document.createElement("p");
    description.className = "description";
    textContainer.appendChild(description);
    description.textContent =gym.gymDesq;

    let price = document.createElement("p");
    textContainer.appendChild(price);
    price.textContent = 'Price: ' + gym.gymCoast;

    let reserveBtn = document.createElement("button");
    textContainer.appendChild(reserveBtn);
    reserveBtn.id='booknow';
    // console.log(reserveBtn);
    reserveBtn.textContent = 'Book Now!'; //add link in array to book
// console.log(this);

    reserveBtn.addEventListener('click', goToCheckout);

    function goToCheckout(event) {
      event.preventDefault();
      let count = 0;
     console.log(gym);

            if(!(clickedItem.includes(gym)))
            {
              alert('added!');
              clickedItem.push(gym);
              let stringOfLocations = JSON.stringify(clickedItem);
              localStorage.setItem('gyms', stringOfLocations);
              if(localStorage.getItem('cartCounter')){
                let paresedNumber=parseInt(localStorage.getItem('cartCounter'));
                localStorage.setItem('cartCounter',paresedNumber+1);
              }
              
              else
              {
                count++;
                localStorage.setItem('cartCounter',count);
              }
              let counter=document.getElementById('cart');
              counter.textContent=localStorage.getItem('cartCounter');
            }
            else{
              alert('already there');
            }
          }

}
for(let i=0;i<locations.length;i++){
  GymCategories.prototype.inject(locations[i]);
}



let OnlineCourse;

let form = document.getElementById("customerData");


form.addEventListener('submit', handleCustomerSubmit);

function handleCustomerSubmit(event) {
  event.preventDefault();

  let place = event.target.categouryPlace.value;

  let genderCategouries = event.target.categouryGender.value;

  if (event.target.Online.checked) {
    OnlineCourse = 'Online';
  }
  else {
    OnlineCourse = '';
  }





    result.innerHTML="";

for (let i = 0; i < locations.length; i++) {
  if (locations[i].gymLocation == OnlineCourse) {

    GymCategories.prototype.inject(locations[i]);

    console.log('first',GymCategories);


    }  if ((locations[i].gymGender == genderCategouries) && (locations[i].gymLocation == place)) {
      GymCategories.prototype.inject(locations[i]);

      // console.log('secondelse', locations[i]);


    // }else if ((locations[i].gymGender == genderCategouries) && (genderCategouries !== 'NoCategoury')){

    //   console.log('third', locations[i]);

    // } else if  ((locations[i].gymLocation == place) && (place !== 'NoPlaceCategoury')){
    //   console.log('fourth', locations[i]);

  }
}

   
}
