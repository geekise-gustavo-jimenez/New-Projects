var myArr = ['red', 'blue', 'green'];

var btn1 = document.getElementById('add');
var btn2 = document.getElementById('remove');
var userColor;
var newArray = [];

btn1.addEventListener('click', function() {
  alert('wat up more');
  addColor();
});

btn2.addEventListener('click', function(){
  alert('wat up less');
  removeColor();
  // var re = /ab+c/;
  // console.log(re);
  // var myRe = /d(b+)d/g;
  // var myArray = myRe.exec('cdbbdbsbz');
  // console.log(myArray);
});

function addColor() {
  userColor = prompt('yo wat up add color');
  console.log(userColor);
  console.log(!userColor);
  if (userColor !== null && userColor.trim() !== '') {
    var userColorCheck = userColor.toLowerCase().trim();
    console.log(userColor);
    console.log(parseInt(userColor));
    console.log( isNaN(parseInt(userColor)) );

    if (!isNaN(parseInt(userColor))) {
      addColor();
    }else if(userColor === ''){
      addColor();
      alert('you typed blank');
      }else {
        // alert('will always run');
        newArray.push(userColorCheck);
        console.log(newArray);
      }
  }else{
    alert('does it work');
  }



//   if (!isNaN(parseInt(userColor))) {
//     alert('will never run put only letters');
//     addColor();
//   }else if(userColor === ''){
//     alert('you typed blank');
//   }else {
//     alert('will always run');
//   }
}

function removeColor() {
  return prompt('yo get out remove color');
}
