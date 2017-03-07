// var content = document.getElementById('content');
// var h1 = document.createElement('h1');
// var p = document.createElement('p');
// var a = document.createElement('a');
// // var text = document.createTextNode('this is a text node');
//
//
// h1.textContent = 'this is text';
// p.textContent = 'giegingi kgiemgoe g nfowjodko3ji ';
// a.textContent = 'click';
//
// // content.append(h1, p, text, 'here is random', a);
// // content.appendChild(h1);
// content.appendChild(a);
//
//
// a.addEventListener('click', function() {
//   theFunc('alert');
// });
//
//
//  function theFunc(valueItem) {
//    var form = document.createElement('form');
//    var text = document.createElement('input');
//    var confirm = document.createElement('input');
//    var cancel = document.createElement('button');
//    var sentence = document.createElement('span');
//
//
//
//
//    content.appendChild(form);
//
//    text.placeholder = 'just write something';
//    confirm.type = 'submit';
//    confirm.value = 'confirm';
//    cancel.textContent = 'cancel';
//    sentence.textContent = 'This is here no matter what';
//
//    form.appendChild(sentence)
//    if (valueItem === 'confirm') {
//      form.appendChild(cancel);
//    }else if (valueItem === 'prompt') {
//      form.appendChild(text);
//      form.appendChild(cancel);
//
//    }
//
//    form.appendChild(confirm);
//
//    confirm.addEventListener('click', function(e) {
//      e.preventDefault();
//      console.log(text.value);
//    });
//  }

 var form = document.querySelector('form');
 console.log('childElement' in form);
console.log(form);
// form.childNodes.forEach(function(e, i) {
//   console.log(e);
// // });
// for (var i = 0; i < form.children.length; i++) {
//   console.log(form.children[i]);
// }
// console.log('Notification' in window);
//
// if ( !('childElementCount' in form)) {
//   for (var i = 0; i < form.children.length; i++) {
//     console.log(form.children[i]);
//   }else{
//     for (var i = 0; i < form.childElementCount.length; i++) {
//       console.log(form.children[i]);
//     }
//   }
// }

var formArr = [];

formArr.push(form.hidden);
formArr.push(form.encoding);
formArr.push(form.firstChild);
formArr.push(form.nextSibling);
formArr.push(form.offsetParent);
console.log(formArr);
