// Code your solutions in this file
cards = ["Ada", "Brennan", "Ali"];

function writeCards (cards){
    let i=0;
    while (i<cards.length){
        console.log(`Thank you ${cards[i]} for the lovely suprise gift!`);
        i++;
    }
}

function countDown(num){
    while (num > 0){
        console.log(num-=1);

    }
    
}