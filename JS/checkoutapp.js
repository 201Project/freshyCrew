'use strict';
//-------------start form function for the checkout page By Alaa & Zainb---------------------------------------------------//
let details = document.getElementById('detailsCheckout');
let formCheckout = document.getElementById('formCheckout');
formCheckout.addEventListener('submit', handleSaveCheckout);





function handleSaveCheckout(e) {
  e.preventDefault();
  let userName = e.target.userName.value;
  let email = e.target.email.value;
  let phone = e.target.phone.value;
  let address = e.target.address.value;
  let ulElement = document.createElement('ul');
  details.appendChild(ulElement);
  let infoUser = [userName, email, phone, address];
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


}

//--------------------------------------------the end of form function for the checkout page By Alaa & Zainb--------------------//

//------------------------------mohamad and nazmih-----------------

let stringToArrayData;
let reservedGym = document.getElementById('reservedGym');

function getFromStorage() {
  let headingsArr = ['Image', 'Name', 'Quantity', 'Price', 'Total', 'Cancel'];
  let table = document.createElement('table');
  reservedGym.appendChild(table);
  let trHeadings = document.createElement('tr');
  table.appendChild(trHeadings);
  for (let i = 0; i < headingsArr.length; i++) {

    let tHead = document.createElement('th');
    trHeadings.appendChild(tHead);
    tHead.textContent = headingsArr[i];
  }



  let data = localStorage.getItem('gyms');
  console.log('getFromStorage' + data);

  stringToArrayData = JSON.parse(data);

  for (let i = 0; i < stringToArrayData.length; i++) {
    if (stringToArrayData.includes(stringToArrayData[i])) {
      console.log(true);
    }

  }

  for (let i = 0; i < stringToArrayData.length; i++) {
    let tr = document.createElement('tr');
    table.appendChild(tr);

    let imageTd = document.createElement('td');
    tr.appendChild(imageTd);
    let locationImage = document.createElement('img');
    // reservedGym.appendChild(locationImage);
    locationImage.src = stringToArrayData[i].image;
    imageTd.appendChild(locationImage);

    let nameTd = document.createElement('td');
    tr.appendChild(nameTd);
    nameTd.textContent = stringToArrayData[i].names;


    let reserveNumberTd = document.createElement('td');
    let reserveNumber = document.createElement('input');
    reserveNumber.type = 'number';
    reserveNumber.value = 1;
    reserveNumber.min = 1;
    reserveNumber.max = 10;
    tr.appendChild(reserveNumberTd);
    reserveNumberTd.appendChild(reserveNumber);

    let priceTd = document.createElement('td');
    tr.appendChild(priceTd);
    priceTd.textContent = stringToArrayData[i].price;

    let totalTd = document.createElement('td');
    tr.appendChild(totalTd);
    totalTd.textContent = stringToArrayData[i].price;

    reserveNumber.addEventListener('change', calculateTotal);
    function calculateTotal() {
      totalTd.textContent = stringToArrayData[i].price * reserveNumber.value;



    }

  }

}
getFromStorage();

let submitGym = document.getElementById('submitGym');
submitGym.addEventListener('click', thankMsg);
function thankMsg() {
  alert('Thank you ');
}
