'use strict';
// first of all add the codes of the images container sec from the html
// var myIndex = 0;
// carousel();

// function carousel() {
//   var i;
//   var x = document.getElementsByClassName("mySlides");
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";  
//   }
//   myIndex++;
//   if (myIndex > x.length) {myIndex = 1}    
//   x[myIndex-1].style.display = "block";  
//   setTimeout(carousel, 2000); // Change image every 2 seconds
// }
// }
/////////////declare an array to add the cities/////

const cities=['amman','karak','ewe'];
const description=['loremAmman','loremKarak','urlImgkarak'];
const image=['urlImgAmman','urlImgkarak','wewdsa'];
const price=[50,150,100];
const category=['Treatment','Religious','Treatment'];
///////////////end of the cities info array//////

let locations = [];

function Categories(name,description,image,price,category){
  this.name=name,
  this.description=description;
  this.image=image;
  this.price=price;
  this.category=category;

  locations.push(this);
}
//////for loop to loop over the cities ifo arrays to insance the objects///////
for (let i = 0; i < cities.length; i++) {
  
  new Categories(cities[i],description[i],image[i],price[i],category[i]); 
   
}
// console.log(locations);
/////////////the end of instaces/////////


let result = document.getElementById('result');

function inject() {

  for (let i = 0; i < locations.length; i++) {

    let locationContainer = document.createElement('div');
    locationContainer.className = "location";
    locationContainer.appendChild(textContainer);
    locationContainer.appendChild(imgContainer);
    
    
    
    let imgContainer = document.createElement('div');
    imgContainer.appendChild(locationImage);
    imgContainer.className = "divLeft";
    

    let textContainer = document.createElement('div');
    
    let description = document.createElement('p');
    
    
    description.className = "description";
    textContainer.appendChild(description);
    textContainer.className = "divRight";
    


    let price = document.createElement('p');
    let heading = document.createElement('h2');
    let locationImage = document.createElement('img');
    let reserveBtn = document.createElement('button');










    textContainer.appendChild(heading);


  

    textContainer.appendChild(price);

    textContainer.appendChild(reserveBtn);

    result.appendChild(locationContainer);


    price.textContent = 'Price: ' + locations[i].price;

  

    heading.textContent = locations[i].locationName;
    description.textContent = locations[i].description;
    locationImage.src = locations[i].locationImg;
    reserveBtn.textContent = 'Book Now!';//add link in array to book

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

  for (let i=0 ;i < locations.length ;i++){
  if (tripCategouries !=='NoCategoury'){
    if (locations[i].category == tripCategouries&&locations[i].price <= budget ) {
      console.log('fadi',locations[i]);
  }}
  else{
    if(locations[i].price <= budget){
      console.log('else',locations[i]);
    }
  }
    
    

  }}
