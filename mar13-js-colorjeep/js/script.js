var jeep = document.querySelector('header');
var input = document.getElementById('color');
var btn = document.getElementById('button');
var jeepRot = document.createElement('input');
var navList = document.querySelectorAll('nav > ul > li');

jeepRot.type = 'text';

document.body.appendChild(jeepRot);



navList.forEach(function(e, i) {
  e.addEventListener('mouseover', function() {
    this.classList.add('hovering');
  });
  e.addEventListener('mouseout', function() {
     this.classList.remove('hovering');
  });
});

btn.addEventListener('click', function(e) {
  e.preventDefault();
  var jeepColor = input.value;
  var jeeprota = jeepRot.value;
  jeep.style.backgroundColor = jeepColor;
  jeep.style.transform = "rotate(" + jeeprota + "deg)";
});
