'use strict';

// }
/////////////declare an array to add the cities/////

const names = ['gym1', 'gym2', 'gym3', 'gym4', 'gym5', 'gym6', 'gym7', 'gym8'];
const cities = ['Amman', 'Zarqa', 'Irbid', 'Amman', 'Zarqa', 'Irbid', 'Online', 'Online'];
const description = ['FirstDesqAmman', 'SecondDesqZarqa', 'ThirdDesqIrbid', '2FirstDesqAmman', '2SecondDesqZarqa', '2ThirdDesqIrbid', 'FIRSTonline', 'SecondOnline'];
const image = ['FirstimgAmman', 'SecondimgZarqa', 'ThirdimgIrbid', '2FirstimgAmman', '2SecondimgZarqa', '2ThirdimgIrbid', 'FIRSTimgonline', 'SecondimgOnline'];
const price = [50, 150, 100, 120, 150, 200, 75, 250];
const category = ['Men', 'Women', 'Men', 'Mix', 'Men', 'Mix', 'Mix', 'Mix'];

///////////////end of the cities info array//////

let locations = [];

function GymCategories(name, cities, description, image, price, category) {
  this.names = name;
  this.cities = cities;
  this.description = description;
  this.image = image;
  this.price = price;
  this.category = category;

  locations.push(this);
}
//////for loop to loop over the cities ifo arrays to insance the objects///////
for (let i = 0; i < cities.length; i++) {
  new GymCategories(names[i], cities[i], description[i], image[i], price[i], category[i]);
}
console.log(locations);
/////////////the end of instaces/////////


let result = document.getElementById('result');
function inject() {
  for (let i = 0; i < locations.length; i++) {

    let locationContainer = document.createElement('div');
    locationContainer.className = 'location';
    result.appendChild(locationContainer);

    let imgContainer = document.createElement('div');
    imgContainer.className = 'divLeft';
    locationContainer.appendChild(imgContainer);

    let locationImage = document.createElement('img');
    imgContainer.appendChild(locationImage);

    let textContainer = document.createElement('div');
    textContainer.className = 'divRight';
    locationContainer.appendChild(textContainer);

    let heading = document.createElement('h2');
    textContainer.appendChild(heading);

    let description = document.createElement('p');
    description.className = 'description';
    textContainer.appendChild(description);

    let price = document.createElement('p');
    textContainer.appendChild(price);

    let reserveBtn = document.createElement('button');
    textContainer.appendChild(reserveBtn);

    price.textContent = 'Price: ' + locations[i].price;
    heading.textContent = locations[i].names;
    description.textContent = locations[i].description;
    locationImage.src = locations[i].locationImg;
    reserveBtn.textContent = 'Book Now!'; //add link in array to book
    // -------------------- mohamad and nazmih -------------------------
    reserveBtn.addEventListener('click', goToCheckout);

    function goToCheckout(event) {
      event.preventDefault();
      let stringOfLocations = JSON.stringify(locations[i]);
      localStorage.setItem('gyms', stringOfLocations);

      console.log(stringOfLocations);

      window.location.href = 'checkout.html';
    }
  }
}


inject();
//--------------------------------------------------------------------------------------------

let form = document.getElementById('customerData');

form.addEventListener('submit', handleCustomerSubmit);

function handleCustomerSubmit(event) {
  event.preventDefault();

  let place = event.target.categouryPlace.value;
  // console.log(budget);

  let genderCategouries = event.target.categouryGender.value;

  let onlineCourse = '';
  if (event.target.online.checked) {
    onlineCourse = 'Online';
    // console.log(onlineCourse);
  }
  else {
    onlineCourse = '';
  }

  //  console.log('onlinehere',onlineCourse);
  console.log(place, genderCategouries);
  // ----------------------------for loop to loop over the user choices FADI&MOHAMMED--------------------
  for (let i = 0; i < locations.length; i++) {
    if (locations[i].cities == onlineCourse) {
      console.log('first', locations[i]);
    }
    if (((locations[i].category == genderCategouries) && (genderCategouries !== 'NoCategoury')) || ((locations[i].cities == place) && (place !== 'NoPlaceCategoury'))) {
      console.log('secondelse', locations[i]);

    }
  }
}
 //REMOVE EVENT LISTENER
// // -------------------------------------------------------------THE END OF for loop to loop over the user choices FADI&MOHAMMED------------

