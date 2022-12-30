/*
let player1Time = 111;
let player2Time = 108;

function getFastestRaceTime(){
    if(player1Time<player2Time){
        return player1Time
    } else if(player2Time<player1Time){
       return player2Time
    }else{
       return player1Time
    }
}

let fastestRace = getFastestRaceTime();
console.log(fastestRace);

function totalRaceTime(){
   return player1Time+player2Time
   
}
let totalTime = totalRaceTime();

console.log(totalTime)

let randomNumber = Math.random() * 11 +1
// console.log(randomNumber)
let floredNumber = Math.floor(randomNumber);

console.log(floredNumber)

function rollDice(){
    return Math.floor(Math.random()*6+1)
}
let rolled = rollDice()
console.log(rolled)
*/

// introduction to objects 

let course = {
    title: "Learn CSS Grid for free",
    lessons: 15,
    creator:"Sukhwant",
    length:63,
    level:2,
    isFree: true,
    tags:[
        "html","CSS","Grid"
    ]
}

console.log(course.length)

let myCastle = {
    location:"England",
    cost: "$190 per Night",
    complementaryDinner: true,
    facilities:[
        "Pool", "Stable","Ancient Show"
    ]
}

console.log(myCastle.facilities)

//object practice
let myDetails ={
    name:"Sukhwant Singh",
    age: 29,
    country:"India"
}
console.log(myDetails.name+" is "+myDetails.age+" years old and lives in "+myDetails.country)


// if statement practice
let age = 75;

if(age<6){
    console.log("free") ;
}else if (age<17){
    console.log("Child discount");
}else if (age<26){
    console.log("Student discount");
}else if(age<66){
    console.log("Full price")

}else{
    console.log("Senior citizen discount");
}

// for loop practice
let largeCountries= ["China","India","USA","Indonesia","Pakistan"];

for( i=0;i<largeCountries.length;i++){
    // console.log("-"+largeCountries[i])
}
// use of pop(), shift(), push(), unshift()

let largerCountries= ["Sri","India","USA","Indonesia","Nepal"];
// shift will remove the item from beginning
largerCountries.shift();
// pop will remove the item from last
largerCountries.pop();
// unshift will shove or put up the item at the start
largerCountries.unshift("China");
// push the item at last 
largerCountries.push("Pakistan")
console.log(largerCountries);

// logical operator
let dayOfWeek = 13;
let weekDay = "Friday";

if(dayOfWeek===13 && weekDay==="Friday"){
    console.log("Spookey")
}

// random number

let hands =["rock","paper","scissor"];

// One way to do 
let randomItem = Math.floor(Math.random()*3);
console.log(randomItem)
console.log(hands[randomItem])

// Other way to do 
function getHands(){
    let randomItem = Math.floor(Math.random()*3);
    return hands[randomItem]
}
console.log(getHands())

let fruit = ["apple","orange","apple","apple","orange"];
let appleEl = document.getElementById("apple-el");
let orangeEl = document.getElementById("orange-el");

function sortFruit(){
    for(i=0;i<fruit.length;i++){
        if(fruit[i]==="apple"){
            appleEl.textContent+= "apple"
        }else{
            orangeEl.textContent+="orange"
        }
    }
}
sortFruit()