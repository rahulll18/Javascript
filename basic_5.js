//CallBack Functions in JS

// setTimeout(function () {
//   console.log("Timer");
// }, 3000);

// function x(y) {
//   console.log("x called");
//   y();
// }

// x(function y() {
//   console.log("y called");
// });

//deep about event listners

function attchEventListners() {
  let count = 0;
  document.getElementById("clickMe").addEventListener("click", function () {
    console.log("Button Clicked", ++count);
  });
}

attchEventListners();
