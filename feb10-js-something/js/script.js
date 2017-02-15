var str = "MaTthEw";
var modStr = str.substr(1, 4);
console.log(modStr);
// console.log(str, modStr);
// toLowerCase() - lowercase string
// toUpperCase() - uppercase string
// substr() - get characters from starting index upto & including ending index
// trim() - removes excess spaces before &after


// first function you made that worked by itself!!!!!!!!!!!!!!!!!!!!!!
// function something() {
// return prompt('what yo name').trim();
//
// }
//
//   var modName = function() {
//     var userName = something();
//   var userMsg = userName;
//   var first = userMsg.charAt(1).toUpperCase();
//   var last = userMsg.substr(1).toLowerCase();
//   var whole = first + last;
//   console.log(last);
//   console.log(first);
//
//   return whole;
// }
//
// function alertName() {
//   alert(modName());
// }
//
// alertName();


function changeColor() {
  var randNum = Math.floor(Math.random() * 360) + 1;
  console.log(randNum);
  document.body.style.backgroundColor = 'hsl('+ randNum +' , 50%, 50%)';
}

var extBtn = document.getElementById('external');
var content = document.getElementById('content');
console.log(content);

extBtn.addEventListener('click', function() {
  var name = prompt('what your name');
  content.textContent = name;
});

var nothing = document.getElementById('void');

nothing.addEventListener('click', function() {
  content.textContent = "";
});
