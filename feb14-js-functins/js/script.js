// var personName = function() {
//   return prompt('What your name').trim();
// }();
//
// function fullName() {
//   var lastLetter = personName.substr(1).toLowerCase();
//   var firstLetter = personName.charAt(0).toUpperCase();
//   var whole = firstLetter + lastLetter;
//   return whole;
// }
// fullName();
//
// function wholeName(){
//   alert(fullName());
// }
//
// wholeName();

var btn1 = document.getElementById('button1');
var btn2 = document.getElementById('button2');
var div = document.getElementById('div');


btn1.addEventListener('click',function() {
  firstName = prompt('what is your first name').trim();
  console.log( parseInt(firstName));
  if(isNaN(firstName)){
    console.log('its not a number');
    btn2.disabled = false;
    btn1.setAttribute('disabled', true);
  }else{
    alert('please type your first name');
  }

  // no var makes it global
});

btn2.addEventListener('click',function() {
  lastName = prompt('what is your last name').trim();
  if(isNaN(lastName)){
    console.log('its not a number');
    btn1.disabled = false;
    btn2.setAttribute('disabled', true);
    alert(firstName + ' ' + lastName);
      div.textContent = firstName + ' ' + lastName;
    }else{
    alert('please type your last name');
  }

});
