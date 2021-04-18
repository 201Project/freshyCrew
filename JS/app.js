'use strict';

// }

/////////////declare an array to add the cities/////

const cities = ['amman', 'karak', 'ewe'];
const description = ['loremAmman', 'loremKarak', 'urlImgkarak'];
const image = ['../img/locations/2.jpg', 'urlImgkarak', 'wewdsa'];
const price = [50, 150, 100];
const category = ['Treatment', 'Religious', 'Treatment'];
///////////////end of the cities info array//////

let locations = [];

function Categories(name, description, image, price, category) {
  this.name = name;
  this.description = description;
  this.image = image;
  this.price = price;
  this.category = category;

  locations.push(this);
}
//////for loop to loop over the cities ifo arrays to insance the objects///////
for (let i = 0; i < cities.length; i++) {
  new Categories(cities[i], description[i], image[i], price[i], category[i]);
}
// console.log(locations);
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

    console.log(reserveBtn);
    price.textContent = 'Price: ' + locations[i].price;
    heading.textContent = locations[i].name;
    description.textContent = locations[i].description;
    locationImage.src = locations[i].image;
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

  // let from = event.target.from.value;

  /*let NameReg=event.target.NameRegion.value;
     console.log(NameReg);*/

  let countPer = event.target.numberOfPer.value;
  // console.log(countPer);

  let budget = event.target.slider.value;
  // console.log(budget);

  let tripCategouries = event.target.categoury.value;
  // console.log(tripCategouries);

  let hotelBooked = event.target.hotel.value;

  // console.log(hotelBooked);

  // ----------------------------for loop to loop over the user choices FADI&MOHAMMED--------------------
  for (let i = 0; i < locations.length; i++) {
    if (tripCategouries !== 'NoCategoury') {
      if (
        locations[i].category == tripCategouries &&
        locations[i].price <= budget
      ) {
        console.log('fadi', locations[i]);
      }
    } else {
      if (locations[i].price <= budget) {
        console.log('else', locations[i]);
      }
    }
  }
}
// -------------------------------------------------------------THE END OF for loop to loop over the user choices FADI&MOHAMMED------------
