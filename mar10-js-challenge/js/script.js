var winW = document.querySelector('num1'),
    winH = document.querySelector('num2'),
    form = document.createElement('form'),
    input = document.createElement('input'),
    input2 = document.createElement('input'),
    input3 = document.createElement('input'),
    input4 = document.createElement('input'),
    input5 = document.createElement('input'),
    content = document.querySelector('#content'),
    body = document.querySelector('body'),
    main = document.querySelector('main');

input.type = 'text';
input2.type = 'text';
input5.type = 'text';
input3.type = 'submit';
input4.type = 'submit';

input.placeholder = 'text color';
input2.placeholder = 'main background';
input5.placeholder = 'body background';
input3.value = 'submit';
input4.value = 'Random';

content.appendChild(form);
form.appendChild(input);
form.appendChild(input2);
form.appendChild(input5);
form.appendChild(input4);
form.appendChild(input3);

input3.addEventListener('click', function(e) {
  e.preventDefault();
  var value1 = input.value;
  var value2 = input2.value;
  var value3 = input5.value;

  main.style.color = value1;
  main.style.backgroundColor = value2;
  body.style.backgroundColor = value3;
});

input4.addEventListener('click', function(e) {
  e.preventDefault();
  var rand = Math.floor((Math.random() * 100) + 2);
  var rand2 = Math.floor((Math.random() * 100) + 2);
  var rand3 = Math.floor((Math.random() * 100) + 2);
  var rand4 = Math.floor((Math.random() * 100) + 1);
  var rand5 = Math.floor((Math.random() * 100) + 1);
  var rand6 = Math.floor((Math.random() * 100) + 1);
  var rand7 = Math.floor((Math.random() * 100) + 1);
  var rand8 = Math.floor((Math.random() * 100) + 1);
  var rand9 = Math.floor((Math.random() * 100) + 1);
  console.log(rand);
  console.log(rand2);
  console.log(rand3);
  main.style.color = "hsl(" + rand + "," + rand2 + "%" + "," + rand3 + "%" + ")";
  main.style.backgroundColor = "hsl(" + rand4 + "," + rand5 + "%" + "," + rand6 + "%" + ")";
  body.style.backgroundColor = "hsl(" + rand7 + "," + rand8 + "%" + "," + rand9 + "%" + ")";
});

window.addEventListener('resize', function() {
  winH.textContent = window.innerHeight;
  winW.textContent = window.innerWidth;
})
