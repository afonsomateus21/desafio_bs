const inicioTimer = 60;
let timer = inicioTimer * 60;

const timerElement = document.getElementById('timer');

let refreshIntervalId = setInterval(atualizarTimer, 1000)

function atualizarTimer() {
  const minutos = Math.floor(timer / 60);
  let segundos = timer % 60;

  segundos = segundos < 10 ? '0' + segundos : segundos;

  timerElement.innerHTML = `${minutos} : ${segundos}`;
  timer--;
  
  if (timer < 0) {
    console.log('timer: ', timer) //stop the setInterval whe time = 0 for avoid negative time
    clearInterval(refreshIntervalId);
  }

  if (timer == -1) {
    console.log('entrou')
    document.getElementById('botao-solicitar-livro').style.backgroundColor = '#B6B3B2';
    document.getElementById('botao-solicitar-livro').style.cursor = 'not-allowed';
    document.getElementById('botao-solicitar-livro').setAttribute('disabled', 'disabled');  
  }
}