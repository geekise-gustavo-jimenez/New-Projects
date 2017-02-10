// iife immediatley invoked func. expr. save this for last
// (function functionName(){

// function declaration

function funcDec(userMessage, userAge) {
  // alert('this is from a declaration');
  console.log(userMessage, userAge);
}
// parameter
// arguement
funcDec('goodbye', 21);
var myNum;//undefined variable
// function expression
  var funcExp = function() {
    myNum = 3;
    console.log(myNum);
    // alert('this is from a expression');
    // funcDec();
  }();
  console.log(myNum);

// ^if it has parentheses at end it calls it for you without this: funcExp();


// scope a variable that exists only within the function
 //return
function getFullName(a, b) {
  console.log(a);
  console.log(b);

  return a + ' ' + b; //this part has to be last in the function

}

console.log(getFullName('Matt', 'Higley'));
// }());

function getUserName() {
  // alert('get user name');
  var userName = prompt("what yo name");
  var userMsg = 'hello' + userName + '!';
  return userMsg;

}

function alertUserName() {
  getUserName();
  alert(getUserName());
}

alertUserName();
