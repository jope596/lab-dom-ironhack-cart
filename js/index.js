// ITERATION 1

function updateSubtotal(product) {
  console.log ('Calculating Subtotal, yey!');

  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const subtotal = product.querySelector('.subtotal span');

  const subtotalVal = (subtotal.innerHTML = Number(price.innerHTML) * Number(quantity.value));
  

  return subtotalVal;
  
  //... your code goes here
}

function calculateAll() {
  
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  /* const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);*/
  // end of test

  // ITERATION 2
 const allProducts = document.getElementsByClassName('product')
 let firstSubTotal = 0;
 for (let i = 0; i < allProducts.length; i++) {
   firstSubTotal += updateSubtotal(allProducts[i]);
 }
 


  // ITERATION 3
  let total = document.querySelector('#total-value span');
  total.innerHTML=firstSubTotal;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
