console.log("Start");

setTimeout(function cb() {
  console.log("Callback");
}, 2000);

document.getElementById("clickMe").addEventListener("click", function callB() {
  console.log("Button Clicked");
});


console.log("End");
