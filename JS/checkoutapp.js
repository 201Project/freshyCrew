'use strict';
//-------------start form function for the checkout page By Alaa & Zainb---------------------------------------------------//
let details = document.getElementById('detailsCheckout');
let formCheckout = document.getElementById('formCheckout');
formCheckout.addEventListener('submit', handleSaveCheckout);
let cartCounter=localStorage.getItem('cartCounter');
let counter=document.getElementById('cart');
let cancelBtn=document.getElementById('cancel');
let emptytable=document.getElementById('emptytable');
let stringToArrayData;
let table = document.createElement('table');
let reservedGym = document.getElementById('reservedGym');
if(cartCounter>0)
{
  counter.textContent=localStorage.getItem('cartCounter');
  emptytable.style.display='none';
}
else{
  counter.textContent='';
  localStorage.removeItem('gyms');
  localStorage.removeItem('cartCounter');
  emptytable.style.display='block';
}


function handleSaveCheckout(e) {
  e.preventDefault();
  
  let userName = e.target.userName.value;
  alert('Thanks from buying from us!, '+userName);
  let nameInput=document.getElementById('userName');
  nameInput.value='';
  let email=document.getElementById('email');
  email.value='';
  let phone=document.getElementById('phone');
  phone.value='';
  let address=document.getElementById('address');
  address.value='';
  
}

cancelBtn.addEventListener('click',cancelOrder);
function cancelOrder(){
  let confirmMsg=confirm("are you sure you want to remove all the items from the cart?");
  if(confirmMsg)
  {
    localStorage.removeItem('gyms');
    localStorage.removeItem('cartCounter');
    reservedGym.innerHTML='';
    table.innerHTML='';
    counter.textContent='';
    emptytable.style.display='block';
  }
  else{
    alert('Canceled!');
  }

}
//--------------------------------------------the end of form function for the checkout page By Alaa & Zainb--------------------//

//------------------------------mohamad and nazmih-----------------



function getFromStorage() {
  let headingsArr = ['Image', 'Name', 'Months', 'Price', 'Total', 'Clear item'];
  reservedGym.appendChild(table);
  let trHeadings = document.createElement('tr');
  table.appendChild(trHeadings);
  for (let i = 0; i < headingsArr.length; i++) {
    let tHead = document.createElement('th');
    trHeadings.appendChild(tHead);
    tHead.textContent = headingsArr[i];
  }



  let data = localStorage.getItem('gyms');

  stringToArrayData = JSON.parse(data);
    if(cartCounter>0){
   //hide the empty cart message
    emptytable.style.display='none';
    for (let i = 0; i < stringToArrayData.length; i++) {

      let tr = document.createElement('tr');
      table.appendChild(tr);
  
      let imageTd = document.createElement('td');
      tr.appendChild(imageTd);
      let locationImage = document.createElement('img');
      // reservedGym.appendChild(locationImage);
      locationImage.src = stringToArrayData[i].gymImg;
    
      imageTd.appendChild(locationImage);
  
      let nameTd = document.createElement('td');
      tr.appendChild(nameTd);
      nameTd.textContent = stringToArrayData[i].gymName;
  
  
      let reserveNumberTd = document.createElement('td');
      let reserveNumber = document.createElement('input');
      reserveNumber.type = 'number';
      reserveNumber.value = 1;
      reserveNumber.min = 1;
      reserveNumber.max = 12;
      tr.appendChild(reserveNumberTd);
      reserveNumberTd.appendChild(reserveNumber);
  
      let priceTd = document.createElement('td');
      tr.appendChild(priceTd);
      priceTd.textContent = stringToArrayData[i].gymCoast;
  
      let totalTd = document.createElement('td');
      tr.appendChild(totalTd);
      totalTd.textContent = stringToArrayData[i].gymCoast;
  
      reserveNumber.addEventListener('change', calculateTotal);
      function calculateTotal() {
        totalTd.textContent = stringToArrayData[i].gymCoast * reserveNumber.value;
      }
      let clearTd=document.createElement('td');
      tr.appendChild(clearTd);
      let clearIcon=document.createElement('i');
      let clearBtn=document.createElement('button');
      
      clearBtn.style.fontSize='24px';
      clearIcon.className='fas fa-trash-alt';
      clearTd.appendChild(clearBtn);
      clearBtn.appendChild(clearIcon);
      clearBtn.textContent='clear';
      clearBtn.addEventListener('click',clearItem);
      //<button style='font-size:24px'><i class='fas fa-trash-alt'></i></button>
      function clearItem(){
        stringToArrayData[i]=stringToArrayData[stringToArrayData.length-1];
        stringToArrayData.pop();
        localStorage.setItem('gyms',JSON.stringify(stringToArrayData));
        tr.innerHTML="";
        cartCounter--;
        localStorage.setItem('cartCounter',cartCounter);
        if(cartCounter>0){
          counter.textContent=localStorage.getItem('cartCounter');

        }
        else{
          emptyContent();
        }
      }
    }
  }
  else
  {
    emptyContent();
  }
}
  getFromStorage();
  

function emptyContent(){
  reservedGym.innerHTML='';
  table.innerHTML='';
  emptytable.style.display='block';
}