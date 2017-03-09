(function() {
  var winH = document.querySelector('#meter li:nth-child(2) span');
  var distance = document.querySelector('#meter li:nth-child(1) span');
  var heroH = document.querySelector('#meter li:nth-child(3) span');
  var heroW = document.querySelector('#meter li:nth-child(4) span');
  var hero = document.querySelector('header');
  var sec1 = document.querySelector('section:nth-child(1)');
  var sec2 = document.querySelector('section:nth-child(2)');
  var sec3 = document.querySelector('section:nth-child(3)');
  var winHeight = window.innerHeight;

  window.addEventListener('resize', function() {
    winH.textContent = window.innerHeight;
    heroW.textContent = hero.clientWidth;
    heroH.textContent = hero.clientHeight;

    if(window.innerHeight > sec1.offsetTop){
      sec1.classList.add('visible');
    }else{
      sec1.classList.remove('visible')
    }
  });

  var dist = 0;
  window.addEventListener('scroll', function() {
    dist = window.scrollY;
    distance.textContent = dist;
    if ((sec1.offsetTop - dist) - winHeight <= 0) {
      sec1.classList.add('colorIn');
    }else{
      sec1.classList.remove('colorIn')
    }
    if ((sec2.offsetTop - dist) - winHeight <= 0) {
      sec2.classList.add('colorIn');
    }else{
      sec2.classList.remove('colorIn')
    }
    if ((sec3.offsetTop - dist) - winHeight <= 0) {
      sec3.classList.add('colorIn');
    }else{
      sec3.classList.remove('colorIn')
    }
  });
}());
