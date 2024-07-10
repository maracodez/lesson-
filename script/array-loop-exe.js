//11a
const nums = [10, 20, 30];

console.log(nums);
nums[0] = 99;
console.log(nums);

//11b
function getLastValue(array) {
  let lastIndex = array.length - 1;
  return array[lastIndex];
}

console.log(getLastValue([1, 20, 22, 24, 5]));
console.log(getLastValue(['hi', 'hello', 'good']));

//11c
function arraySwap(array) {
  return array.reverse()
}

console.log(arraySwap([1, 20, 22, 24, 5]));
console.log(arraySwap(['hi', 'hello', 'good']));

//11d
for (let i = 0; i <= 10; i += 2) {
  console.log(i)
}

//11e
for (let i = 5; i >= 0; i--) {
  console.log(i)
}

//11f
let i =  0;
 
while (i <= 10) {
  console.log(i);
  i += 2
}

i = 5;

while (i >= 0) {
  console.log(i);
  i--
};

//11g
function increaseByOne(numbers) {
  let newArray = [];
  for (let i = 0; i < numbers.length; i++) {
    newArray.push(numbers[i] + 1);
  }
  return newArray;
}

let numbers = [1, 2, 3];
let increasedNumbers = increaseByOne(numbers);
console.log(increasedNumbers);

//11h
function addOne(array) {
  return array.map(number => number + 1)
}

console.log(addOne([1, 2, 3]));
console.log(addOne([-2, -1, 0, 99]));

//11i
function addNum(array, num) {
  return array.map(number => number + num)
}

console.log(addNum([1, 2, 3], 2));
console.log(addNum([1, 2, 3], 3));
console.log(addNum([-2, -1, 0, 99], 2));

//11j
function addArrays(array1, array2) {
  let resultArray = [];
  for (let i = 0; i < array1.length; i++) {
    resultArray.push(array1[i] + array2[i]);
  }
  return resultArray
}

//11k
console.log(addArrays([1, 1, 2], [1, 1, 3]));
console.log(addArrays([1, 2, 3], [4, 5, 6]));

function countPositive(nums) {
 const positiveNum = nums.filter(number => number > 0);
 
 return positiveNum.length
}

console.log(countPositive([1, -3, 5]));
console.log(countPositive([-2, 3, -5, 7, 10]));

//11L
function minMax(nums) {
  let min = nums[0];
  let max = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < min) {
      min = nums[i];
    }
    if (nums[i] > max) {
      max = nums[i]
    }
  }
  return { min: min, max: max };
}
console.log(minMax([1, -3, 5]));
console.log(minMax([-2, 3, -5, 7,10]));

//11m
console.log(minMax([ null ]));
console.log(minMax([3]))

//11n
function countWords(words) {
  let counts = {};

  for (let string of words) {
    if (counts[string]) {
      counts[string] += 1;
    } else {
      counts[string] = 1;
    }
  }
  return counts;
}
console.log(countWords(['apple', 'grape', 'apple', 'apple', 'orange']));

//11o //11p
const stringArray = ['hello', 'world', 'search','good', 'search'];

let foundIndex = -1;

for (let i = 0;i < stringArray.length; i++) {
  if (stringArray[i] === 'search') {
    foundIndex = i;
    break;
  }
}
console.log(foundIndex);

//11q
function findIndex(array, word) {
  for (let i  = 0; i < array.length; i++) {
    if (array[i] === word) {
      return i;
    }
  }
  return -1
}

console.log(findIndex(['green', 'red', 'blue', 'red'], 'red'));
console.log(findIndex(['green', 'red', 'blue', 'red'], 'yellow'));

//11r.
function removeEgg(foods) {
  let result = [];
  for (let i = 0; i < foods.length; i++) {
    if (foods[i] === 'egg') {
      continue;
    }
    result.push(foods[i]);
  }
  return result;
}

console.log(removeEgg(['egg', 'apple', 'egg', 'egg', 'ham']));

//11s //11t
function removeEgg(foods) {
  let result = [];

  let eggCount = 0;

  foods.reverse();

  for (let i = 0; i < foods.length; i++) {
    if (foods[i] === 'egg' && eggCount < 2) {
      eggCount++;
      continue;
    }
    result.push(foods[i]);
  }
  result.reverse();
  return result;
}

console.log(removeEgg(['egg', 'apple', 'egg', 'egg', 'ham']));


