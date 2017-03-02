var h1 = document.createElement('h1');
var content = document.getElementById('content');
content.appendChild(h1).textContent = "yo wat up";

var para = document.createElement('p');
content.appendChild(para).textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

var anchor = document.createElement('a');
content.appendChild(anchor).textContent = 'click dis';

var ul = document.createElement('ul');
content.appendChild(ul);
content.insertBefore(ul, para);

var form = document.createElement('form');
content.appendChild(form);
var first = document.createElement('input');
form.appendChild(first).placeholder = 'enter your first name';
var last = document.createElement('input');
form.appendChild(last).placeholder = 'enter your last name';
var email = document.createElement('input');
form.appendChild(email).placeholder = 'enter your email';
var password = document.createElement('input');
form.appendChild(password).placeholder = 'enter your password';
password.type = 'password';
var number = document.createElement('input');
number.type = 'number';
form.appendChild(number);
var breakTag = document.createElement('br');
form.appendChild(breakTag);
var submit = document.createElement('input');
form.appendChild(submit).value = 'submit';
submit.type = "submit";
content.insertBefore(form, anchor);

var array = [];

submit.addEventListener('click', function(e) {
  e.preventDefault();

  getUser();
});

number.addEventListener('change', function functionName(e) {
  e.preventDefault();

  // if (e.target.value >= 0) {
  //   console.log(e.target.value);
  // }
});

//the hard way
// function getUser() {
//   array.push(first.value);
//   array.push(last.value);
//   array.push(email.value);
//   array.push(password.value);
//
//   console.log(array);
//
//   first.value = '';
//   last.value = '';
//   email.value = '';
//   password.value = '';
// }

//this way is easier for multiple elements
function getUser() {
  // console.log(form);
  // for (var i = 0; i < form.elements.length; i++) {
  //   array.push(form.elements[i].value);
  // }
  // console.log(array);
  var loopNum = parseInt(number.value);
  if (number.value <= 100) {
    for (var i = 1; i < loopNum + 1; i++) {
      var li = document.createElement('li');
      ul.appendChild(li).textContent = i;
    }
  }else{
    alert('lower your number below 100');
  }

}
