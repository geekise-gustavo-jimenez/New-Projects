function moveBox(event) {
  var k = event.keyCode;
  var car = document.getElementById('car');
  function upDown() {
    var y = parseInt(getComputedStyle(car).top);
    if (k == 38) {
      y -= 10;
    }else if (k == 40) {
      y += 10;
    }
    return y;
  }
  function leftRight() {
    var x = parseInt(getComputedStyle(car).left);
    if (k == 37) {
      x -= 10;
    }else if (k == 39) {
      x += 10;
    }
    return x;
  }

car.style.top = (upDown() + 'px');
car.style.left = (leftRight() + 'px');
};

car.addEventListener('click', function () {
  document.addEventListener('keydown', moveBox);
  document.addEventListener('keydown', function(e) {
    if ([37, 38, 39, 40].indexOf(e.keyCode) > -1) {
      e.preventDefault();
    }
  });
});
