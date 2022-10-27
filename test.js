// USer input testing

/*let name = window.prompt('What is your name?');
window.alert('Welcome, ' + name);*/

/* let username = prompt('Username:');
let password = prompt('Password:');

if (username == 'jarmstrong93' && password == '12345') {
    alert('Welcome back, Dickbag!');
} else if (username = 'cssmith17' && password == '6789') {
    alert('Welcome back, Clayton!');
} else {
    alert('Invalid Credentials.');
}
*/

function repeatWord(word, n){
    let finalWord = '';
    for(let i = 0; i < n; i++){
        finalWord = finalWord + word;
    }
}

repeatWord('Hello', 3);

//const createFullName = (firstName, lastName) => `${firstName} ${lastName}`;

console.log(createFullName('Clayton', 'Smith'));


//const doubleNumber = number => number * 2;

//console.log(doubleNumber(4));

let arr = [6, 23, 2, 1, 54]

//const getEvenNumbers = array => {
    let evenNumbers = [];
    for (let i of array) {
       if (i % 2 === 0) {
          evenNumbers.push(i);
        }
     }
   return evenNumbers;
}

 //console.log(getEvenNumbers(arr))

 const customers = [
    {
        name: 'Sam',
        address: {
            street: undefined,
            city: 'Phoenix',
            zip: '85308',
            state: 'AZ'
        },
        membershipLevel: 'GOLD',
        age: 32
    },
    //more customers with the same schema
];

//console.log(customers[0].name.charAt(0));


const patternSeeker = array => {
let newArray = [];
for (i = 0; i > array.length; i++){
    if (customers[i].membershipLevel === 'PLATINUM' || 'GOLD') {
        newArray.push(customers[i]);
    } else if (customers[i].membershipLevel === 'SILVER' && customers[i].age < 29) {
        newArray.push(customers[i]);
    } else if (customers[i].state === 'AZ)' && (customers[i].city === 'Peoria')) {
        newArray.push(customers[i]);
    } else if (customers[i].state != undefined && customers[i].zip != undefined && customers[i].city != undefined && customers[i].street != undefined) {
        newArray.push(customers[i]);
    } else if (customers[i].name.toUpperCase.charAt(0) === 'C') {
        newArray.push(customers[i]);
        }
    } return newArray;
}

console.log(patternSeeker(customers));


const createFullName = (firstName, lastName) => `${firstName} ${lastName}`;

const doubleNumber = number => number * 2;


const getEvenNumbers = array => {

     let evenNumbers = [];

     for (let i of array) {

        if (i % 2 === 0) {

           evenNumbers.push(i);

         }

      }

    return evenNumbers;

}