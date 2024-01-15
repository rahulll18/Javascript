//Map Function implementaion

const arr = [2, 4, 6, 8];

//Double transformation
function double(x) {
  return 2 * x;
}

console.log(arr.map(double));

//triple transformation
console.log(
  arr.map(function triple(x) {
    return 3 * x;
  })
);

//square tranformation

console.log(arr.map((x) => x * x));

//Filter Transformation

const arr2 = [5, 1, 3, 2, 6];

function isEven(x) {
  return x % 2 === 0;
}

console.log(arr2.filter(isEven));

//greater than 3
console.log(
  arr2.filter(function (x) {
    return x > 3;
  })
);

//Reduce Fuction

const arr3 = [5, 1, 3, 2, 6];

//Normal way to get sum

const getSum = function (arr3) {
  let sum = 0;
  for (let i = 0; i < arr3.length; i++) {
    sum = sum + arr3[i];
  }
  return sum;
};

//Using reduce function

console.log(
  arr3.reduce((acc, curr) => {
    acc = acc + curr;
    return acc;
  }, 0)
);

console.log(getSum(arr3));

//Normal way to get max

function getMax(arr3) {
  let max = 0;
  for (let i = 0; i < arr3.length; i++) {
    if (max < arr3[i]) {
      max = arr3[i];
    }
  }
  return max;
}

console.log(getMax(arr3));

//Using Reduce method

console.log(arr3.reduce(function (acc , curr){
    if(acc < curr) acc = curr;
    return acc;
}))
