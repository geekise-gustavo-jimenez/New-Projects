var para = document.querySelector('p');

para.addEventlistener('click', updateName);

function updateName() {
  var name = prompt('enter a new name');
  para.textContent = "Player 1:" name;
}

function createParagraph() {
  var para = document.createElement('p');
  para.textContent =  "you clicked the button";
  document.body.appendChild(para);
}

var buttons = document.querySelector('button');

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventlistener('click', createParagraph);
}
