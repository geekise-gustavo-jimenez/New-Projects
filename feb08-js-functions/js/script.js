// var userName = prompt("what is yo name");
// var num1 = parseInt(prompt('pick a number'));
// var num2 = parseInt(prompt('pick a number'));

// function declaration
// function funcDec(a, b, c) {
//   alert(a + (b + c));
// }

// this called it making it appear
// funcDec();

// funcDec(userName, num1, num2);

// var car = [car: prompt('what your car'),make: prompt('your make'), model: prompt('your model')]
//
// (function() {
//   var car = {
//     make: 'jeep',
//     model: 'wrangler',
//     color: 'black'
//   };
//
//   function myModel(a) {
//     alert(a.model);
//   }
//
//   // this is crucial to working function
//   myModel(car);
//
// // executible function
//   var funcEx = function(string) {
//     alert(arguments[0]);
//   }('Gus',  7);
  var array = ['gus', 'cobi', 'kevin', 'erick', 'david'].sort();
  var array2 = ['reeses puffs', 'chex', 'kix', 'trix', 'cheerios'].sort();

  var randName = array[Math.floor(Math.random() * array.length)];
  var randCerial = array2[Math.floor(Math.random() * array2.length)];

  var both = function(){
    alert(arguments[0] + '' + arguments[1]);
  }(randName, randCerial);

  // function rand() {
  //   var randName = array.length;
  //   var randArray = Math.ceil(Math.random() * randName) - 1;
  //   alert(array[randArray]);
  // }
  //
  // function rand2() {
  //   var randCerial = array.length;
  //   var randArray2 = Math.ceil(Math.random() * randCerial) - 1;
  //   alert(array2[randArray2]);
  // }
  //
  // // not really known
  // // var both = function() {
  // //   console.log(arguments[0] + '' + arguments[1]);
  // // }(array, array2);
  //
  //
  // rand();
  // rand2();
