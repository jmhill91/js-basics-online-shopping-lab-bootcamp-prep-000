var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  function price(min,max){
var price=Math.floor(Math.random()*(min-max+1)+min);
}
var item2={
  itemName:item,
  itemPrice:price
};
function getCart(){
  return `${itemName[i]}` +", "+ `${itemPrice[i]}`
}

cart.push(`${item} has been added to your cart.`);
i++
return cart
}


function viewCart() {
if(0===cart.length){
  return "Your shopping cart is empty."
}
else(cart.lenght>=1,i++)
  return `In your cart, you have ${item} at ${price}`

}


function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
