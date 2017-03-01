var ul = document.createElement('ul');
// document.body.appendChild(ul);
console.log(document.body);
var p = document.getElementsByTagName('p')[0];

document.body.insertBefore(ul, p);
var ulEl = document.getElementsByTagName('ul')[0];

var numExp = function() {

  // console.log(arguments[0]);
  if (arguments[0] > 0 && !isNaN(parseInt(arguments[0]))) {
    console.log('nice');
    userLoop(parseInt(arguments[0]));
  }else{
    alert('stop');
    newFunc();
  }
};

function newFunc() {
  var askNum = prompt('Please enter a number');
  numExp(askNum);
}

newFunc();

function userLoop(num) {
  for (var i = 1; i < num + 1; i++) {
    // console.log("nice" + i);
    todoItemGen(i);
  }
}
function todoItemGen(i) {
  var li = document.createElement('li');
  ulEl.appendChild(li);
  li.textContent = i;

}
