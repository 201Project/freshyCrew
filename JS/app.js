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



let locations = [
  {
    locationName: 'Amman',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas quisquam molestias, iusto facilis cum quidem ad in maxime minima, eveniet esse hic. Sunt facere minus dolor ipsa fuga nisi ex.',
    locationImg: './img/locations/2.jpg',
    price: 100,
    category: 'city',
    // visitors: localStorage

  },
  {
    locationName: 'Amman',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas quisquam molestias, iusto facilis cum quidem ad in maxime minima, eveniet esse hic. Sunt facere minus dolor ipsa fuga nisi ex.',
    locationImg: './img/locations/2.jpg',
    price: 100,
    category: 'treatment',
    // visitors: localStorage
  },
  {
    locationName: 'Amman',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas quisquam molestias, iusto facilis cum quidem ad in maxime minima, eveniet esse hic. Sunt facere minus dolor ipsa fuga nisi ex.',
    locationImg: 'img/locations/name',
    price: 160,
    category: 'city',
    // visitors: localStorage
  },
  {
    locationName: 'Amman',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas quisquam molestias, iusto facilis cum quidem ad in maxime minima, eveniet esse hic. Sunt facere minus dolor ipsa fuga nisi ex.',
    locationImg: 'img/locations/name',
    price: 150,
    category: 'city',
    // visitors: localStorage
  },

  {
    locationName: 'Amman',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas quisquam molestias, iusto facilis cum quidem ad in maxime minima, eveniet esse hic. Sunt facere minus dolor ipsa fuga nisi ex.',
    locationImg: 'img/locations/name',
    price: 200,
    category: 'city',
    // visitors: localStorage
  }




];



let form = document.getElementById('customerData');
let result = document.getElementById('result');
form.addEventListener('submit', submit);


function inject() {

  for (let i = 0; i < locations.length; i++) {

    let locationContainer = document.createElement('div');
    let description = document.createElement('p');
    let price= document.createElement('p');
    let heading = document.createElement('h2');
    let locationImage = document.createElement('img');
    let reserveBtn= document.createElement('button');

    locationContainer.appendChild(heading);
    locationContainer.appendChild(price);
    locationContainer.appendChild(description);
    locationContainer.appendChild(locationImage);
    locationContainer.appendChild(reserveBtn);
    result.appendChild(locationContainer);

   
    price.textContent=locations[i].price;
    heading.textContent = locations[i].locationName;
    description.textContent = locations[i].description;
    locationImage.src = locations[i].locationImg;
    reserveBtn.textContent='Book Now!';//add link in array to book
    
  }










}
inject();


function submit(event) {
  event.preventDefault();
  let from = event.target.from.value;
  let count = event.target.numberOfPpl.value;
  let budget = event.target.slider.value;
  console.log(count);




}
