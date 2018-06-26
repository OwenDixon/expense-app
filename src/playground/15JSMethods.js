//.map()
const numbers = [2, 4, 6, 8, 10];

const doubled = numbers.map(number => number * 2);

console.log(doubled);

var doubled = numbers.map(function (number){
    return number * 2;
});

console.log(doubled);

//.filter()
//ES6 Example
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//Using .filter() to return only even numbers
const evenNums = numbers.filter(number => number % 2 === 0);
console.log(evenNums);

var evenNums = numbers.filter(function(number) {
    return number % 2 ===0;
});

console.log(evenNums);

//.reduce()
const numbers = [10, 20, 30, 40 , 50];

const total = numbers.reduce((total, currentValue) => total + currentValue);
console.log(total);

const average = numbers.reduce((total, currentValue, index, array) => {
    total += currentValue;
    if(index === array.length -1){
        return total / array.length;    
    } else{
        return total
    }
});

console.log(average);

//.forEach()
const colours = [{colour: 'red'}, {colour: 'yellow'}, {colour: 'blue'}];
colours.forEach((obj) => console.log(obj.colour));

colours.forEach((obj) => {
    obj.colour = 'green';
});

colours.forEach((obj) => console.log(obj.colour));

//indexOf()
const Movies = ['Anchor Man', 'Ready Player One', 'War Games', 'Short Circuit 2'];
console.log(Movies.indexOf('Short Circuit 2'));

//.some()
const numbers = [50, 54, 32, 78, 20, 101];

const isHigherThan100 = numbers.some((number, index, arr) => {

    if (arr.length != 0) {        
        return number > 100;
    }
});

if (isHigherThan100) {
    console.log('Yay, there is a number over 100!');
} else {
    console.log('No numbers over 100');
}

//.every()
const allHigherThan100 = numbers.every((number, index, arr) => {
    if (arr.length != 0) {        
        return number > 100;
    }
});

if (allHigherThan100) {
    console.log('Yay, all the numbers are over 100!');
} else {
    console.log('Not all numbers are over 100');
}

//Object.keys()
const person = {
    name: 'Owen',
    gender: 'Male',
    dateOfBirth: '05/06/1990'
};

const keys = Object.keys(person);
const values = Object.values(person);
const entries = Object.entries(person);

console.log(keys);
//expected output ["name", "gender", "dateOfBirth"]

console.log(values);
//expected output ["Owen", "Male", "05/06/1990"]

console.log(entries);
//expected output [ ["name", "Owen"], ["gender", "Male"], ["dateOfBirth", "05/06/1990"] ]


//Object.freeze
const person = {
    name: 'Owen',
    gender: 'Male',
    dateOfBirth: '05/06/1990'
};

const frozenPerson = Object.freeze(person);

frozenPerson.name = "Jack";

console.log(`Hi my name is ${person.name}`);
//expected output: Hi my name is Owen

const scores = [1200, 50, 678, 1020, 900];

const finalScores = Object.freeze(scores);

finalScores[1] = 1000000;

console.log(finalScores);
//expected output: [1200, 50, 678, 1020, 900]

//.includes()
const shoppingCart = ['milk', 'bread', 'cheese', 'chicken'];
if(shoppingCart.includes('milk')){
    console.log('Milk is in the shopping cart');
} else{
    console.log('Milk has not been added to the list');
}

//Array.from()

const obj = {
    numberOne: 1,
    numberOne: 2,
    numberOne: 3,
    numberOne: 4,
    numberOne: 5
}

const numbers = Array.from(obj);
console.log(numbers);

const numbers = Array.from({length:5}, (number, index) => index + 1);
console.log(numbers);


//Spread

const arrayOne = [1, 2, 3, 4, 5];
const arrayTwo = [...arrayOne, 6, 7, 8, 9, 10];
console.log(arrayTwo);
//expected output [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const expense = {
    Type: 'Travel',
    description: "Train ticket",
    amount: 10.25,
    date: "14/03/2018"
};

const updateExpense = (expense) => {

    return {
        ...expense,
        amount: 12.15,
        note: "updated expense amount"
    }

}

console.log(updateExpense(expense));

//expected output {description: "Train ticket", amount: 12.15, date: "14/03/2018", note: "updated expense amount"}

//Rest

const returnEvens = (...args) => {

//The Rest Parameter is an array so array methods can be called
return args.filter(number => number % 2 === 0);

};

//expected output [2, 4, 6, 8, 10]
console.log(returnEvens(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
