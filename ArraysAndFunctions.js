let array1 = [1, 5, 6, 9, 10, 14];

// print the 3rd element in array1
console.log(array1[2]);
// print the last element in array1
console.log(array1[5]);
// add 16 and 3 to array1
array1.push(16, 3);

// sort the array, then print the 3rd element again
array1.sort();
console.log(array1[2]);
// did it change?
// No

// create a variable called myTodoList that holds an empty array
let myTodoList = [];
// add three todo items to the array using a built-in array method
myTodoList.push('Take out trash', 'Do Laundry', 'Clean litterbox')
// remove the second item in the array
myTodoList.splice(1, 1);
// create another array, yourTodoList, and add two todo items
let yourTodoList = ['Make dinner', 'Take shower'];
// create another array, ourTodoList
let ourTodoList = [];
// combine myTodoList and yourTodoList into ourTodoList
ourTodoList = myTodoList.concat(yourTodoList);
console.log(ourTodoList);

// sort the following array from Z-A
ourTodoList.sort();
ourTodoList.reverse();
console.log(ourTodoList);
// create a function called reverse that takes in parameter

// this function will return the opposite of whatever is passed in
// if its a boolean, return the opposite
// if its a number, or a string, return the reverse (i.e. 1234 becomes 4321, Name becomes emaN)
// if its an array, return the reversed array with each element reversed

function reverse(y) {
    if (typeof(y) === 'boolean') {
        return !y;

    } else if(typeof(y) ==='string' || typeof(y) === 'number'){
        let splitY = y.split('');
        
        let reverseY = splitY.reverse();

        let rejoinY = reverseY.join('');
        return rejoinY
    } else if (typeof(y) === '[]'){
            return reverse.reverse;
    }else {
        console.log('Passed argument must be a boolean, string, or number.');
    }
}

console.log(reverse([1, 2, 3, 4]))

// create a function called addingMachine that will add all passed numbers and return the total
// Note: you don't know how many numbers will be passed

function addingMachine(y){
    let sum = 0;

for (i = 0; i < arguments.length; i++){
    let number = arguments[i];

    sum += number;

    }
    return sum;
}

console.log(addingMachine(1,2,3,4));

// You just signed a contract as an estimator for a restoration company. 
// Your contract states that you take home 10% of the profits on the first $100,000
// 20% on the next $400,000
// 35% on the next $500,000
// 40% on all profits above $1,000,000
// create a function that will allow you to check how much of a bonus you make
// the function should take in two variables as arguments, grossInvoiced and profitMargin

function myBonus(grossInvoiced, profitMargin){
    let profits = grossInvoiced * profitMargin;

    let bonus = 0;
    let tier1 = 100000;
    let tier2 = 400000;
    let tier3 = 500000;

    let tier1Rate = .1;
    let tier2Rate = .2;
    let tier3Rate = .35;
    let tier4Rate = .4;

    let maxBonusTier1 = tier1 * tier1Rate;
    let maxBonusTier2 = tier2 * tier2Rate + maxBonusTier1;
    let maxBonusTier3 = tier3 * tier3Rate + maxBonusTier2;

    if(profits <= tier1) {
        bonus = (profits * .1);
    } else if(profits <= (tier2 + tier1)){
        bonus = maxBonusTier1 + ((profits - tier1) * tier2Rate);
    } else if(profits <= (tier3 + tier2 + tier3)) {
        bonus = maxBonusTier2 + ((profits - tier1 - tier2) * tier3Rate);
    } else if(profits > 1000000){
        bonus = maxBonusTier3 + ((profits - tier1 - tier2 - tier3) * tier4Rate);
    } else {
        return 'Error';
    }

    return bonus;
}

console.log(myBonus(35000000, .487));