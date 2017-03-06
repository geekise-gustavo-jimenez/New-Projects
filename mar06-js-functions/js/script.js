var modal = document.getElementById('modal');

createModal('prompt', 'What up cuz');


function createModal(modalType, modalMsg) {
  var form = document.createElement('form');
  var inputText = document.createElement('input');
  var cancelBtn = document.createElement('input');
  var okBtn = document.createElement('input');
  var modalMessage = document.createElement('p');
  var modalDiv = document.createElement('div');
  inputText.type = 'text';
  okBtn.type = 'submit';
  cancelBtn.type = 'button';

  cancelBtn.value = 'cancel';
  okBtn.value = 'confirm';

  modalMessage.textContent = modalMsg;


  form.appendChild(modalMessage);
  if(modalType === 'prompt') {
    form.appendChild(inputText);
    form.appendChild(cancelBtn);
  }else if(modalType === 'confirm') {
    form.appendChild(cancelBtn);
  }

  modalDiv.appendChild(cancelBtn);
  modalDiv.appendChild(okBtn);
  form.appendChild(modalDiv);

  modal.appendChild(form);

  cancelBtn.addEventListener('click', function() {
    console.log('user clicked cancel');
    modal.removeChild(form);
    modal.classList.remove('active');
  });
  okBtn.addEventListener('click', function(e) {
    e.preventDefault();
    var userInput = inputText.value;
    console.log(userInput);
    modal.removeChild(form);
    modal.classList.remove('active');
  });
}
