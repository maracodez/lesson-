const hour = 19;

const name = 'mara'

if (hour <= 11) {
  console.log(`Good morning ${name}`)
} else if (hour <= 17) {
   console.log(`Good afternoon ${name}`)
}else {
  console.log(`Goodnight ${name}`)
}

const age = 5;

const isHoliday = false;

if ((age <= 6 || age >= 65) && !isHoliday) {
  console.log('Discount')
} else{
  console.log('No Discount')
}

const randomNumber = Math.round();

if (randomNumber < 0.5) {
  result = 'head'
} else {
  result = 'tails'
}

//let guess = 'tail';

//if (result === guess) {
//  console.log('You win')
//} else {
 // console.log('You lose')
//}

let guess = 'head';
//console.log(guess ? 'You win' : 'You lose') 
let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses:0,
  };
//const score = {
  //wins: 0,
  //losses: 0
//}

function playGame(guess) {
  guess  = 'tail', 'head';
  lastGame()
}
function lastGame() {
  console.log(guess);
  console.log(`wins: ${score.wins}, losses: ${score.losses}`);
}
localStorage.setItem('score', JSON.stringify(score));
let scoreString = JSON.stringify(score);
console.log(scoreString)

function convertToFahrenhet(celsius) {
  return (celsius * 9 / 5) + 32
}

console.log(convertToFahrenhet(25));

function convertToCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9
}

console.log(convertToCelsius(86));

function convertTemperature(degrees, unit) {
 if (unit === 'C'){
  return(degrees * 9 / 5) + 32 + 'F';
 }else if (unit === 'F') {
  return((degrees - 32) * 5 / 9) + 'C';
 } else{
  return 'invalid unit. Please use "C" for celsius or "F" fahrenheit.'
 }
}

console.log(convertTemperature(25, 'C'));
console.log(convertTemperature(86, 'F'));

//object

let object1 = {
  product: 'basketball',
  price: 2095,
  'delivery-time': '3 day'
};
console.log(object1);
object1.price += 500;
console.log(object1.price);
console.log(object1['delivery-time'])

const productComparator = {
  comparePrice: function(product1, product2) {
    if (product1.price < product2.price){
      return product1;
    } else {
      return product2
    };
  },
  isSameProduct: function (product1, product2) {
    return product1.name === product2.name && product1.price === product2.price;
  }
};

const product1 =  {
  name: 'product 1',
  price: 20
};
const product2 = {
  name: 'product 1',
  price: 20
};
const product3 = {
  name: 'product 2',
  price: 15
};

const cheaperProduct = productComparator.comparePrice(product1, product2);
console.log(`The cheaper product is ${cheaperProduct.name} with a price of $${cheaperProduct.price}`);

console.log(productComparator.isSameProduct(product1, product2));
console.log(productComparator.isSameProduct(product1, product3));

//convert a string to a lowercase
const originalString = 'Good Morning';
const lowerCaseString = originalString.toLowerCase();
console.log(lowerCaseString);

//repeat a string
const originalString1 = 'test';
const repeatString = originalString1.repeat(2);
console.log(repeatString)


//let calculation = '';

let calculation = JSON.parse(localStorage.getItem('calculation'))
 
function updateCalculation(value) {
 calculation += value;
 document.querySelector('.js-calculation')
  .innerHTML =  calculation;
};
function calculationResult() {
  if (calculation.includes('=')) {
  try {
    const result = eval(calculation.slice(0, -1));
    document.querySelector('.js-calculation')
      .innerHTML =  result;
    calculation = result.toString(); 
  } catch (e) {
    document.querySelector('.js-calculation')
      .innerHTML = ("Error in calculation: ", e);
  }
} else  {
  document.querySelector('.js-calculation')
    .innerHTML = ("Calculation must end with '=' to evaluate.")
}
}

localStorage.setItem('calculation', JSON.stringify(calculation))

function clearCalculation() {
  calculation = '';
  document.querySelector('.js-calculation')
    .innerHTML = 'Calculation Cleared';
}

/*clearCalculation();
 
updateCaculation('1+1');
updateCaculation('=');
calculationResult()*/

