let counter=document.getElementById('cart');
counter.textContent=localStorage.getItem('cartCounter');
let icon=document.createElement('i');
counter.appendChild(icon);
icon.className='fa fa-shopping-cart';
icon.style.fontSize='24px';