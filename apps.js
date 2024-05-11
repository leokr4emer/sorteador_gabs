
function randomNumber (min,max){
    return Math.floor(Math.random() * (max - min + 1))+ min;
}
function restartButton(){
    let restartButton = document.getElementById("btn-restart");
    if(restartButton.classList.contains("container__botao-desabilitado")){
        restartButton.classList.replace("container__botao-desabilitado", "container__botao");
    }   else{
            restartButton.classList.replace("container__botao", "container__botao-desabilitado");
        }
}
function randomize(){
    var amount = parseInt(document.getElementById("amount").value);
    var from = parseInt(document.getElementById("from").value);
    var to = parseInt(document.getElementById("to").value);
    let numberList = [];
    if(amount > 10){
        alert("A quantidade não pode ser maior que 10");
    }   else{
            if(amount < to - from){
                for(let i = 0; i < amount; i++){
                    let randomizedNumber = randomNumber(from,to);
                    while(numberList.includes(randomizedNumber)){
                        randomizedNumber = randomNumber(from,to);
                    }
                    numberList.push(randomizedNumber);
                }
                var answer = document.getElementById("answer");
                answer.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${numberList}</label>`;
                restartButton();
            }   else{
                alert("c ta burro?");
                }
            }
}
function restart(){
    clear()
    let restartButton2 = document.getElementById("btn-restart");
    if(restartButton2.classList.contains("container__botao")){
        restartButton();
    }
}
function clear(){
     document.getElementById("amount").value= '';
     document.getElementById("from").value= '';
     document.getElementById("to").value= '';
     answer.innerHTML = `<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>`;
}
