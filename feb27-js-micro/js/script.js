var login = document.getElementById('login');
var loginForm =
'<form>'+
'  <h1>Please Login</h1>'+
'  <label>'+
'    <span>username</span>'+
'    <input type="text" placeholder="username" />'+
'  </label>'+
'  <label>'+
'    <span>Password</span>'+
'    <input type="password" placeholder="password" />'+
'  </label>'+
'  <label>'+
'    <span></span>'+
'    <input type="submit" value="submit" />'+
  '</label>'+
'</form>';
login.innerHTML = loginForm;
var form = document.querySelector('#login form');

document.querySelector('input[type="submit"]').addEventListener('click', function(e) {
  e.preventDefault();
  allInputs();
});

function allInputs() {
  var formInputs = [];
  for (var i = 0; i < form.length - 1; i++) {
    formInputs.push(form.elements[i].value);
  }
  console.log( dropCapInputs(formInputs));
}


function dropCapInputs(arr) {
  if (arr.constructor === Array) {
    arr.forEach(function(e, i) {
      arr[i] = arr[i].toLowerCase();
    });
  }
  console.log(arr);
  return arr;
}
