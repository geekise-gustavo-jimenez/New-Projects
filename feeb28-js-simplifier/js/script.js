// document.querySelector('input').addEventListener('click', function() {
//   // console.log(addNumber(1, 3, 4));
//   // console.log(joe(3, 'gus', 2));
//
// });



// function firstName() {
//   return 'Gustavo';
// }
//
// function lastName() {
//   return 'Jimenez';
// }
//
// console.log(firstName() + ' ' +lastName());
//

// var joe = function(num1, num2) {
//   // console.log(arguments);
//   var total = 0;
//   for (var i = 0; i < arguments.length; i++) {
//     if (typeof arguments[i] !== 'string') {
//       total = arguments[i] + total;
//     }
//   }
//   return total;
// };
var form = document.querySelector('form');

document.querySelector('input[type="submit"]').addEventListener('click', function(e) {
  e.preventDefault();
  getInfo();

});
function getInfo() {
  console.log('welcome ' + getName(form) + ' ' + 'to your site. Your email is' + getEmail(form) + getChecks(form));
}

function getEmail(arr) {
  var emails ='';
  for (var i = 0; i < arr.elements.length; i++) {
    if (arr.elements[i].type === 'email') {
      emails = emails + arr.elements[i].value;
    }
  }
  return emails;
}

function getName(arr) {
  var names = '';
  for (var i = 0; i < arr.elements.length; i++) {
    if (arr.elements[i].type === 'text') {
      names = names + arr.elements[i].value;
    }
  }
  return names;
}


function getChecks(arr) {

  for (var i = 0; i < arr.elements.length; i++) {
    if (arr.elements[i].type === 'checkbox' && arr.elements[i].hasAttribute === 'checkbox'){
      value = value + arr.elements[i].value;
    }
  }
  return '. You signed up for the spam' ;
}





// function addNumber(e, f, g) {
//   return (e + f) / g;
// }
