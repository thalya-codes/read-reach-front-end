// Pegar o modal
var modal = document.getElementById('myModal');

// Pegar os botões que abrem o modal
var btnFromNoReading = document.getElementById('openModalBtnFromNoReading');

// Pegar o elemento <span> que fecha o modal
var span = document.getElementsByClassName('modal__close-btn')[0];

// Pegar a tela de 'Usuário sem leitura cadastrada'
var noReadingScreen = document.getElementById('noReadingScreen');

// Função para verificar se há leituras cadastradas
function checkForReadings() {
 // Supondo que você tem uma maneira de verificar se há leituras cadastradas
 // Pode ser uma chamada a uma API ou verificação de uma lista local
 // Aqui, vamos usar uma variável fictícia para o exemplo

 var hasReadings = false; // Mude isso conforme necessário

 if (!hasReadings) {
  noReadingScreen.style.display = 'flex';
 } else {
  noReadingScreen.style.display = 'none';
 }
}

// Quando o usuário clicar no botão, abre o modal
btnFromNoReading.onclick = function () {
 modal.style.display = 'flex';
};

// Quando o usuário clicar no <span> (x), fecha o modal
span.onclick = function () {
 modal.style.display = 'none';
};

// Quando o usuário clicar em qualquer lugar fora do modal, fecha-o
window.onclick = function (event) {
 if (event.target == modal) {
  modal.style.display = 'none';
 }
};

// Tratar o envio do formulário
var form = document.getElementById('cadastroLeituraForm');
form.onsubmit = function (event) {
 event.preventDefault();
 // Aqui você pode adicionar a lógica para salvar os dados do formulário
 // Por exemplo, enviar via AJAX para um servidor ou salvar localmente
 alert('Leitura cadastrada com sucesso!');
 modal.style.display = 'none';
 // Simular que agora temos leituras cadastradas
 noReadingScreen.style.display = 'none';
};

// Chamar a função de verificação ao carregar a página
checkForReadings();
