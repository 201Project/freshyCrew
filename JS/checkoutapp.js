'use strict';
//-------------start form function for the checkout page By Alaa & Zainb---------------------------------------------------//
let details = document.getElementById('detailsCheckout');
let formCheckout = document.getElementById('formCheckout');
formCheckout.addEventListener('submit', handleSaveCheckout);

function handleSaveCheckout(e){
 e.preventDefault();
let userName = e.target.userName.value;
let email = e.target.email.value;
let phone = e.target.phone.value ;
let address = e.target.address.value;
let ulElement = document.createElement('ul');
details.appendChild(ulElement);
let infoUser = [userName,email,phone,address];
let liElement1=document.createElement('li');
let liElement2=document.createElement('li');
let liElement3=document.createElement('li');
let liElement4=document.createElement('li'); 

  ulElement.appendChild(liElement1);
  ulElement.appendChild(liElement2);
  ulElement.appendChild(liElement3);
  ulElement.appendChild(liElement4);

  liElement1.textContent = `Name:${userName} `;
  liElement2.textContent = `Email: ${email}`;
  liElement3.textContent = `Phone:${phone}`;
  liElement4.textContent = `Address:${address}` ;


}

//--------------------------------------------the end of form function for the checkout page By Alaa & Zainb--------------------//

//------------------------------mohamad and nazmih-----------------

let stringToArrayData;
let reservedGym = document.getElementById('reservedGym');


function getFromStorage() {
  let data = localStorage.getItem('gyms');
  //console.log('getFromStorage' + data);

  stringToArrayData = JSON.parse(data);
  //console.log('stringToArrayData' + stringToArrayData);

  console.log(stringToArrayData);

  let heading = document.createElement('h2');
  reservedGym.appendChild(heading);
  heading.textContent = stringToArrayData.name;

  let price = document.createElement('p');
  reservedGym.appendChild(price);
  price.textContent = 'Price: ' + stringToArrayData.price;

  let locationImage = document.createElement('img');
  reservedGym.appendChild(locationImage);
  locationImage.src = stringToArrayData.image;

  




}
getFromStorage();
