const cardDeck = ["bobrossparrot","bobrossparrot",
                "explodyparrot","explodyparrot",
                "fiestaparrot","fiestaparrot",
                "metalparrot","metalparrot",
                "revertitparrot","revertitparrot",
                "tripletsparrot","tripletsparrot",
                "unicornparrot","unicornparrot"                                     
            ];
let gifDeck = [];
let cards = [];
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
    gifDeck = [];
    cards = [];

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
    if (!card.classList.contains("front")){
    card.classList.add("front");
    score++;
    scoreboard.innerHTML = `SCORE: ${score}`;
    checkCards(card);
    console.log(`Score: ${score}`)
    }
 }

 // Checks if there are two turned cards, and checks if they are equal.
function checkCards(card) {
    if(card1===''){
        card1 = card;
    } else {
        card2 = card;
    }
    if (card1.classList[1] === card2.classList[1]){
        console.log('Match!');
        correctAmount +=2;
        cardRemover()
        endGame();
    } else {
        const myTimeOut = setTimeout(classRemover,1000);
        const myTimeOut2 = setTimeout(cardRemover,1001);
        console.log('Not a match');
    }
}

function classRemover(){
    card1.classList.remove("front");
    card2.classList.remove("front");
}

function cardRemover(){
    card1 = '';
    card2 = '.';
}

function endGame(){
    if (correctAmount === amount){
        alert(`Você ganhou em ${score} jogadas!`);
        let question = prompt('Jogar novamente? (Digite "sim" ou  "não")');
        
        if (question === "sim"){
            gameStarter();
        }
    }
}

// Array sort
function compareCards() { 
	return Math.random() - 0.5; 
}   

gameStarter();