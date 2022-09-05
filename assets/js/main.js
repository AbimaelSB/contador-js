var numero = parseInt(document.getElementById("nAtual").innerText);

function subtrair(){
  if(numero>-10){
    numero--;
    document.getElementById('nAtual').innerHTML = numero;
  }else{
    alert('-10 é o valor mínimo!');
  }
}

function somar(){
  if(numero<10){
    numero++;
    document.getElementById('nAtual').innerHTML = numero;
  }else{
    alert('10 é o valor máximo!');
  }
}