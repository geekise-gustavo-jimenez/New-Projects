var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');
var userNameArray = [];
var moviesArray = [
  'Die Hard',
  'Pulp Fiction',
  'The Mummy',
  'Civil War',
  'Harry Potter'];
// for(var i = 0; i < moviesArray.length; i++){
//   console.log(moviesArray[i]);
// }
moviesArray.forEach(moviePrint);

moviesArray.forEach(function(e) {
  console.log(i + ' : ' + e);
});



btn1.addEventListener('click', userPrompt);

btn2.addEventListener('click', function() {
  alert('btn2');
});

function populateArray(un) {
  userNameArray.push(un);
  console.log(userNameArray);
  if (userNameArray.length >= 5) {
    outputArray();
  }
}
function outputArray() {
  userNameArray.forEach(function(el, idx) {
    console.log(idx + ' : ' + el);
  });
  // for(var i = 0; i < userNameArray.length; i++){
  //   console.log(userNameArray[i]);
  // }
}

function userPrompt() {
  var userName = prompt('What is your name');
  if (userName === null) {
    alert('please enter a name');
    return;
  }

  var userNameParsed = parseInt(userName);
  var userNameNaN = isNaN(userNameParsed);
  var userNameBlank = userName.trim() === "";
  // console.log('original:' + userName);
  // console.log('parsed:' + userNameParsed);
  // console.log('is it nan:' + userNameNaN);
  // console.log('is it blank:' + userNameBlank);



  if (
     userNameNaN === false &&
     userNameBlank === false ||
     userNameNaN === true &&
     userNameBlank === true) {
    alert('you enter bad info');
  }else {
    populateArray(userName);
  }
}
