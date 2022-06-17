const cardDeck = ["bobrossparrot","bobrossparrot",
                "explodyparrot","explodyparrot",
                "fiestaparrot","fiestaparrot",
                "metalparrot","metalparrot",
                "revertitparrot","revertitparrot",
                "tripletsparrot","tripletsparrot",
                "unicornparrot","unicornparrot"                                     
            ];
const gifDeck = [];
const cards = [];
let score;
let scoreboard = document.querySelector("footer");
let card1;
let card2;
let amount;
let correctAmount;


function gameStarter(){

    // Resets everything for a new game
    score = 0;
    scoreboard.innerHTML = `SCORE: ${score}`;
    card1='';
    card2='.';
    correctAmount = 0;
    amount = 0;

    // Asks amount of cards
    while(amount<4 || amount > 14 || amount%2 == 1 || isNaN(amount)) { 
        amount = parseInt(prompt('Com quantas cartas você quer jogar? (Por favor escolha um número par entre 4 e 14)'));
    }
    let ul = document.querySelector(".game-board");
    ul.innerHTML = '';

    // Preparing cards with the right amount
    for (let index = 0; index < amount; index++) {
        cards.push(cardDeck[index])
    }
    
    console.log(cards); // Log unshuffled array

    // Everiday I'm Shufflin'
    cards.sort(compareCards);
    //show shuffled cards
    for ( let i = 0; i < amount ; i++ ){
        console.log(`Criando carta: ${i+1}`);
        ul.innerHTML += `   <div class="card ${cards[i]}" onclick="turn(this);">
                                <img src="./assets/front.png" alt="">
                                <img src="./assets/${cards[i]}.gif">
                            </div>
                        `;
    }
    score = 0;
    scoreboard.innerHTML = `SCORE: ${score}`;
    alert('Game Start!');
}



// Turning cards
function turn (card) { 
    card.classList.add("front");
    checkCards(card);
    score++;
    scoreboard.innerHTML = `SCORE: ${score}`;
    console.log(`Score: ${score}`)
 }

 // Checks if there are two turned cards, and checks if they are equal.
function checkCards(card) {
    if(card1===''){
        card1 = card;
    } else {
        card2 = card;
    }

}

// Array sort
function compareCards() { 
	return Math.random() - 0.5; 
}   

gameStarter();