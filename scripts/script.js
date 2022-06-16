const cardDeck = [".bobross",".bobross",
                ".explody",".explody",
                ".fiesta",".fiesta",
                ".metal",".metal",
                ".mobile",".mobile",
                ".revertit",".revertit",
                ".triplets",".triplets",
                ".unicorn",".unicorn"                                     
            ];
const cards = [];
let score = 0;
let card1;
let card2;


let amount;
function gameStarter(){
    while(amount<4 || amount > 14 || amount%2 == 1 || isNaN(amount)) { 
        amount = parseInt(prompt('Com quantas cartas você quer jogar? (Por favor escolha um número par entre 4 e 14)'));
    }
    let ul = document.querySelector(".game-board");
    ul.innerHTML = '';
    for ( let i = 0; i < amount ; i++ ){
        console.log(`Criando carta: ${i+1}`);
        ul.innerHTML += `   <div class="card" onclick="turn(this);">
                                <img src="./assets/front.png" alt="">
                            </div>
                        `;
        cards.push(cardDeck[i])
    }
    console.log(cards); // Log unshuffled array
    cards.sort(compareCards); // Array shuffle
    alert('Game Start!');
}

// Turning cards
function turn (card) {
    card.classList.add("front");
    score++;
    console.log(`Score: ${score}`)
 }

// Array sort
function compareCards() { 
	return Math.random() - 0.5; 
}

gameStarter();