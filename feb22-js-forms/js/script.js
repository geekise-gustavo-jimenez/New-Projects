// var text = document.getElementById('text');
var submit = document.getElementById('submit');
// var last = document.getElementById('last');
// var email = document.getElementById('email');
var inputs = document.querySelectorAll('input:not([type="submit"])');
var user = [];

submit.addEventListener('click', function(e) {
  e.preventDefault();

  var formInputs = document.querySelector('form').elements;
  for (var i = 0; i < formInputs.length - 1; i++) {
    user.push(formInputs[i].value);
    formInputs[i].value = '';
    if (
     formInputs[i].type === 'radio' && formInputs[i].checked ||
     formInputs[i].type !== 'radio' && formInputs[i].type !== 'checkbox' && formInputs[i].value
    ){
      user.push(formInputs[i].value);
    }
    if (formInputs[i].type === 'checkbox' && formInputs[i].checked) {
      user.push(true);
    }

  }
  console.log(user);
  user = [];






  // alert(text.value);
  // inputs.forEach(function(e, i) {
  //   user.push(inputs[i].value);
  //   inputs[i].value = '';
  // });
  //
  // alert(user);
  // // user.push(text.value, last.value, email.value);

});
