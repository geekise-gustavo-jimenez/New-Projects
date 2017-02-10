  var image = document.getElementsById('myImage');
function changeImage() {
  var pic = image.getAttribute('src');
  if (pic.src.match("img/pic1.png")) {
    pic.src = "img/pic2"
  } else {
    pic.src="img/pic3"
  }
}
