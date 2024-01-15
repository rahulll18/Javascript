//Array Of Object
const users = [
  { firstname: "rahul", lastname: "avhad", age: 21 },
  { firstname: "namrata", lastname: "avhad", age: 19 },
  { firstname: "harshal", lastname: "avhad", age: 17 },
  { firstname: "shraddha", lastname: "avhad", age: 21 },
];

//List Of Full Name from each object

const fullNames = users.map((x) => x.firstname + " " + x.lastname);
console.log(fullNames);

// Age and its Count

const ageCount = users.reduce((acc, curr) => {
  if (acc[curr.age]) {
    acc[curr.age] += 1;
  } else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});

console.log(ageCount);

//Age And its filter

const ageFilter = users.filter((x) => x.age < 21).map((x) => x.firstname);
console.log(ageFilter);
