var cont = document.getElementById("nAtual");
var numero = parseInt(cont.innerText);
var botoes = document.getElementsByTagName('button');

function subtrair() {
  if(numero>-10){
    numero--;
    cont.innerHTML = numero;
  }else{
    alert('-10 é o valor mínimo!');
  }
}

function somar() {
  if(numero<10){
    numero++;
    cont.innerHTML = numero;
  }else{
    alert('10 é o valor máximo!');
  }
}

function mudarCor() {
  if(numero<0){
    cont.style.color = 'red';
  }else{
    cont.style.color = 'black';
  }
}

for (let i = 0; i < botoes.length; i++) {
  botoes[i].addEventListener('click', mudarCor);
}

/*
document.getElementsByTagName('button')[0].addEventListener('click',mudarCor);
document.getElementsByTagName('button')[1].addEventListener('click',mudarCor);*/