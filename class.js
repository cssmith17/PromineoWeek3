/* Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (I.E. if
I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello'). */

// function definition - specifying behavior
function repeatWord(word, n){
    let finalWord = '';
    for(let i = 0; i < n; i++){
        finalWord = finalWord + word;
    } return finalWord
}

repeatWord('Hello', 3);

// Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside,
// and if moneyInPocketis greater than 10.50.
function willBuyDrink(isHotOutside, moneyInPocket){
    return (isHotOutside && moneyInPocket > 10.50);
}