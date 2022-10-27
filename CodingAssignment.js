/*  1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93. 
    1a. Programmatically subtract the value of the first element in the array from the value in the last element of the array 
- Do not use numbers to reference the last element, find it programmatically,
- ages[7] – ages[0] is not allowed!
1b. Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
1c. Use a loop to iterate through the array and calculate the average age. */

let ages = [3, 9, 23, 64, 2, 8, 28, 93]; // Creating ages variable, accomplishes 1.
let firstIndexValue = ages[0]; // creates a varaiable and sets it to always find the first index of ages array
let lastIndex = ages.length - 1; // creates a second variable that stores the last index number, no matter how many elements the array contains
let lastIndexValue = ages[lastIndex];

ageDifference = lastIndexValue - firstIndexValue; //accomplishes 1a.

// console.log(ageDifference); // Testing 1a., expected result 90, recieved 90

ages.push(30); // Added integer 30 to ages array, 1b.

let newFirstIndexValue = ages[0]; // Repeating previous steps
let newLastIndex = ages.length - 1;
let newLastIndexValue = ages[newLastIndex];

newAgeDifference = newLastIndexValue - firstIndexValue;
// console.log(newAgeDifference); //Testing 1b; expected 27, recieved 27

let sumOfAges = 0;
let averageAge = 0;
for (let i = 0; i < ages.length; i++) {
    sumOfAges = sumOfAges + ages[i]; // Sums up all the ages or elements in the ages array into a single number
    averageAge = sumOfAges / ages.length; // Divides the sum of the elements in ages array by amount of elements or ages in array
} 
// console.log(Math.round(averageAge)); // Prints out nearest whole number to the average age value, 1c.

/* 
2. Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’. 
2a. Use a loop to iterate through the array and calculate the average number of letters per name.
2b. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces. */

let names = ['Sam','Tommy','Tim','Sally','Buck','Bob'];
let totalLetters = 0;
let concatNames = '';
for (let i = 0; i < names.length; i++) {
    totalLetters += names[i].length; // Adds total letters of every name in array into 1 number
} avgLetters = totalLetters / names.length;
// console.log(Math.round(avgLetters));  // Prints out average letters per name rounded to nearest whole number,  2a.

for(let i = 0; i < names.length; i++) {
    concatNames += names[i] + ' '; // combines all elements of array, seperated by a space. 2b.
}
// console.log(concatNames);

// 3. How do you access the last element of any array? 
// array[array.length = 1];

// 4. How do you access the first element of any array?
// array[0];

/* 5. Create a new array called nameLengths. 
Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array. 
For example:
namesArray = ["Kelly", "Sam", "Kate"] //given this array 
nameLengths = [5, 3, 4] //create this new array */
let nameLengths = [];


for (i = 0; i < names.length; i++) {
    let indexValueSum = names[i].length; // Creating variable that stores the length of each array element in name
    nameLengths.push(indexValueSum); // Adds length value of each name to nameLengths array
}
// console.log(nameLengths); // testing 5., expected [3, 5, 3, 5, 4, 3], receieved [ 3, 5, 3, 5, 4, 3 ]

// 6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.
let nameLengthsSum = 0; // variable that will contain full length of all numbers in nameLengths array

for (i = 0; i < nameLengths.length; i++) {
    nameLengthsSum = nameLengthsSum += nameLengths[i]; // Adds each number of array to var nameLengthsSum for every element
}
// console.log(nameLengthsSum); // Testing 6., expected 23, recieved 23

// 7.  Write a function that takes two parameters, word and n, as arguments and returns the word 
// concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).

function repeatWord(word, n){
    let finalWord = ''; // Declaring the variable that will contain concatenated words
    for(let i = 0; i < n; i++) { // Creating for loop that iterates number of times that user defines with n
        finalWord = finalWord + word; // Adding word to finalWord each iteration
    }return finalWord; // Returns result of function 
}

// console.log(repeatWord('Hello', 3)); // Testing results of 7., expected 'HelloHelloHello', receieved 'HelloHelloHello'.

// 8. Write a function that takes two parameters, firstName and lastName, and returns a full name.
// -  The full name should be the first and the last name separated by a space.
function fullName(firstName, lastName) {
    let finalName = firstName + ' ' + lastName; // Stating variable finalName that combines firstName and lastName into a string with space between
    return finalName; // Returns results of function
}

// console.log(fullName('Clayton','Smith')); // Testing function 8., expected 'Clayton Smith'. received 'Clayton Smith'

// 9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.

let exampleArray1 = [40, 50, 11];
let exampleArray2 = [10, 10, 10, 10, 10, 5, 5, 5]; //Created two test arrays; 1's sum is greater than 100 and 2's is not

function numbersArray(array) {
    let numbersSum = 0;  // Declaring variable that will store the sum of all numbers in given array
for (i = 0; i < array.length; i++) { 
    numbersSum += array[i];     // For loop adds every number in array and stores the value in numbersSum
} if (numbersSum > 100) {
    return true;
    } else {
        return false;   // If condition returns true if the sum of the numbers in given array is greater than 100, if less than 100 returns false
    }
}

// console.log(numbersArray(exampleArray1));   // Testing 9., expected true, received true
// console.log(numbersArray(exampleArray2));   // Testing 9, expected false, received false

// 10. Write a function that takes an array of numbers and returns the average of all the elements in the array.

let array1 = [2, 5, 3, 17, 4];
let array2 = [22, -55, 127, 48, 0];

function arrayAverage(array) {
    let numbersSum = 0;      // Variable that stores sum of numbers in given array
for (i = 0; i < array.length; i++) { 
    numbersSum += array[i];
    }   return (numbersSum / array.length);     // For loop that adds each number of array, then returns the sum divded by the amount of numbers in given array
}

// console.log(arrayAverage(array1)); // Testing 10., expected 6.2, received 6.2
// console.log(arrayAverage(array2)); // Testing 10., expected 28.4, received 28.4

// 11. Write a function that takes two arrays of numbers and returns true if 
// the average of the elements in the first array is greater than the average of the elements in the second array.

arr1 = [42, 451, 66, 72, 4, 23];
arr2 = [4, 0, -3, 41];  // Declaring 2 arrays

function averageDeterminator(array1, array2) {
let sum1 = 0;
let sum2 = 0;      
for (i = 0; i < array1.length; i++) { 
    sum1 += array1[i];
}   
for (i = 0; i < array2.length; i++) { 
    sum2 += array2[i];              // Declared variables sum1 and sum2, to hold sum of each array, then added every number of respective arrays into 2 numbers
} if ((sum1 / array1.length) > (sum2 / array2.length)) {
    return true;
} else {
    return false;   // If condiion then says if the first array's sum average is greater than the sum average of the second array, return true, otherwise return false
    }
}

// console.log(averageDeterminator(arr1, arr2)); // Testing 11., expected true, received true

//12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a 
// number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.

function willBuyDrink(isHotOutside, moneyInPocket){
    return (isHotOutside && moneyInPocket > 10.50);     // Returns boolean value based off the answers of isHotOutside and moneyInPocket, and will only return true of both conditions are met
}

// console.log(willBuyDrink(true, 20.55));
// console.log(willBuyDrink(false, 999999.11));
// console.log(willBuyDrink(true, 10));    // Testing 12., expected true, false, false, received true, false, false

// 13. Create a function of your own that solves a problem. 
// - In comments, write what the function does and why you created it.

// My function calculates the minimum yearly gross salary for whatever state you type in, via abbreviation.

function yearlySalary(state) {
    let minWage = 0;
    let salary = 0;

    switch (state) {  // Setting up a switch statement to store minimum wage values for each state
        case 'AL':
        case 'LA':
        case 'MS':
        case 'SC':
        case 'TN':
        case 'GA':
        case 'IA':
        case 'ID':
        case 'IN':
        case 'KS':
        case 'KY':
        case 'NC':
        case 'ND':
        case 'NH':
        case 'OK':
        case 'PA':
        case 'TX':
        case 'UT':
        case 'WI':
        case 'WY':
            minWage = 7.25;
            break;
        case 'WV':
            minWage = 8.75;
            break;
        case 'NE':
            minWage = 9;
            break;
        case 'MT':
            minWage = 9.20;
            break;
        case 'OH':
            minWage = 9.30;
            break;
        case 'NV':
            minWage = 9.5;
            break;
        case 'MI':
            minWage = 9.87;
            break;
        case 'SD':
            minWage = 9.95;
            break;
        case 'HI':
            minWage = 10.1;
            break;
        case 'MN':
            minWage = 10.33;
            break;
        case 'AK':
            minWage = 10.34;
            break;
        case 'DE':
            minWage = 10.5;
            break;
        case 'AR':
        case 'FL':
        case 'VA':
            minWage = 11;
            break;
        case 'MO':
            minWage = 11.15;
            break;
        case 'NM':
            minWage = 11.5;
            break;
        case 'IL':
            minWage = 12;
            break;
        case 'RI':
            minWage = 12.25;
            break;
        case 'MD':
            minWage = 12.5;
            break;
        case 'VT':
            minWage = 12.55;
            break;
        case 'CO':
            minWage = 12.56;
            break;
        case 'ME':
            minWage = 12.75;
            break;
        case 'AZ':
            minWage = 12.80;
            break;
        case 'NJ':
            minWage = 13;
            break;
        case 'NY':
            minWage = 13.2;
            break;
        case 'OR':
            minWage = 13.5;
            break;
        case 'CT':
            minWage = 14;
            break;
        case 'MA':
            minWage = 14.25;
            break;
        case 'WA':
            minWage = 14.49;
            break;
        case 'CA':
            minWage = 15;
            break;
        case 'DC':
            minWage = 16.1;
            break;
        default:
            console.log('Invalid state.');
    } salary = (minWage * 160) * 12;
    salary = salary.toFixed(2); // hourly wage calculated out to yearly wage, rounded to the nearest 100th decimal pooint
    if (salary == 0.00) {
    return 'Please enter Valid state abbreviation.';  // if an invalid state is entered, the 'Invalid state. Please enter Valid state abbreviation.' string is returned
    } else {
    return '$' + salary;
    }
}

// console.log(yearlySalary('MO'));    // Returns $21408.00
console.log(yearlySalary('pink')); // Returns, 'Invalid state. Please enter Valid state abbreviation.'