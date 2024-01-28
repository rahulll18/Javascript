//destrucuring array

const fruits = ["orange", "apple", "mango", "pineapple"];

const [one, two, three, four] = fruits;

console.log(one);
console.log(four);
console.log(three);

const vehicles = ["mustang", "f-150", "expedition"];

const [car, truck, suv] = vehicles;

console.log(car);
console.log(truck);
console.log(suv);

//destructuring object
const js = { color: "red", naam: "rahul" };

const { color, naam } = js;

console.log(color);
console.log(naam);

const props = {
  brand: "Ford",
  model: "Mustang",
  type: "car",
  year: 2021,
  color: "red",
};

function myVehicle(propsVehicle) {
  console.log(propsVehicle.brand);
  console.log(propsVehicle.model);
  console.log(propsVehicle.type);
  console.log(propsVehicle.color);
}

myVehicle(props);
