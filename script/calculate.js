let calculation = JSON.parse(localStorage.getItem('calculation'));


 
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
    .innerHTML = '';
}
