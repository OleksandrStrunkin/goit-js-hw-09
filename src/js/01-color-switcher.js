
const buttonStart = document.querySelector('button[data-start]');
const buttonStop = document.querySelector('button[data-stop]');

buttonStart.addEventListener('click', startColorChange);
buttonStop.addEventListener('click', stopColorChange)

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

const timer = {
    intervalId: null,
    
 start(){
   this.intervalId = setInterval(() => {document.body.style.backgroundColor = getRandomHexColor()}, 1000);
 },

 stop(){
    clearInterval(this.intervalId)
 },
}


function startColorChange () {
    timer.start();

    buttonStart.setAttribute('disabled', false);
    buttonStop.removeAttribute('disabled');
}


function stopColorChange () {
    timer.stop();

    buttonStart.removeAttribute('disabled');
    buttonStop.setAttribute('disabled', false);
}

