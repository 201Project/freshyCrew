'use strict';
//-------------start form function for the checkout page By Alaa & Zainb---------------------------------------------------//
let details = document.getElementById('detailsCheckout');
let formCheckout = document.getElementById('formCheckout');
let button = document.getElementById('submit');
formCheckout.addEventListener('submit', handleSaveCheckout);


function handleSaveCheckout(e) {
  e.preventDefault();
  let userName = e.target.userName.value;
  let email = e.target.email.value;
  let phone = e.target.phone.value;
  let address = e.target.address.value;
  let ulElement = document.createElement('ul');
  details.appendChild(ulElement);
  //let infoUser = [userName,email,phone,address];
  let liElement1 = document.createElement('li');
  let liElement2 = document.createElement('li');
  let liElement3 = document.createElement('li');
  let liElement4 = document.createElement('li');

  ulElement.appendChild(liElement1);
  ulElement.appendChild(liElement2);
  ulElement.appendChild(liElement3);
  ulElement.appendChild(liElement4);

  liElement1.textContent = `Name:${userName} `;
  liElement2.textContent = `Email: ${email}`;
  liElement3.textContent = `Phone:${phone}`;
  liElement4.textContent = `Address:${address}`;
formCheckout.removeEventListener('submit', handleSaveCheckout);

};




//--------------------------------------------the end of form function for the checkout page By Alaa & Zainb--------------------//