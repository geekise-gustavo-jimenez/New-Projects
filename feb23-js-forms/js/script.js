var userArray = [];
var form = document.querySelector('form#contact-form');
var submit = document.querySelector('form#contact-form input[type="submit"]');

var logArray = [];
var formTop = document.querySelector('form#login-form');
var logIn = document.querySelector('form#login-form input[type="submit"]');
var custom = document.querySelector('.custom');

var contactArr = [],
    localArr = [];
var username = '';

if (localStorage.getItem('username')) {
  username = localStorage.getItem('username');

}else {
  alert('log in');
  login();
}

submit.addEventListener('click', function(e){
  e.preventDefault();
  console.log(e);

  for (var i = 0; i < form.length - 1; i++) {
    // console.log(form.elements[i].value);
    if (form.elements[i].type !== 'checkbox') {
      userArray.push(form.elements[i].value);

    }
    if (
      form.elements[i].type === 'checkbox' &&
      form.elements[i].checked) {
      userArray.push(true);
    }
  }
  console.log(userArray);
});

function login() {
  logIn.addEventListener('click', function(g) {
    g.preventDefault(g);
    console.log(g);

    for (var i = 0; i < formTop.length - 1; i++) {
      // logArray.push(MD5(formTop.elements[i].value));
      if (formTop.elements[i].type === 'text') {
        localStorage.setItem('username', formTop.elements[i].value)
      }
      if(formTop.elements[i].type === 'password') {
        sessionStorage.setItem('password', MD5(formTop.elements[i].value));
      }
    }
    custom.textContent = 'Hello'+ localStorage.getItem +'.';
    for (var i = 0; i < form.length; i++) {
      form.elements[i].disabled = false;
    }
  });
}

function password() {
  logIn.addEventListener('click', function(evt) {
    evt.preventDefault();
    if (MD5(formTop.elements[1].value) === sessionStorage.getItem('password')) {
      alert('password matches');
    }else{
      alert('your password was wrong')
    }
  });
}
