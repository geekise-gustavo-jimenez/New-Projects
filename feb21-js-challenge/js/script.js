var button = document.getElementById('button');
var div = document.getElementsByTagName('div');
var classes = document.getElementsByClassName('list-four');
var lis = document.querySelectorAll('li');
var ul = document.querySelector('ul');
var form = document.getElementById('form');
var submit = document.getElementById('submit');

console.log(lis);
console.log(ul);
button.addEventListener('click', function() {
  var nameLength = prompt('write your name that is more than or equal to 5 letters');
  if (nameLength.trim() === "") {
    alert('no blanks')
  }
  else if (nameLength.length >= 5) {
    alert(nameLength.trim());
  }else {
    alert('come on');
  }
});

console.log(div);

for (var i = 0; i < div.length; i++) {
  div[i].addEventListener('mouseover', function() {
    alert('hovering');
  });
}

for (var j = 0; j < classes.length; j++) {
  classes[j].addEventListener('click', function() {
    alert('clicked on the list item');
  });
}

for (var g = 0; g < lis.length; g += 2){
  lis[g].style.backgroundColor = 'blue';
}

submit.addEventListener('click', function(e) {
  e.preventDefault();
  console.log(e);
  console.log('logged');

});
