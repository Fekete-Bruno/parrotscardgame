const cards = [ ".bobross",".bobross",
                ".explody",".explody",
                ".fiesta",".fiesta",
                ".metal",".metal",
                ".mobile",".mobile",
                ".revertit",".revertit",
                ".triplets",".triplets",
                ".unicorn",".unicorn"                                     
            ];





let amount;
function gameStarter(){
    while(amount<4 || amount > 14 || amount%2 == 1 || isNaN(amount)) { 
        amount = parseInt(prompt('Com quantas cartas você quer jogar? (Por favor escolha um número par entre 4 e 14)'));
    }
    let ul = document.querySelector(".game-board");
    ul.innerHTML = '';
    for ( let i = 1; i <= amount ; i++ ){
        console.log(`Criando carta: ${i}`);
        ul.innerHTML += `   <div class="card">
                                <img src="./assets/front.png" alt="">
                            </div>

                        `
    }



    alert('Game Start!');
}











cards.sort(compareCards); // Array shuffle







// Array sort
function compareCards() { 
	return Math.random() - 0.5; 
}

gameStarter();