const testElement = document.querySelector('.js-button');

if (testElement && testElement.classList.contains('js-button')) {
  console.log('The button has the class "js-button"');
} else {
  console.log('The button does not have the class "js-button"')
};


function toggleButton(buttonNumber) {
  const buttons = document.querySelectorAll('.toggle-button');
  buttons.forEach((button, index) => {
    if (index === buttonNumber) {
      button.innerText = 'ON';
      button.classList.add('is-toggled');
    } else {
      button.innerText = 'OFF';
      button.classList.remove('is-toggled')
    }
  });
 
}


function handleCostKeydown(event) {
  if (event.key === 'Enter') {
    calculateTotal();
  }
}

function calculateTotal() {
  const inputElement = document.querySelector('.js-cost-input');
  let cost = Number(inputElement.value);
  
 const messageElement = document.querySelector('.js-total-cost');
  if (cost < 40) {
    cost  += 10;
    messageElement.innerText = `$${cost}`
  } else if(cost <= 0) {
    messageElement.innerText  = 'Error: cost cannot be less than $0'
  }

}

