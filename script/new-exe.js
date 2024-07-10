const add = function() {
 console.log(2 + 3);
 
};

add();
add()

function runTwice(fun) {
  fun();
  fun();
};

console.log(function() {console.log('12b')});
console.log(runTwice(add))


const  clickButton = () => {
 
  document.querySelector('.js-button')
  .innerHTML = 'loading...';

  setTimeout(function() {
    document.querySelector('.js-button')
      .innerHTML = 'Finished!';
  }, 1000);
};

/*
function addButton() {
  document.querySelector('.message')
    .innerHTML = 'Added';

    setTimeout(function() {
      document.querySelector('.message')
      .innerHTML = '';
    }, 2000)
}
*/

let messageTimeout;

const  addButton = () => {
  document.querySelector('.message')
    .innerHTML = 'Added';

    clearTimeout(messageTimeout)

    messageTimeout = setTimeout(function() {
      document.querySelector('.message')
      .innerHTML = '';
    }, 2000)
};

function toggleTitle() {
  if (document.title === 'New Message') {
    document.title = 'App'
  } else {
    document.title = 'New Message'
  }
}

setInterval(toggleTitle, 5000);

let messages = 2;

let intervalId;

function toggleTitle() {
  if (messages > 0) {
    document.title = '(' + messages + ') New Message'
  } else {
    document.title = 'App';
    clearInterval(intervalId);
  }
}

intervalId = setInterval(toggleTitle, 1000);

function addMessage() {
  messages++;
  if (messages > 0) {
    intervalId = setInterval(toggleTitle, 1000);
  }
}
function removeMessage() {
  if (messages > 0) {
    messages--;
  }
};

function addNum(array, num) {
  return array.map(number => number + num)
};
console.log(addNum([1, 2, 3], 2));
console.log(addNum([-2, -1, 0, 99], 2));

function removeEgg(foods) {
  let eggCount = 0;
  return foods.filter(item => {
    if (item === 'egg') {
        eggCount++;
        return eggCount > 2 ? true : false;
    }
    return true;
  })
}

console.log(removeEgg(['egg', 'apple', 'egg', 'egg', 'ham']));

const multipy = (num1, num2) => num1 * num2;
console.log(multipy(2, 3));
console.log(multipy(7, 10));

function countPositive(nums) {
  let count = 0;

  /*if (!Array.isArray(nums)) {
    console.log('array not');
    return 0;
  }
  */

  nums.forEach(number => {
    if (number > 0) {
      count++;
    }
  });
  return count;
}

console.log(countPositive(1, -3, 5))