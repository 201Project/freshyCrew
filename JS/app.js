'use strict';
let locations = [];
let clickedItem = [];
let cart = document.getElementById('cart');
let icon = document.createElement('i');
function cartIcon() {

  cart.appendChild(icon);
  icon.textContent = '(' + localStorage.getItem('cartCounter') + ')';
  icon.className = 'fa fa-shopping-cart';
  icon.style.fontSize = '24px';
  cart.style.display = 'inline-block';
}

if (localStorage.getItem('gyms') !== null) {
  let lc = localStorage.getItem('gyms');
  let parsedStorage = JSON.parse(lc);
  clickedItem = parsedStorage;
}

let counter=0;
if(localStorage.getItem('cartCounter')){
  counter=localStorage.getItem('cartCounter');
  cartIcon();
}
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


GymCategories.prototype.inject = function (gym) {


  let locationContainer = document.createElement('div');
  locationContainer.className = 'location';
  result.appendChild(locationContainer);

  let imgContainer = document.createElement('div');
  imgContainer.className = 'divLeft';
  locationContainer.appendChild(imgContainer);

  let locationImage = document.createElement('img');
  imgContainer.appendChild(locationImage);
  locationImage.src = gym.gymImg;

  let textContainer = document.createElement('div');
  textContainer.className = 'divRight';
  locationContainer.appendChild(textContainer);

  let heading = document.createElement('h2');
  textContainer.appendChild(heading);
  heading.textContent = gym.gymName;

  let description = document.createElement('p');
  description.className = 'description';
  textContainer.appendChild(description);
  description.textContent = gym.gymDesq;

  let price = document.createElement('p');
  textContainer.appendChild(price);
  price.textContent = 'Price: ' + gym.gymCoast;

  let reserveBtn = document.createElement('button');
  textContainer.appendChild(reserveBtn);

  reserveBtn.textContent = 'Book Now!';


  reserveBtn.addEventListener('click', goToCheckout);
  function goToCheckout() {

    if (!clickedItem.includes(gym)) {
      clickedItem.push(gym);
      console.log('unique');
      let str = JSON.stringify(clickedItem);
      localStorage.setItem('gyms', str);
      counter++;
      localStorage.setItem('cartCounter',counter);
      cartIcon();
    }

  }

}

for (let i = 0; i < locations.length; i++) {
  GymCategories.prototype.inject(locations[i]);
}



let OnlineCourse;

let form = document.getElementById('customerData');


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

  result.innerHTML = "";

  for (let i = 0; i < locations.length; i++) {
    if (locations[i].gymLocation == OnlineCourse) {

      GymCategories.prototype.inject(locations[i]);

      console.log('first', GymCategories);


    } if ((locations[i].gymGender == genderCategouries) && (locations[i].gymLocation == place)) {
      GymCategories.prototype.inject(locations[i]);

      // console.log('secondelse', locations[i]);


      // }else if ((locations[i].gymGender == genderCategouries) && (genderCategouries !== 'NoCategoury')){

      //   console.log('third', locations[i]);

      // } else if  ((locations[i].gymLocation == place) && (place !== 'NoPlaceCategoury')){
      //   console.log('fourth', locations[i]);

    }
  }


}

