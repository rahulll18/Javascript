const radius = [2, 1, 3, 4];

const area = function (radius) {
  return Math.PI * radius * radius;
};

const circumference = function (radius) {
  return 2 * Math.PI * radius;
};

const calculate = function (radius, logic) {
  const outputArea = [];
  for (let i = 0; i < radius.length; i++) {
    outputArea.push(logic(radius[i]));
  }
  return outputArea;
};

const calculateArea = function (radius) {
  const outputArea = [];
  for (let i = 0; i < radius.length; i++) {
    outputArea.push(Math.PI * radius[i] * radius[i]);
  }
  return outputArea;
};

console.log(calculate(radius, area));
console.log(calculate(radius, circumference));
console.log(calculateArea(radius));

//Map
console.log(radius.map(area));

//Creating map array prototype for calculate function

Array.prototype.calculate = function (logic) {
  const outputArea = [];
  for (let i = 0; i < this.length; i++) {
    outputArea.push(logic(this[i]));
  }
  return outputArea;
};

console.log(radius.calculate(circumference));
