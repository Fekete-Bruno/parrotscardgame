const cards=[];
let amount = 1;
function gameStarter(){
    while(amount<4 || amount > 14 || amount%2 == 1 || isNaN(amount)) { 
    amount = parseInt(prompt('Com quantas cartas você quer jogar? (Por favor escolha um número par entre 4 e 14)'));
}
}

gameStarter();