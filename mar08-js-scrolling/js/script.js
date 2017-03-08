// var a;
// const GITHUB_URL = 'http://github.com/';
// console.log(GITHUB_URL);
//
// console.log('Notification' in window);
//
// var btn = document.querySelector('button');
//
// btn.addEventListener('click', function() {
//   console.log('btn');
//
//   if ('Notification' in window) {
//     itIsnt();
//   }else {
//     itIs();
//   }
// });
//
// function itIs() {
//   alert('the thing is there');
// }
// function itIsnt() {
//   alert('the thing is not there');
// }

var nav = document.querySelector('nav');

var dist = 0;
var navHeight = 0;
console.log(nav);

window.addEventListener('scroll', function(evt) {
  navHeight = nav.clientHeight
  // console.log(evt.pageY);
  //console.log(window.scrollY);//this works for all
  dist = window.scrollY;
  console.log(dist);
  if (dist = navHeight) {

  }
});
