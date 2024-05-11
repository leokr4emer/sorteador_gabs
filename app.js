function randomNumber(min,max){
    return Math.floor(Math.random() * (max - min + 1))+ min;
}
function restartButtonFunction(){
    let restartButton = document.getElementById("btn-restart");
    if(restartButton.classList.contains("container__botao-desabilitado")){
        restartButton.classList.replace("container__botao-desabilitado","container__botao");
    } else {
        restartButton.classList.replace("container__botao","container__botao-desabilitado");
    }
}

function randomize(){
    let amount = parseInt(document.getElementById("amount").value);
    let from = parseInt(document.getElementById("from").value);
    let to = parseInt(document.getElementById("to").value);
    let restartButton = document.getElementById("btn-restart");
    let randomNumbersList = []
    if(amount > 10){
        alert("A quantidade maxima de numeros não pode exceder 10");
    } else{
        if(amount < to - from){
            for(let i = 0; i < amount; i++){
                let randomizedNumber = randomNumber(from,to);
                while(randomNumbersList.includes(randomizedNumber)){
                    randomizedNumber = randomNumber(from,to);
                }
                randomNumbersList.push(randomizedNumber);
            }
            let answer = document.getElementById("answer");
            answer.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${randomNumbersList}</label>`;
            if(restartButton.classList.contains("container__botao-desabilitado")){
                restartButtonFunction();
            }
        } else{
            alert("c ta burro?");
        }
            }   
    }
function clear(){
    document.getElementById("amount").value = '';
    document.getElementById("from").value = '';
    document.getElementById("to").value = '';
    answer.innerHTML = `<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>`;
}
function restart (){
    let restartButton = document.getElementById("btn-restart");
    if(restartButton.classList.contains("container__botao")){
        clear();
        restartButtonFunction();
    }
}
