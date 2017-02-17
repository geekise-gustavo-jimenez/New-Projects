var btn = document.getElementById('add');
var movieArray = [];

btn.addEventListener('click', add);

function add() {
  var answer = prompt('what movie do you like');
  movieArray.push(answer);
  if (movieArray.length >= 3) {
    console.log(movieArray);
  }
   if (movieArray.length >= 5) {
    for (var i = 0; i < movieArray.length; i++) {
      console.log(movieArray[i]);
    }
  }
}
