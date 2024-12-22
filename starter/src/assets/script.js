// Global variable for shopping cart 
let totalPaid = 0;

/* Create an array named products which you will use to add all of your product object literals that you create in the next step. */

let products = [];
/* Create 3 or more product objects using object literal notation 
   Each product should include five properties
   - name: name of product (string)
   - price: price of product (number)
   - quantity: quantity in cart should start at zero (number)
   - productId: unique id for the product (number)
   - image: picture of product (url string)
*/
let cherry = {
  name:"cherry",
  price:2.99,
  quantity:0,
  image:'images/cherry.jpg',
  productId:100
};
products.push(cherry);
let orange = {
  name:"orange",
  price:0.99,
  quantity:0,
  image:"images/orange.jpg",
  productId:101
};
products.push(orange);
let strawberry = {
  name:"strawberry",
  price:1.99,
  quantity:0,
  image:"images/strawberry.jpg",
  productId:102
}; 
products.push(strawberry);

/* Images provided in /images folder. All images from Unsplash.com
   - cherry.jpg by Mae Mu
   - orange.jpg by Mae Mu
   - strawberry.jpg by Allec Gomes
*/

/* Declare an empty array named cart to hold the items in the cart */
let cart = [];

/* Helper function
  - Finds a product from a list.
  - param productID
  - param list (Can be current Shopping Cart or Produce List)
*/
function getProductByID(productId, productList){
  return products.find(produce => produce.productId === productId);
}

/* Create a function named addProductToCart that takes in the product productId as an argument
  - addProductToCart should get the correct product based on the productId
  - addProductToCart should then increase the product's quantity
  - if the product is not already in the cart, add it to the cart
*/
function addProductToCart(produceId){
  let foundProduce = getProductByID(produceId, cart);
  if(!cart.includes(foundProduce)){
    cart.push(foundProduce);
  }
  increaseQuantity(produceId);
}

/* Create a function named increaseQuantity that takes in the productId as an argument
  - increaseQuantity should get the correct product based on the productId
  - increaseQuantity should then increase the product's quantity
*/
function increaseQuantity(productId) {
  let cartItem = getProductByID(productId, cart);
  if (cartItem) {
    cartItem.quantity += 1;
  }
}


/* Create a function named decreaseQuantity that takes in the productId as an argument
  - decreaseQuantity should get the correct product based on the productId
  - decreaseQuantity should decrease the quantity of the product
  - if the function decreases the quantity to 0, the product is removed from the cart
*/
function decreaseQuantity(productId) {
  let cartItem = getProductByID(productId, cart);
  
  if (cartItem) {
    if (cartItem.quantity > 1) {
      cartItem.quantity -= 1;
    } else {
    cartItem.quantity = 0;
   
    const index = cart.indexOf(cartItem);
    if (index > -1) { 
      cart.splice(index, 1);
    }
    }
  }
}

/* Create a function named removeProductFromCart that takes in the productId as an argument
  - removeProductFromCart should get the correct product based on the productId
  - removeProductFromCart should update the product quantity to 0
  - removeProductFromCart should remove the product from the cart
*/
function removeProductFromCart(productId) {
  let cartItem = getProductByID(productId, cart);

  if (cartItem) {
    cartItem.quantity = 0;
    const index = cart.indexOf(cartItem);
    if (index > -1) { 
      cart.splice(index, 1);
    }
  }
}

/* Create a function named cartTotal that has no parameters
  - cartTotal should iterate through the cart to get the total cost of all products
  - cartTotal should return the total cost of the products in the cart
  Hint: price and quantity can be used to determine total cost
*/
function cartTotal() {
  let cartSum = 0;

  for (let i = 0; i < cart.length; i++) {
    let total = cart[i].price * cart[i].quantity;
    cartSum += total; 
  }

  return cartSum;
}

/* Create a function called emptyCart that empties the products from the cart */
function emptyCart(){
  cart = [];
}

/* Create a function named pay that takes in an amount as an argument
  - amount is the money paid by customer
  - pay will return a negative number if there is a remaining balance
  - pay will return a positive number if money should be returned to customer
  Hint: cartTotal function gives us cost of all the products in the cart  
*/
function pay(amount) {
  totalPaid += amount;
  let remaining = totalPaid - cartTotal();
  if (remaining >= 0){
    totalPaid = 0;
    emptyCart();
  }

  return parseFloat(remaining.toFixed(2));
}

/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/


/* The following is for running unit tests. 
   To fully complete this project, it is expected that all tests pass.
   Run the following command in terminal to run tests
   npm run test
*/

module.exports = {
   products,
   cart,
   addProductToCart,
   increaseQuantity,
   decreaseQuantity,
   removeProductFromCart,
   cartTotal,
   pay, 
   emptyCart,
   /* Uncomment the following line if completing the currency converter bonus */
   // currency
}
