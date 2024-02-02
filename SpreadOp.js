//copying an array using spread operator
let studentNames = ["Daniel", "Jane", "Joe"];

let namess = [...studentNames];

console.log(namess);

//copying object using an spread operator
let user = { name: "John Doe", age: 10 };

let copiedUser = { ...user };
console.log(copiedUser);

//Concatenate or Merge Arrays With the Spread Operator
let maleNames = ["Daniel", "Peter", "Joe"];
let femaleNames = ["Sandra", "Lucy", "Jane"];

let combinedNames = [...maleNames, ...femaleNames];
console.log(combinedNames);

//many nested objects
let maleNames1 = ["Daniel", "Peter", "Joe"];
let femaleNames1 = ["Sandra", "Lucy", "Jane"];
let otherNames = ["Bill", "Jill"];

let morenames = [...maleNames1, ...femaleNames1, ...otherNames];
let names = ["Rahul", "Rohan", ...morenames];
console.log(names);

//Concatenate or Merge Arrays With the Spread Operator
let userName = { name: "John Doe" };
let userSex = { sex: "Male" };

let userMain = { ...userName, ...userSex };
console.log(userMain);

//
const myFunction = (name1, ...rest) => { // used rest operator here
    console.log(name1);
    console.log(rest);
};

let names1 = ["John", "Jane", "John", "Joe", "Joel"];
myFunction(...names1); // used spread operator here

