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

const cities=['amman','karak'];
const description=['loremAmman','loremKarak'];
const image=['urlImgAmman','urlImgkarak'];
const price=['100amman','150karak'];
const category=['ammanTreatment','karakTreatment'];
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
console.log(locations);
/////////////the end of instaces/////////


let result = document.getElementById('result');

function inject() {

  for (let i = 0; i < locations.length; i++) {

    let locationContainer = document.createElement('div');
    let imgContainer = document.createElement('div');
    let textContainer = document.createElement('div');

    let description = document.createElement('p');
    let price = document.createElement('p');
    let heading = document.createElement('h2');
    let locationImage = document.createElement('img');
    let reserveBtn = document.createElement('button');


    description.className = "description";
    locationContainer.className = "location";
    locationContainer.appendChild(imgContainer);
    imgContainer.className = "divLeft";
    locationContainer.appendChild(textContainer);
    textContainer.className = "divRight";

    imgContainer.appendChild(locationImage);
    textContainer.appendChild(heading);
    textContainer.appendChild(description);
    // locationContainer.appendChild(locationImage);
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
  console.log(countPer);


  let budget = event.target.slider.value;
  console.log(budget);


  let tripCategouries = event.target.categoury.value;
  console.log(tripCategouries);


  let hotelBooked = event.target.hotel.value;

  console.log(hotelBooked);

  //to hide result

  result.style.display ='none';


  if (budget <= 50) {

    if (tripCategouries === 'NoCategoury') {

    


    } else if (tripCategouries === 'Treatment') {



    } else if (tripCategouries === 'Religious') {



    } else if (tripCategouries === 'Culture') {


    } else if (tripCategouries === 'Entertainment') {



    }


  }else if(budget>50&&budget<=150){


    if (tripCategouries === 'NoCategoury') {

      console.log();


    } else if (tripCategouries === 'Treatment') {



    } else if (tripCategouries === 'Religious') {



    } else if (tripCategouries === 'Culture') {


    } else if (tripCategouries === 'Entertainment') {



    }


  }else if(budget>150&&budget<=250){


    if (tripCategouries === 'NoCategoury') {

  


    } else if (tripCategouries === 'Treatment') {



    } else if (tripCategouries === 'Religious') {



    } else if (tripCategouries === 'Culture') {


    } else if (tripCategouries === 'Entertainment') {



    }


  }





















}//end function
