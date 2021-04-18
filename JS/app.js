<<<<<<< HEAD
// first of all add the codes of the images container sec from the html
<<<<<<< HEAD
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000); // Change image every 2 seconds
}
=======
// var myIndex = 0;
// carousel();
=======
'use strict';
>>>>>>> 4dfb62673d04a008e41fdd121b1e596537028aa4

// }

/////////////declare an array to add the cities/////

const cities = ['amman', 'karak', 'ewe'];
const description = ['loremAmman', 'loremKarak', 'urlImgkarak'];
const image = ['urlImgAmman', 'urlImgkarak', 'wewdsa'];
const price = [50, 150, 100];
const category = ['Treatment', 'Religious', 'Treatment'];
///////////////end of the cities info array//////

let locations = [];

function Categories(name, description, image, price, category) {
  (this.name = name), (this.description = description);
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

    price.textContent = 'Price: ' + locations[i].price;
    heading.textContent = locations[i].locationName;
    description.textContent = locations[i].description;
    locationImage.src = locations[i].locationImg;
    reserveBtn.textContent = 'Book Now!'; //add link in array to book
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

<<<<<<< HEAD




















}//end function
>>>>>>> cae89d4ef1623188b210310fa552fa9dc5e5e694
=======
>>>>>>> 4dfb62673d04a008e41fdd121b1e596537028aa4
