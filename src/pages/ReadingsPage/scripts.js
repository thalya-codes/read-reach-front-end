const modal = document.getElementById('myModal');

const btnFromNoReading = document.getElementById('openModalBtnFromNoReading');

const span = document.getElementsByClassName('modal__close-btn')[0];

const noReadingScreen = document.getElementById('noReadingScreen');

function checkForReadings() {
 const hasReadings = false;

 if (!hasReadings) {
  noReadingScreen.style.display = 'flex';
 } else {
  noReadingScreen.style.display = 'none';
 }
}

btnFromNoReading.onclick = function () {
 modal.style.display = 'flex';
};

span.onclick = function () {
 modal.style.display = 'none';
};

window.onclick = function (event) {
 if (event.target == modal) {
  modal.style.display = 'none';
 }
};

const form = document.getElementById('cadastroLeituraForm');
form.onsubmit = function (event) {
 event.preventDefault();

 alert('Leitura cadastrada com sucesso!');
 modal.style.display = 'none';
 noReadingScreen.style.display = 'none';
};

checkForReadings();
