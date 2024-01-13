  // clousers
  function z() {
    var b = 400;
    function x() {
      var a = 7;
      function y() {
        console.log(a, b);
      }
      y();
    }
    x();
  }
  z();

  function x() {
    for (var i = 1; i <= 5; i++) {
      function close(x) {
        setTimeout(function () {
          console.log(x);
        }, i * 1000);
      }
      close(i);
    }
    console.log("Javascript");
  }

  x();

// function x() {
//   var a = 7;
//   function y() {
//     console.log(a);
//   }
//   a++;
//   y();
// }
// x();

// function x() {
//   var i = 1;
//   setTimeout(function () {
//     console.log(i);
//   }, 3000);
//   console.log("Javascript");
// }

// x();


