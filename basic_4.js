//function statement or funtion declaration
function a() {
  console.log("a called");
}

//function expression

var b = function (param1) {
  console.log(param1);
  return function(){

  }
};

function r() {
  console.log("r function");
}

a();
b(function () {});
b(r);
console.log(b())

//Anonymous function
function xyz() {
  console.log("anonymous function called");
}

//Named function expression
var t = function c() {
  console.log("Named funtion expression called");
};
