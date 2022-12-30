

// for array method
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";

let messageEl = document.getElementById("message-el");

//there are three ways

// let sumEl = document.getElementById("sum-el");
// let sumEl = document.querySelector("#sum-el");
let sumEl = document.querySelector(".sum-el");

let cardsEl = document.getElementById("cards-el");

console.log(cards)

function getRandomCard(){
    let randomnumber = Math.floor(Math.random()*13+1)
    if(randomnumber===1){
        return 11
    }
    else if(randomnumber>10){
        return 10
    } else{
        return randomnumber
    }
}


// objects: it's like a bucket to store something, here in js objects store diffrent values for keys. it stores data in-depth- composite/complex data type.(objects within objects)


let player = {
    name:"Sukhwant",
    chips:144
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name+": $"+player.chips

function startGame(){
    if(sum===0){
    console.log("Started Game");
    isAlive = true;
    let firstCard = 
    getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard,secondCard];
    sum = firstCard+secondCard;
    renderGame();
    }
}

function renderGame(){
    
    if(sum<21){
        message='Do you want to draw a new card?';
    } else if(sum===21){
        message='Wohoo! You have got Blackjack';
        hasBlackJack = true;
        isAlive = false;
    }else{
        message='You are out';
        hasBlackJack = false;
        isAlive= false;
    }
    // without array method
    //cardsEl.textContent = "Cards : "+ firstCard +":"+secondCard;
    // with array method
    // cardsEl.textContent = "Cards : "+ cards[0] +":"+cards[1];
    // array with for loop
    cardsEl.textContent = "Cards : "
    for(let i=0;i<cards.length;i++){
        cardsEl.textContent +=cards[i]+" ";
    }


    sumEl.textContent = "Sum: "+sum;
    messageEl.textContent = message;
    

// console.log(message);
console.log("hasBlackJack",hasBlackJack);
console.log("isAlive",isAlive);
}

function newCard(){
    if(isAlive===true && hasBlackJack===false){
    let card = getRandomCard();
    sum +=card;

    // to render out all the cards in array format
    cards.push(card)
    renderGame();
    }
    // just to render out given cards only i.e. first, second and third
    //cardsEl.textContent = "Cards : "+ firstCard +":"+secondCard+":"+card;
    // to render out all the cards we have
}
//single '=' means assigning the value of 
//double'==' means a little less equal or values like string or number can be neglected
// triple '===' means strictly equal to 


/*
if(sum<21){
    console.log('Do you want to draw a new card?');
} else if(sum===21){
    console.log('Wohoo! You have got Blackjack');
    hasBlackJack = true;
    isAlive = false;
}else{
    console.log('You are out')
    isAlive= false;
}

console.log(hasBlackJack);
console.log(isAlive);

*/

/*
let age = 101;
if(age<=21){
    console.log('You cant enter the club');
}else{
    console.log('Welcome!');
}
if(age<100){
    console.log("Sorry not elegible");
}else if(age===100){
    console.log("Here is your birthday card from the King");
}else{
    console.log("Not eligible! you have already got one");
}
*/

// arrays in javaScript

// string arrays
let featuredPosts = [
    "Check out my Netflix clone",
    "Here's the code for my project",
    "I've just relaunched my portfolio",
    2,
    "hello"
]
// console.log(featuredPosts.length)
// output of above is 3 while indexes starts with 0 in arrays

let sukh = ["Sukhwnat", 29, true]

// console.log(sukh[2])

// push method to insert a object in array
let nCard = [4,5];
nCard.push(54)
// console.log(nCard);
let newFeaturedPosts = "Same Here!";
featuredPosts.push(newFeaturedPosts);
// console.log(featuredPosts)
// pop method to remove last item in array
featuredPosts.pop(newFeaturedPosts)
// console.log(featuredPosts)

// for loop 

for( let i=0;i<featuredPosts.length;i++){
    // console.log(featuredPosts[i]);
}

let sentence = ["Hello", "my", "name", "is","Sukhwant"];
let messEl = document.getElementById("message-el");

for(i=0;i<sentence.length;i++){
    messEl.textContent += sentence[i] + " ";
}