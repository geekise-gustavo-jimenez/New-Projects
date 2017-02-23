var userArray = [];
var form = document.querySelector('form');
var submit = document.querySelector('input[type="submit"]')
console.log(form);

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
