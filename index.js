                                                    //    JavaScript Practice Code

"use strict";
// intro to variables

// variables can store some information
// we can use that information later
// we can change that information later

// declare a variable 

var firstName = "Shivam";


// use a variable 
console.log(firstName);

// change value 

firstName = "Mohit";

console.log(firstName);



// rules for naming variables 

// you cannot start with number 
// example :- 
// 1value (invalid)
// value1 (valid)

var value1 = 2;
console.log(value1);

// you can use only undersore _ or dollar symbol 
// first_name (valid)
// _firstname (valid) 

// first$name (valid)
// $firstname (valid)

// you cannot use spaces 
// var first_name = "Shivam"; // snake case writing 
// var firstName = "Shivam"; // camel case writing 
// first name (invalid)

// convention 
// start with small letter and use camelCase 

// let keyword 
// declare variable with let keyword 

let firstName = "Shivam";
firstName = "Mohit";
console.log(firstName);



// block scope vs funtion scope (covered later in this video) 

// declare constants 

const pi = 3.14;
console.log(pi); 


// String indexing 

let firstName = "Shivamdfjakldsfdf";

//  h    a   r   s   h   i   t 
//  0    1   2   3   4   5   6

// console.log(firstName[0]);
// length of string 
// firstName.length 

console.log(firstName.length);

console.log(firstName[firstName.length-2]);

// last Index : length - 1  

// trim() 
// toUpperCase()
// toLowerCase()
// slice()

let firstName = "Shivam";

// console.log(firstName.length);
// firstName = firstName.trim(); // "Shivam"
// console.log(firstName)
// console.log(firstName.length);
// firstName = firstName.toUpperCase();
// firstName = firstName.toLowerCase();
// console.log(firstName);

// start index 
// end index

let newString = firstName.slice(1); // hars
console.log(newString); 


// typeof operator 

// data types (primitive data types)
// string "harhit"
// number 2, 4, 5.6 
// booleans 
// undefined
// null 
// BigInt
// Symbol

// let age = 22; 
// let firstName = "Shivam";

// // console.log(typeof age);

// // 22 -> "22"
// // convert number to string. 
// age = age + "";
// console.log(typeof(age)); "22"


// // convert string to number. 

// let myStr = +"34";
// console.log(typeof myStr);

// let age = "18";
// age = Number(age);
// console.log(typeof age); 


// string concatenation 

let string1 = "17";
let string2 = "10";

let newString = +string1 + +string2;
console.log(typeof newString); 


// template string 
let age = 22;
let firstName = "Shivam"

// "my name is Shivam and my age is 22 "
// let aboutMe = "my name is " + firstName + " and my age is " + age; 

let aboutMe = `my name is ${firstName} and my age is ${age}`

console.log(aboutMe); 


// undefined 
// null

let firstName;
console.log(typeof firstName);
firstName = "Shivam";
console.log(typeof firstName, firstName);

let myVariable = null;
console.log(myVariable);
myVariable = "Shivam";
console.log(myVariable, typeof myVariable);
console.log(typeof null);
// bug , error 

// BigInt
let myNumber = BigInt(12);
let sameMyNumber = 123n;
// console.log(myNumber);
// console.log(Number.MAX_SAFE_INTEGER);
console.log(myNumber+ sameMyNumber);


// booleans & comparison operator 

// booleans 
// true, false 

let num1 = 7;
let num2 = "7";

console.log(num1<num2);

// == vs === 
console.log(num1 === num2);

// != vs !==

console.log(num1 !== num2);


// truthy and falsy values 

// falsy values 


// false
// ""
// null 
// undefined
// 0 


// if else condition 

let age = 17;

if(age>=18){
    console.log("User can play ddlc");
}else {
    console.log("User can play mario");
}
// 

let num = 13;

if(num%2===0){
    console.log("even");
}else{
    console.log("odd");
}

// falsy values 


// false
// ""
// null 
// undefined
// 0

// truthy 
// "abc"
// 1, -1

let firstName= 0;

if(firstName){
    console.log(firstName);
}else{
    console.log("firstName is kinda empty");
} 


// ternary operator 

let age = 4;
let drink;

if(age>=5){
    drink = "coffee";
}else{
    drink = "milk";
}

console.log(drink);

// ternary operator / conditional operator 

let age = 3;
let drink = age >= 5 ? "coffee" : "milk";
console.log(drink); 


// and  or operator 



if(firstName[0] === "H"){
    console.log("your name starts with H")
}

if(age > 18){
    console.log("you are above 18");
}

// if(firstName[0] === "H" && age>18){
//     console.log("Name starts with H and above 18");
// }else{
//     console.log("inside else");
// }
let firstName = Shivam";
let age = 16;

if(firstName[0] === "H" || age>18){
    console.log("inside if");
}else{
    console.log("inside else");
} 


// nested if else

// winning number 19 

// 19 your guess is right 
// 17 too low 
// 20 too high 

let winningNumber = 19;
let userGuess = +prompt("Guess a number");

if(userGuess === winningNumber){
    console.log("Your guess is right!!");
}else{
    if(userGuess < winningNumber){
        console.log("too low !!!");
    }else{
        console.log("too high !!!");
    }
} 

// if 
// else if 
// else if 
// else if 
// else 

// let tempInDegree = 50;


if(tempInDegree < 0){
    console.log("extremely cold outside");
}else if(tempInDegree < 16){
    console.log("It is cold outside");
}else if(tempInDegree < 25){
    console.log("wheather is okay ");
}else if(tempInDegree < 35){
    console.log("lets go for swim");
}else if(tempInDegree < 45){
    console.log("turn on AC");
}else{
    console.log("too hot!!");
}

console.log("hello");
















// let tempInDegree = 50;


if(tempInDegree < 0){
    console.log("extremely cold outside");
}else if(tempInDegree < 16){
    console.log("It is cold outside");
}else if(tempInDegree < 25){
    console.log("wheather is okay ");
}else if(tempInDegree < 35){
    console.log("lets go for swim");
}else if(tempInDegree < 45){
    console.log("turn on AC");
}else{
    console.log("too hot!!");
}

console.log("hello there");

// 

let tempInDegree = 4;

if(tempInDegree > 40){
    console.log("too hot");
}else if(tempInDegree > 30){
    console.log("lets go for swim");
}else if(tempInDegree > 20){
    console.log("weather is cool");
}else if(tempInDegree > 10){
    console.log("it is very cold outside");
}else{
    console.log("extremely cold");
}

console.log("hello"); 


// switch statement 


let day = 7; 


if(day === 0){
    console.log("Sunday");
}else if(day ===1){
    console.log("Monday");
}else if(day ===2){
    console.log("Tuesday");
}else if(day ===3){
    console.log("Wednesday");
}else if(day ===4){
    console.log("Thrusday");
}else if(day ===5){
    console.log("Friday");
}else if(day ===6){
    console.log("Saturday");
}else{
    console.log("Invalid Day");
}

// 

let day = 9;

switch(day){
    case 0:
        console.log("Sunday");
        break; 
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thrusday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid Day");
} 

// while loop 

// 0 se 9 
// dry don't repeat yourself
let i = 0; // 1 2 3 4

while(i<=9){
    console.log(i);
    i++;
}
console.log(`current value of i is ${i}`);
console.log("hello"); 

// while loop example 
let num = 100;
// let total = 0; //1 + 2 +3
// let i = 0;


while(i<=100){
    total = total + i;
    i++;
}


console.log(total);

// let total = (num*(num+1))/2;
// console.log(total); 

// intro to for loop 
// print 0 to 9

for(let i = 0;i<=9;i++){
    console.log(i);
}

// console.log("value of i is ",i); 

// for loop example 

let total = 0;

let num = 100;

for(let i = 1; i<=num; i++){
    total = total + i;
}

console.log(total); 

// break keywork

// continue keyword 

for(let i = 1; i<=10; i++){
    if(i===4){
        break;
    }
    console.log(i);
}

for(let i = 1; i<=10; i++){
    if(i===4){
        continue;
    }
    console.log(i);
}
console.log("hello there");

// do while loop

while(i<=9){
    console.log(i);
    i++;
}

let i = 10;
do{
    console.log(i);
    i++;
}while(i<=9);

console.log("value of i is ", i); 

// intro to arrays 
// reference type 
// how to create arrays

// ordered collection of items 

// let fruits = ["apple", "mango", "grapes"];
// let numbers = [1,2,3,4];
// let mixed = [1,2,2.3, "string", null, undefined];
// console.log(mixed);
// console.log(numbers);
// console.log(fruits[2]);
let fruits = ["apple", "mango", "grapes"];
let obj = {}; // object literal
// console.log(fruits);
// fruits[1] = "banana";
// console.log(fruits);
console.log(typeof fruits);
console.log(typeof obj);
console.log(Array.isArray(fruits));
console.log(Array.isArray(obj));


// array indexing  

// array push pop 

// array shift unshift 

let fruits = ["apple", "mango", "grapes"];
console.log(fruits);
// push 
fruits.push("banana");
console.log(fruits);
// pop 
let poppedFruit = fruits.pop();
console.log(fruits);
console.log("popped fruits is", poppedFruit);

// unshift 
fruits.unshift("banana");
fruits.unshift("myfruit");
console.log(fruits);

// shift 
let removedFruit = fruits.shift();
console.log(fruits);
console.log("removed fruits is ", removedFruit); 

// primitve vs reference data types
let num1 = 6;
let num2 = num1;
console.log("value is num1 is", num1);
console.log("value is num2 is", num2);
num1++;
console.log("after incrementing num1")
console.log("value is num1 is", num1);
console.log("value is num2 is", num2);


// reference types 
// array 
let array1 = ["item1", "item2"];
let array2 = array1;
console.log("array1", array1);
console.log("array2", array2);
array1.push("item3");
console.log("after pushing element to array 1");
console.log("array1", array1);
console.log("array2", array2); 

// how to clone array 

// how to concatenate two arrays

let array1 = ["item1", "item2"];
// let array2 = ["item1", "item2"];
// let array2 = array1.slice(0).concat(["item3", "item4"]);
// let array2 = [].concat(array1,["item3", "item4"]);
// new way 
// spread operator
let oneMoreArray = ["item3", "item4"]
let array2 = [...array1, ...oneMoreArray];

array1.push("item3");

console.log(array1===array2);
console.log(array1)
console.log(array2)

// for loop in array 

let fruits = ["apple", "mango", "grapes", "banana"];

// for(let i=0; i<=9;i++){
//     console.log(i);
// }

// console.log(fruits.length);
// console.log(fruits[fruits.length-2]);
let fruits2 = [];
for(let i=0; i < fruits.length; i++){
    fruits2.push(fruits[i].toUpperCase());
}

console.log(fruits2); 

// use const for creating array

heap memory ["apple", "mango"] 0x11

const fruits = ["apple", "mango"]; // 0x11
fruits.push("banana");
console.log(fruits);

// while loop in array 
const fruits = ["apple", "mango", "grapes"];
const fruits2 = [];
let i = 0;
while(i<fruits.length){
    fruits2.push(fruits[i].toUpperCase());
    i++;
}
console.log(fruits2); 

// for of loop in array
const fruits = ["apple", "mango", "grapes", "fruit4", "fruit5"];
const fruits2 = [];

// for(let fruit of fruits){
//     fruits2.push(fruit.toUpperCase());
// }
// console.log(fruits2);

for(let i = 0; i<fruits.length; i++){
    console.log(fruits[i]);
} 

// for in loop in array
const fruits = ["apple", "mango", "grapes", "fruit4", "fruit5"];
const fruits2 = [];

for(let index in fruits){
    fruits2.push(fruits[index].toUpperCase());
}
console.log(fruits2); 

// array destructuring 
const myArray = ["value1", "value2", "value3","value4"];
// let myvar1 = myArray[0];
// let myvar2 = myArray[1];
// console.log("value of myvar1", myvar1);
// console.log("value of myvar2", myvar2);
let [myvar1, myvar2, ...myNewArray] = myArray;
console.log("value of myvar1", myvar1);
console.log("value of myvar2", myvar2);
console.log(myNewArray); 


// objects reference type  
// arrays are good but not sufficient 
// for real world data 
// objects store key value pairs 
// objects don't have index

// how to create objects 

// const person = {name:"Shivam",age:22};
const person = {
    name: "Shivam",
    age: 22,
    hobbies: ["guitar", "sleeping", "listening music"]
}
console.log(person);

// how to access data from objects 
// console.log(person["name"]);
// console.log(person["age"]);
// console.log(person.hobbies);

// how to add key value pair to objects
person["person"] = "male";
console.log(person); 


// difference between dot and bracket notaion
// const key = "email";
// const person = {
//     name: "Shivam",
//     age: 22,
//     "person hobbies": ["guitar", "sleeping", "listening music"]

// }

// console.log(person["person hobbies"]);
// person[key] = "Shivamvashisth@gmail.com";
// console.log(person);

// how to iterate object 
const person = {
    name: "Shivam",
    age: 22,
    "person hobbies": ["guitar", "sleeping", "listening music"]
}

// for in loop 
// Object.keys 

// for(let key in person){
//     // console.log(`${key} : ${person[key]}`);
//     console.log(key," : " ,person[key]);
// }

// console.log(typeof (Object.keys(person)));
// const val = Array.isArray((Object.keys(person)));
// console.log(val);

// for(let key of Object.keys(person)){
//     console.log(person[key]);
// } 

// computed properties

const key1 = "objkey1";
const key2 = "objkey2";

const value1 = "myvalue1";
const value2 = "myvalue2";

// const obj = {
//     objkey1 : "myvalue1",
//     objkey2 : "myvalue2",
// }

// const obj = {
//     [key1] : value1,
//     [key2] : value2
// }

const obj = {};

obj[key1] = value1;
obj[key2] = value2;
console.log(obj);


// spread operator
const array1 = [1, 2, 3];
const array2 = [5, 6, 7];

// const newArray = [...array1, ...array2, 89, 69];
const newArray = [..."123456789"];
console.log(newArray);

// spread operator in objects
const obj1 = {
  key1: "value1",
  key2: "value2",
};
const obj2 = {
  key1: "valueUnique",
  key3: "value3",
  key4: "value4",
};

// const newObject = { ...obj2, ...obj1, key69: "value69" };
// const newObject = { ...["item1", "item2"] };
// const newObject = { ..."abcdefghijklmnopqrstuvwxyz" };
// console.log(newObject);


// object destructuring
const band = {
  bandName: "led zepplin",
  famousSong: "stairway to heaven",
  year: 1968,
  anotherFamousSong: "kashmir",
};

let { bandName, famousSong, ...restProps } = band;
console.log(bandName);
console.log(restProps);


// objects inside array 
// very useful in real world applications

const users = [
    {userId: 1,firstName: 'Shivam', gender: 'male'},
    {userId: 2,firstName: 'mohit', gender: 'male'},
    {userId: 3,firstName: 'nitish', gender: 'male'},
]
for(let user of users){
    console.log(user.firstName);
}


// nested destructuring 
const users = [
    {userId: 1,firstName: 'Shivam', gender: 'male'},
    {userId: 2,firstName: 'mohit', gender: 'male'},
    {userId: 3,firstName: 'nitish', gender: 'male'},
]

const [{firstName: user1firstName, userId}, , {gender: user3gender}] = users;
console.log(user1firstName);
console.log(userId);
console.log(user3gender); 



function singHappyBirthday(){
    console.log("happy birthday to you ......");
}

function sumThreeNumbers(number1, number2, number3){
    return number1 + number2 + number3;
}



// isEven
input : 1 number 
output : true , false 

function isEven(number){
    return number % 2 === 0;
}

console.log(isEven(4));

// function 
// input : string 
// output: firstCharacter 

// function firstChar(anyString){
//     return anyString[0];
// }

// console.log(firstChar("zbc"));

// function 
// input : array, target (number)
// output: index of target if target present in array 

function findTarget(array, target){
    for(let i = 0; i<array.length; i++){
        if(array[i]===target){
            return i;
        }
    }
    return -1;
}
const myArray = [1,3,8,90]
const ans = findTarget(myArray, 4);
console.log(ans); 


// function expression 

// function singHappyBirthday(){
//     console.log("happy birthday to you ......");
// }

const singHappyBirthday = function(){
    console.log("happy birthday to you ......");
}

// singHappyBirthday();

const sumThreeNumbers = function(number1, number2, number3){
    return number1 + number2 + number3;
}
const ans = sumThreeNumbers(2,3,4);
// console.log(ans);


// function isEven(number){
//     return number % 2 === 0;
// }
const isEven = function(number){
    return number % 2 === 0;
}
// console.log(isEven(2));

const firstChar = function(anyString){
    return anyString[0];
}

const findTarget = function(array, target){
    for(let i = 0; i<array.length; i++){
        if(array[i]===target){
            return i;
        }
    }
    return -1;
} 

// arrow functions

// const singHappyBirthday = function(){
//     console.log("happy birthday to you ......");
// }

const singHappyBirthday = () => {
    console.log("happy birthday to you ......");
}

singHappyBirthday();

const sumThreeNumbers = (number1, number2, number3) => {
    return number1 + number2 + number3;
}

const ans = sumThreeNumbers(2,3,4);
console.log(ans);

// const isEven = function(number){
//     return number % 2 === 0;
// }

const isEven = number => number % 2 === 0;


console.log(isEven(4));

const firstChar = anyString => anyString[0];

console.log(firstChar("Shivam"));


const findTarget = (array, target) => {
    for(let i = 0; i<array.length; i++){
        if(array[i]===target){
            return i;
        }
    }
    return -1;
} 


// hoisting 

hello();

function hello(){
    console.log("hello world");
}
console.log(hello);
const hello = "hello world";
console.log(hello); 



// functions inside function 
function app(){
    const myFunc = () =>{
        console.log("hello from myFunc")
    }

    const addTwo = (num1, num2) =>{
        return num1 + num2;
    }

    const mul = (num1, num2) => num1* num2;

    console.log("inside app");
    myFunc();
    console.log(addTwo(2,3));
    console.log(mul(2,3));
}
app(); 



// lexical scope 
const myVar = "value1";

function myApp(){


    function myFunc(){
        // const myVar = "value59";
        const myFunc2 = () =>{
            console.log("inside myFunc", myVar);
        }
        myFunc2();
    }


    console.log(myVar);
    myFunc();
}

myApp(); 



// block scope vs function scope 


// let and const are block scope
// var is function scope 

// if(true){
//     var firstName = "Shivam";
//     console.log(firstName);
// }

// console.log(firstName);

function myApp(){
    if(true){
        var firstName = "Shivam";
        console.log(firstName);
    }

    if(true){
        console.log(firstName);
    }
    console.log(firstName);
}

myApp(); 


// default parameters 

// function addTwo(a,b){
//     if(typeof b ==="undefined"){
//         b = 0;
//     }
//     return a+b;
// }

function addTwo(a,b=0){
    return a+b;
}

const ans = addTwo(4, 8);
console.log(ans); 



// rest parameters 

// function myFunc(a,b,...c){
//     console.log(`a is ${a}`);
//     console.log(`b is ${b}`);
//     console.log(`c is`, c);
// }

// myFunc(3,4,5,6,7,8,9);

function addAll(...numbers){
    let total = 0;
    for(let number of numbers){
        total = total + number;
    }
    return total;
}

const ans = addAll(4,5,4,2,10);
console.log(ans); 


// param destructuring 

// object 
// react 

const person = {
    firstName: "Shivam",
    gender: "male",
    age: 500
}

// function printDetails(obj){
//     console.log(obj.firstName);
//     console.log(obj.gender);
// }


function printDetails({firstName, gender, age}){
    console.log(firstName);
    console.log(gender);
    console.log(age);
}

printDetails(person); 


// callback functions 

function myFunc2(name){
    console.log("inside my func 2")
    console.log(`your name is ${name}`);
}

function myFunc(callback){
    console.log("hello there I am a func and I can..")
    callback("Shivam");
}


myFunc(myFunc2); 



// function returning function 

function myFunc(){
    function hello(){
        return "hello world"
    }
    return hello;
}

const ans = myFunc();
console.log(ans()); 


// important array methods 

 const numbers = [4,2,5,8];

// function myFunc(number, index){
//     console.log(`index is ${index} number is ${number}`);
// }

// numbers.forEach(function(number,index){
//     console.log(`index is ${index} number is ${number}`);
// });

// numbers.forEach(function(number, index){
//     console.log(number*3, index);
// })

const users = [
    {firstName: "Shivam", age: 23},
    {firstName: "mohit", age: 21},
    {firstName: "nitish", age: 22},
    {firstName: "garima", age: 20},
]

// users.forEach(function(user){
//     console.log(user.firstName);
// });

// users.forEach((user, index)=>{
//     console.log(user.firstName, index);
// })

// for(let user of users){
//     console.log(user.firstName);
// }



// map method 
// const numbers = [3,4,6,1,8];

// const square = function(number){
//     return number*number;
// }

// const squareNumber = numbers.map((number, index)=>{
//     return index;
// });
// console.log(squareNumber);

const users = [
    {firstName: "Shivam", age: 23},
    {firstName: "mohit", age: 21},
    {firstName: "nitish", age: 22},
    {firstName: "garima", age: 20},
]

const userNames = users.map((user)=>{
    return user.firstName;
});

console.log(userNames); 

// filter method 

const numbers = [1,3,2,6,4,8];



const evenNumbers = numbers.filter((number)=>{
    return number % 2 === 0;
});
console.log(evenNumbers); 

// reduce 
const numbers = [1,2,3,4,5, 10];

// aim : sum of all the numbers in array 

// const sum = numbers.reduce((accumulator, currentValue)=>{
//     return accumulator + currentValue;
// }, 100);

// console.log(sum);
// accumulator , currentValue,  return 
// 1               2              3 
// 3               3              6
// 6               4              10
// 10              5              15
// 15              10             25


// const userCart = [
//     {productId: 1, productName: "mobile", price: 12000},
//     {productId: 2, productName: "laptop", price: 22000},
//     {productId: 3, productName: "tv", price: 15000},
// ]

// const totalAmount = userCart.reduce((totalPrice, currentProduct)=>{
//     return totalPrice + currentProduct.price;
// }, 0)

// console.log(totalAmount);

// total price      currentValue     return 
// 0                {}                  12000
// 12000            22000                34000
// 34000            15000                49000 



// sort method 
// ASCII TABLE 
//char : ascii value


// '0' : 48
// '1' : 49
// '2' : 50
// '3' : 51
// '4' : 52
// '5' : 53
// '6' : 54
// '7' : 55
// '8' : 56
// '9' : 57


// ':' : 58
// ';' : 59
// '<' : 60
// '=' : 61
// '>' : 62
// '?' : 63
// '@' : 64


// 'A' : 65
// 'B' : 66
// 'C' : 67
// 'D' : 68
// 'E' : 69
// 'F' : 70
// 'G' : 71
// 'H' : 72
// 'I' : 73
// 'J' : 74
// 'K' : 75
// 'L' : 76
// 'M' : 77
// 'N' : 78
// 'O' : 79
// 'P' : 80
// 'Q' : 81
// 'R' : 82
// 'S' : 83
// 'T' : 84
// 'U' : 85
// 'V' : 86
// 'W' : 87
// 'X' : 88
// 'Y' : 89
// 'Z' : 90



// '[' : 91
// '\' : 92
// ']' : 93
// '^' : 94
// '_' : 95
// '`' : 96



// 'a' : 97
// 'b' : 98
// 'c' : 99
// 'd' : 100
// 'e' : 101
// 'f' : 102
// 'g' : 103
// 'h' : 104
// 'i' : 105
// 'j' : 106
// 'k' : 107
// 'l' : 108
// 'm' : 109
// 'n' : 110
// 'o' : 111
// 'p' : 112
// 'q' : 113
// 'r' : 114
// 's' : 115
// 't' : 116
// 'u' : 117
// 'v' : 118
// 'w' : 119
// 'x' : 120
// 'y' : 121
// 'z' : 122
// '{' : 123
// '|' : 124
// '}' : 125


// sort  

// 5,9,1200, 400, 3000
// 5, 9, 400, 1200, 3000 (expected)

// ["5", "9", "1210", "410", "3000"] 
// [53, 57, 49, 52, 51]

// const userNames = ['Shivam', 'abcd', 'mohit', 'nitish', 'aabc', 'ABC', 'Shivam'];
// userNames.sort();
// console.log(userNames);

// const numbers = [5,9,1200, 410, 3000];
// numbers.sort((a,b)=>{
//     return b-a;
// });
// numbers.sort((a,b)=>a-b);
// console.log(numbers);

// 1200,410 
// a-b ---> 790
// a-b ---> postive (greater than 0) ---> b, a
// 410 , 1200

// a-b ---> negative ----> a,b
// 5, 9 ---> -4 
// price lowToHigh HighToLow 
const products = [
    {productId: 1, produceName: "p1",price: 300 },
    {productId: 2, produceName: "p2",price: 3000 },
    {productId: 3, produceName: "p3",price: 200 },
    {productId: 4, produceName: "p4",price: 8000 },
    {productId: 5, produceName: "p5",price: 500 },
]

// lowToHigh
const lowToHigh = products.slice(0).sort((a,b)=>{
    return a.price-b.price
});

const highToLow = products.slice(0).sort((a,b)=>{
    return b.price-a.price;
});



const users = [
    {firstName: "Shivam", age: 23},
    {firstName: "mohit", age: 21},
    {firstName: "nitish", age: 22},
    {firstName: "garima", age: 20},
]


users.sort((a,b)=>{
    if(a.firstName > b.firstName){
        return 1;
    }else{
        return -1;
    }
});

console.log(users); 



// find method 

// const myArray = ["Hello", "catt", "dog", "lion"];

// function isLength3(string){
//     return string.length === 3;
// }

// const ans = myArray.find((string)=>string.length===3);
// console.log(ans);

const users = [
    {userId : 1, userName: "Shivam"},
    {userId : 2, userName: "harsh"},
    {userId : 3, userName: "nitish"},
    {userId : 4, userName: "mohit"},
    {userId : 5, userName: "aaditya"},
];

const myUser = users.find((user)=>user.userId===3);
console.log(myUser); 



// every method
// const numbers = [2,4,6,9,10];


// const ans = numbers.every((number)=>number%2===0);

// console.log(ans);

const userCart = [
    {productId: 1, productName: "mobile", price: 12000},
    {productId: 2, productName: "laptop", price: 22000},
    {productId: 3, productName: "tv", price: 35000},
]


const ans = userCart.every((cartItem)=>cartItem.price < 30000);
console.log(ans); 



// some method 

const numbers = [3,5,11,9];

// kya ek bhi number esa hai jo even hai 
// true 

// const ans = numbers.some((number)=>number%2===0);
// console.log(ans);

const userCart = [
    {productId: 1, productName: "mobile", price: 12000},
    {productId: 2, productName: "laptop", price: 22000},
    {productId: 3, productName: "tv", price: 35000},
    {productId: 3, productName: "macbook", price: 25000},
]

const ans = userCart.some((cartItem)=>cartItem.price > 100000);
console.log(ans);


// fill method 
// value , start , end 

// const myArray = new Array(10).fill(0);
// console.log(myArray);

const myArray = [1,2,3,4,5,6,7,8];
myArray.fill(0,2,5);
console.log(myArray); 



// splice method 
// start , delete , insert 

const myArray = ['item1', 'item2', 'item3'];

// delete
// const deletedItem = myArray.splice(1, 2);
// console.log("delted item", deletedItem);
// insert 
// myArray.splice(1, 0,'inserted item');

// insert and delete 
const deletedItem = myArray.splice(1, 2, "inserted item1", "inserted item2")
console.log("delted item", deletedItem);
console.log(myArray); 



// iterables 
// jispe hum for of loop laga sakein
// string , array are iterable 

// const firstName = "Shivam";
// for(let char of firstName){
//     console.log(char);
// }

const items = ['item1', 'item2', 'item3'];
// for(let item of items){
//     console.log(item);
// }

// array like object 
// jinke pas length property hoti hai 
// aur jiko hum index se access kar sakte hai
// example :- string 

// const firstName = "Shivam";
// console.log(firstName.length);
// console.log(firstName[2]); 



// Sets (it is iterable)
// store data  
// sets also have its own methods
// No index-based access 
// Order is not guaranteed
// unique items only (no duplicates allowed)
// const items = ['item1', 'item2', 'item3'];
// const numbers = new Set();
// numbers.add(1);
// numbers.add(2);
// numbers.add(3);
// numbers.add(4);
// numbers.add(5);
// numbers.add(6);
// numbers.add(items);
// if(numbers.has(1)){
//     console.log("1 is present")
// }else{
//     console.log("1 is not present")
// }
// for(let number of numbers){
//     console.log(number);
// }
// const myArray = [1,2,4,4,5,6,5,6];
// const uniqueElements = new Set(myArray);
// let length = 0;
// for(let element of uniqueElements){
//     length++;
// }

// console.log(length); 



// Maps
// map is an iterable

// store data in ordered fashion

// store key value pair (like object)
// duplicate keys are not allowed like objects


// different between maps and objects

// objects can only have string or symbol
// as key 

// in maps you can use anything as key
// like array, number, string 

// object literal 
// key -> string 
// key -> symbol
// const person = {
//     firstName : "Shivam",
//     age: 7,
//     1:"one"
// }
// // console.log(person.firstName);
// // console.log(person["firstName"]);
// // console.log(person[1]);
// for(let key in person){
//     console.log(typeof key);
// }

// key value pair 
// const person = new Map();
// person.set('firstName', 'Shivam');
// person.set('age', 7);
// person.set(1,'one');
// person.set([1,2,3],'onetwothree');
// person.set({1: 'one'},'onetwothree');
// console.log(person);
// console.log(person.get(1));
// for(let key of person.keys()){
//     console.log(key, typeof key);
// }
// for(let [key, value] of person){
//     // console.log(Array.isArray(key));
//     console.log(key, value)
// }

const person1 = {
    id: 1,
    firstName: "Shivam"
}
const person2 = {
    id: 2,
    firstName: "harshta"
}

const extraInfo = new Map();
extraInfo.set(person1, {age: 8, gender: "male"});
extraInfo.set(person2, {age: 9, gender: "female"});
// console.log(userInfo);
console.log(person1.id);
console.log(extraInfo.get(person1).gender);
console.log(extraInfo.get(person2).gender);



// clone using Object.assign 

// memory  

const obj = {
    key1: "value1",
    key2: "value2"
}

// const obj2 = {'key69': "value69",...obj};
// const obj2 = Object.assign({'key69': "value69"}, obj);
// obj.key3 = "value3";
// console.log(obj);
// console.log(obj2);




// optional chaining 

const user  = {
    firstName: "Shivam",
    // address: {houseNumber: '1234'}
}



console.log(user?.firstName);
console.log(user?.address?.houseNumber); 



// methods
// function inside object

function personInfo(){
    console.log(`person name is ${this.firstName} and age is ${this.age}`);
}

const person1 = {
    firstName : "harsh",
    age: 8,
    about: personInfo
}
const person2 = {
    firstName : "mohit",
    age: 18,
    about: personInfo
}
const person3 = {
    firstName : "nitish",
    age: 17,
    about: personInfo
}

person1.about();
person2.about();
person3.about();


// console.log(window);
// "use strict";
// function myFunc(){

//     console.log(this);
// }
// myFunc(); 



function about(hobby, favMusician){
    console.log(this.firstName, this.age, hobby, favMusician);
}
const user1 = {
    firstName : "Shivam",
    age: 8,   
}
const user2 = {
    firstName : "mohit",
    age: 9,

}

// apply
// about.apply(user1, ["guitar", "bach"]);
// const func = about.bind(user2, "guitar", "bach");
// func();




const user1 = {
    firstName : "Shivam",
    age: 8,
    about: function(){
        console.log(this.firstName, this.age);
    }   
}

// don't do this mistake 

// user1.about();
const myFunc = user1.about.bind(user1);
myFunc(); 



// arrow functions 

const user1 = {
    firstName : "Shivam",
    age: 8,
    about: () => {
        console.log(this.firstName, this.age);
    }   
}

user1.about(user1); 



// const user1 = {
//     firstName : "Shivam",
//     age: 8,
//     about: function(){
//         console.log(this.firstName, this.age);
//     }   
// }

// const user1 = {
//     firstName : "Shivam",
//     age: 8,
//     about(){
//         console.log(this.firstName, this.age);
//     }   
// }



user1.about(); 




// function (that function create object)
// 2.) add key value pair 
// 3.) object ko return krega 
function createUser(firstName, lastName, email, age, address){
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    user.about = function(){
        return `${this.firstName} is ${this.age} years old.`;
    };
    user.is18 =  function(){
        return this.age >= 18;
    }
    return user;
}

const user1 = createUser('Shivam', 'Shukla', 'Shivam@gmail.com', 19, "my address");
console.log(user1);
const is18 = user1.is18();
const about = user1.about();
console.log(about); 



const userMethods = {
    about : function(){
        return `${this.firstName} is ${this.age} years old.`;
    },
    is18 : function(){
        return this.age >= 18;
    }
}
function createUser(firstName, lastName, email, age, address){
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    user.about = userMethods.about;
    user.is18 = userMethods.is18;
    return user;
}

const user1 = createUser('Shivam', 'Shukla', 'Shivam@gmail.com', 9, "my address");
const user2 = createUser('harsh', 'Shukla', 'Shivam@gmail.com', 19, "my address");
const user3 = createUser('mohit', 'Shuklaa', 'Shivam@gmail.com', 17, "my address");
console.log(user1.about());
console.log(user3.about()); 



const userMethods = {
    about : function(){
        return `${this.firstName} is ${this.age} years old.`;
    },
    is18 : function(){
        return this.age >= 18;
    },
    sing: function(){
        return 'toon na na na la la ';
    }
}
function createUser(firstName, lastName, email, age, address){
    const user = Object.create(userMethods);// {}
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    return user;
}

const user1 = createUser('Shivam', 'Shukla', 'Shivam@gmail.com', 9, "my address");
const user2 = createUser('harsh', 'Shukla', 'Shivam@gmail.com', 19, "my address");
const user3 = createUser('mohit', 'Shuklaa', 'Shivam@gmail.com', 17, "my address");
console.log(user1);
console.log(user1.about());
// console.log(user3.sing()); 



const obj1 = {
    key1: "value1",
    key2: "value2"
}

// __proto__

// offical ecmascript documentation 

// [[prototype]]

// __proto__ , [[prototype]]



// prototype    

const obj2 = Object.create(obj1); // {}
// there is one more way to create empty object
obj2.key3 = "value3";
// obj2.key2 = "unique";
console.log(obj2);

console.log(obj2.__proto__);




function hello(){
    console.log("hello world");
}

// javascript function ===> function  + object

// console.log(hello.name);

// you can add your own properties 
// hello.myOwnProperty = "very unique value";
// console.log(hello.myOwnProperty);

// name property ---> tells function name;

// function provides more usefull properties.


// console.log(hello.prototype); // {}

// only functions provide prototype property

// hello.prototype.abc = "abc";
// hello.prototype.xyz = "xyz";
// hello.prototype.sing = function(){
//     return "lalalla";
// };
// console.log(hello.prototype.sing()); 



// const userMethods = {
//     about : function(){
//         return `${this.firstName} is ${this.age} years old.`;
//     },
//     is18 : function(){
//         return this.age >= 18;
//     },
//     sing: function(){
//         return 'toon na na na la la ';
//     }
// }
function createUser(firstName, lastName, email, age, address){
    const user = Object.create(createUser.prototype);// {}
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    return user;
}
createUser.prototype.about = function(){
    return `${this.firstName} is ${this.age} years old.`;
};
createUser.prototype.is18 = function (){
    return this.age >= 18; 
}
createUser.prototype.sing = function (){
    return "la la la la ";
}


const user1 = createUser('Shivam', 'Shukla', 'Shivam@gmail.com', 18, "my address");
const user2 = createUser('harsh', 'Shukla', 'Shivam@gmail.com', 19, "my address");
const user3 = createUser('mohit', 'Shuklaa', 'Shivam@gmail.com', 17, "my address");
console.log(user1);
console.log(user1.is18()); 



// new keyword 
// 1.) this = {}
// 2.) return {} 
//

// __proto__ 
// // official ecmascript document
// [[prototype]]

// constructor function 
function CreateUser(firstName, lastName, email, age, address){
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
}
CreateUser.prototype.about = function(){
    return `${this.firstName} is ${this.age} years old.`;
};
CreateUser.prototype.is18 = function (){
    return this.age >= 18; 
}
CreateUser.prototype.sing = function (){
    return "la la la la ";
}


const user1 = new CreateUser('Shivam', 'Shukla', 'Shivam@gmail.com', 18, "my address");
const user2 = new CreateUser('harsh', 'Shukla', 'Shivam@gmail.com', 19, "my address");
const user3 = new CreateUser('mohit', 'Shuklaa', 'Shivam@gmail.com', 17, "my address");
console.log(user1);
console.log(user1.is18()); 



function CreateUser(firstName, lastName, email, age, address){
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
}
CreateUser.prototype.about = function(){
    return `${this.firstName} is ${this.age} years old.`;
};
CreateUser.prototype.is18 = function (){
    return this.age >= 18; 
}
CreateUser.prototype.sing = function (){
    return "la la la la ";
}


const user1 = new CreateUser('Shivam', 'Shukla', 'Shivam@gmail.com', 18, "my address");
const user2 = new CreateUser('harsh', 'Shukla', 'Shivam@gmail.com', 19, "my address");
const user3 = new CreateUser('mohit', 'Shuklaa', 'Shivam@gmail.com', 17, "my address");

for(let key in user1){
    // console.log(key);
    if(user1.hasOwnProperty(key)){
        console.log(key);
    }




// let numbers = [1,2,3];

// // console.log(Object.getPrototypeOf(numbers));
// console.log(Array.prototype);
// console.log(numbers);

// function hello(){
//     console.log("hello");
// }



// 2015 / es6 
// class keyword 
// class are fake

class CreateUser{
    constructor(firstName, lastName, email, age, address){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.age = age;
        this.address = address;
    }

    about(){
        return `${this.firstName} is ${this.age} years old.`;
    }
    is18(){
        return this.age >= 18;
    }
    sing(){
        return "la la la la ";
    }

}


const user1 = new CreateUser('Shivam', 'Shukla', 'Shivam@gmail.com', 18, "my address");
const user2 = new CreateUser('harsh', 'Shukla', 'Shivam@gmail.com', 19, "my address");
const user3 = new CreateUser('mohit', 'Shukla', 'Shivam@gmail.com', 17, "my address");
// console.log(Object.getPrototypeOf(user1));



class Animal {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    eat(){
        return `${this.name} is eating`;
    }

    isSuperCute(){
        return this.age <= 1;
    }

    isCute(){
        return true;
    }
}

class Dog extends Animal{

} 

const tommy = new Dog("tommy", 3);
console.log(tommy);
console.log(tommy.isCute());



// super 
class Animal {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    eat(){
        return `${this.name} is eating`;
    }

    isSuperCute(){
        return this.age <= 1;
    }

    isCute(){
        return true;
    }
}

class Dog extends Animal{
    constructor(name, age, speed){
        super(name,age);
        this.speed = speed;
    }

    run(){
        return `${this.name} is running at ${this.speed}kmph`
    }
} 
// object / instance 
const tommy = new Dog("tommy", 3,45);
console.log(tommy.run());



// same method in subclass
class Animal {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    eat(){
        return `${this.name} is eating`;
    }

    isSuperCute(){
        return this.age <= 1;
    }

    isCute(){
        return true;
    }
}

class Dog extends Animal{
    constructor(name, age, speed){
        super(name,age);
        this.speed = speed;
    }

    eat(){
        return `Modified Eat : ${this.name} is eating`
    }

    run(){
        return `${this.name} is running at ${this.speed}kmph`
    }
} 
// object / instance 
// const tommy = new Dog("tommy", 3,45);
// console.log(tommy.run());
// console.log(tommy.eat());

const animal1 = new Animal('sheru', 2);
console.log(animal1.eat()); 



// getter and setters 
class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }
    set fullName(fullName){
        const [firstName, lastName] = fullName.split(" ");
        this.firstName = firstName;
        this.lastName = lastName;
    }
}


const person1 = new Person("Shivam", "sharma", 5);
// console.log(person1.fullName());
// console.log(person1.fullName);
// person1.fullName = "mohit vashistha";
// console.log(person1);



// static methods and properties
class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    static classInfo(){
        return 'this is person class';
    }
    static desc = "static property";
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }
    set fullName(fullName){
        const [firstName, lastName] = fullName.split(" ");
        this.firstName = firstName;
        this.lastName = lastName;
    }
    eat(){
        return `${this.firstName} is eating`;
    }

    isSuperCute(){
        return this.age <= 1;
    }

    isCute(){
        return true;
    }
}

const person1 = new Person("Shivam", "Shukla", 8);
// // console.log(person1.eat());
// const info = Person.classInfo();
// console.log(person1.desc);
// console.log(info);





//  
// 
// 
// DOM 
// document object model 
// overview 
// how to use 
// deep study
// console.dir(document); 


// select element using get element by id

const mainHeading = document.getElementById("main-heading");
console.log(mainHeading); 


// select element using query selector

// const mainHeading = document.getElementById("main-heading");
const mainHeading = document.querySelector("#main-heading");
const header = document.querySelector(".header");
const navItem = document.querySelectorAll(".nav-item")
console.log(navItem); 


// change text 
// textContent and innerText
// const mainHeading = document.getElementById("main-heading");
// console.log(mainHeading.innerText);
// mainHeading.textContent = "This is something else";
// console.log(mainHeading.textContent); 


// change the styles of elements
const mainHeading = document.querySelector("div.headline h2");
console.log(mainHeading.style);
mainHeading.style.backgroundColor = "blue";
mainHeading.style.border = "20px solid green";


// get and set attrubutes
const link = document.querySelector("a");
console.log(link.getAttribute("href").slice(1));
// link.setAttribute("href", "https://codprog.com");
// console.log(link.getAttribute("href"));

// const inputElement = document.querySelector(".form-todo input");
// console.log(inputElement.getAttribute("type"));

// get multiple elements using getElements by class name 
// get multiple elements items using querySelectorAll
// const navItems = document.getElementsByClassName("nav-item"); // HTMLCollection
// console.log(navItems);
// console.log(Array.isArray(navItems));
// const navItems = document.querySelectorAll(".nav-item"); // NodeList
// console.log(navItems[1]); 



// get multiple elements using getElements by class name 
// get multiple elements items using querySelectorAll
// array like object ---> indexing, length property 
// let navItems = document.getElementsByTagName("a"); // HTMLCollection
// console.log(navItems);
// we can't use forEach method to iterate through HTMLCollection
// simple for loop 
// for of loop 
// forEach 

// for(let i=0; i< navItems.length; i++){
//     // console.log(navItems[i]);
//     const navItem = navItems[i];
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";

// }

// for(let navItem of navItems){
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";
// }

// navItems = Array.from(navItems);
// console.log(Array.isArray(navItems));
// navItems.forEach((navItem)=>{
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";
// })

// console.log(Array.isArray(navItems));
// const navItems = document.querySelectorAll(".nav-item"); // NodeList
// console.log(navItems[1]);

// let navItems = document.querySelectorAll("a");
// navItems = Array.from(navItems);
// console.log(Array.isArray(navItems));
// simple for loop 
// for of loop 
// forEach 
// for(let i=0; i< navItems.length; i++){
//     // console.log(navItems[i]);
//     const navItem = navItems[i];
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";

// }

// for(let navItem of navItems){
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";
// }
// navItems.forEach((navItem)=>{
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";
// })
// console.log(navItems); 


// innerHtML 
const headline = document.querySelector(".headline");
// console.log(headline.innerHTML);
// headline.innerHTML = "<h1>Inner html changed </h1>";
// headline.innerHTML += "<button class= \"btn\"> Learn More </button>" 
// console.log(headline.innerHTML);


// const rootNode = document.getRootNode();
// const htmlElementNode = rootNode.childNodes[0];
// // console.log(htmlElementNode.childNodes); NodeList(3) [head, text, body]
// const headElementNode = htmlElementNode.childNodes[0];
// const textNode1 = htmlElementNode.childNodes[1];
// const bodyElementNode = htmlElementNode.childNodes[2];
// console.log(headElementNode.childNodes);
// sibling relation 
// const h1 = document.querySelector("h1");
// const body = h1.parentNode.parentNode;
// body.style.color = "#efefef";
// body.style.backgroundColor = "#333"
// const body = document.body
// body.style.color = "#efefef";
// body.style.backgroundColor = "#333"
// const head = document.querySelector("head");
// // console.log(head);
// const title = head.querySelector("title");
// console.log(title.childNodes);
const container = document.querySelector(".container");
console.log(container.children); 


// const sectionTodo = document.querySelector(".section-todo");
// console.log(sectionTodo.classList);
// sectionTodo.classList.add('bg-dark');
// sectionTodo.classList.remove("container");
// const ans = sectionTodo.classList.contains("container");
// console.log(ans);
// sectionTodo.classList.toggle("bg-dark");
// sectionTodo.classList.toggle("bg-dark");
const header = document.querySelector(".header");

// header.classList.add("bg-dark");
console.log(header.classList);


// Add new HTML elements to page 


// innerHTML to add html element

const todoList = document.querySelector(".todo-list");
// console.log(todoList.innerHTML)
// todoList.innerHTML = "<li>New Todo 2 </li>"
// todoList.innerHTML += "<li>New Todo </li>";
// todoList.innerHTML += "<li>teach students </li>";

// when you should use it , when you should not
todoList.insertAdjacentElement("afterbegin", '<li>Hi</li>') 


// document.createElement()
// append
// prepend
// remove
// const newTodoItem = document.createElement("li");
// // const newTodoItemText = document.createTextNode("Teach students");
// newTodoItem.textContent = "Teach students";
// const todoList = document.querySelector(".todo-list");
// todoList.prepend(newTodoItem);
// console.log(newTodoItem);
// const todo1 = document.querySelector('.todo-list li');
// todo1.remove();
// console.log(todo1)

// before 
// after

// const newTodoItem = document.createElement("li");
// newTodoItem.textContent = "Teach students";
// const todoList = document.querySelector(".todo-list");
// todoList.after(newTodoItem); 


// elem.insertAdjacentHTML(where, html)
// beforebegin
// afterbegin;
// beforeend;
// afterend;

// const todoList = document.querySelector(".todo-list");
// todoList.insertAdjacentHTML("beforeend", "<li>Teach Students </li>"); 


// clone nodes
// const ul = document.querySelector(".todo-list");
// const li = document.createElement("li");
// li.textContent = "new todo";
// const li2 = li.cloneNode(true);
// ul.append(li);
// ul.prepend(li2);


// some old methods to support poor IE
// appendChild;
// insertBefore;
// replaceChild;
// removeChild
// const ul = document.querySelector(".todo-list");

// new element
// const li = document.createElement("li");
// li.textContent = "new todo";


// const referenceNode = document.querySelector(".first-todo");

// ul.removeChild(referenceNode); 


const ul = document.querySelector(".todo-list");
const listItems = ul.getElementsByTagName("li");

const sixthLi = document.createElement("li");
sixthLi.textContent = "item 6";

ul.append(sixthLi);
console.log(listItems); 


// how to get the dimension of element
// height width 
const sectionTodo = document.querySelector(".section-todo");
const info = sectionTodo.getBoundingClientRect();
console.log(info);



// intro to events
// click 
// event add karne ke 3 tarike hai 
// 1.) 
const btn = document.querySelector(".btn-headline");
// method --- addEventListener
// function clickMe(){
//     console.log("you clicked me !!!!!");
// }
// btn.addEventListener("click", function(){
//     console.log("you clicked me !!!!");
// });


// btn.addEventListener("click", ()=>{
//     console.log("arrow function !!!")
// }); 


// this keyword
const btn = document.querySelector(".btn-headline");

btn.addEventListener("click",function(){
    console.log("you clicked me !!!!");
    console.log("value of this")
    console.log(this);
}); 


const allButtons = document.querySelectorAll(".my-buttons button");


// for(let button of allButtons){
//     button.addEventListener("click", function(){
//         console.log(this);
//     })
// }

// for(let i = 0 ; i< allButtons.length; i++){
//     allButtons[i].addEventListener("click", function(){
//         console.log(this);
//     })
// }
// allButtons.forEach(function(button){
//     button.addEventListener("click", function(){
//         console.log(this);
//         });
// }) 


// event object 
// const firstButton = document.querySelector("#one");



// firstButton.addEventListener("click", function(event){
//     console.log(event);
// })

// jab bhi mai kisi bhi element pe event listener add hoga 
// js Engine --- line by line execute karta hai 
// browser ---- js Engine + extra features 
// browser ----- js Engine + WebApi

// jab browser ko pata chala ki user ne event perform kia 
// jo hum listen kar rahe hai 
// browser ----- 2 
// 1.) callback function hai vo js Engine ko degi ...... 
// 2.)  callback function ke sath browser jo event hua hai uski information bhi dega
// ye info hamein ek object ke form mai milegi 


const allButtons = document.querySelectorAll(".my-buttons button");


for(let button of allButtons){
    button.addEventListener("click",(e)=>{
        console.log(e.currentTarget);
    })
} 



console.log("script start !!!!!")
const allButtons = document.querySelectorAll(".my-buttons button");

allButtons.forEach((button)=>{
    button.addEventListener("click", (e)=>{
        let num = 0;
        for(let i = 0; i<= 1000000000; i++){
            num += i;
        }
        console.log(e.currentTarget.textContent, num);
    })
})

let outerVar = 0;
for(let i = 0; i<= 100000000; i++){
    outerVar += i;
}
console.log("value of outer variable is ", outerVar);
console.log("script end !!!!!") 


// little practice with click event
const allButtons = document.querySelectorAll(".my-buttons button")
// console.log(allButtons.length);

allButtons.forEach(button =>{
    button.addEventListener("click", (e)=>{
        // console.log(e.target);
        e.target.style.backgroundColor = "yellow";
        e.target.style.color = "#333";
    })
}) 


const mainButton = document.querySelector("button");
const body = document.body;
const currentColor = document.querySelector(".current-color");
function randomColorGenerator(){
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const randomColor = `rgb(${red}, ${green}, ${blue})`
    return randomColor;
}

mainButton.addEventListener("click",()=>{
    const randomColor = randomColorGenerator();
    body.style.backgroundColor = randomColor;
    currentColor.textContent = randomColor;
}) 


// keypress event
// mouseover event
// const body = document.body;

// body.addEventListener("keypress", (e) => {
//   console.log(e.key);
// });
// const mainButton = document.querySelector(".btn-headline");
// console.log(mainButton);
// mainButton.addEventListener("mouseover", () => {
//   console.log("mouseover event ocurred!!!");
// });

// mainButton.addEventListener("mouseleave", () => {
//   console.log("mouseleave event ocurred!!!");
// });


// console.log("hello world");

const grandparent = document.querySelector(".grandparent");
// const parent = document.querySelector(".parent");
// const child = document.querySelector(".child");

// capturing events
// child.addEventListener(
//   "click",
//   () => {
//     console.log("capture !!!! child");
//   },
//   true
// );
// parent.addEventListener(
//   "click",
//   () => {
//     console.log("capture !!!! parent");
//   },
//   true
// );
// grandparent.addEventListener(
//   "click",
//   () => {
//     console.log("capture !!!! grandparent");
//   },
//   true
// );
// document.body.addEventListener(
//   "click",
//   () => {
//     console.log("capture !!!! document.body");
//   },
//   true
// );

///// not capture

// child.addEventListener("click", () => {
//   console.log("bubble child");
// });
// parent.addEventListener("click", () => {
//   console.log("bubble parent");
// });
// grandparent.addEventListener("click", () => {
//   console.log("bubble grandparent");
// });
// document.body.addEventListener("click", () => {
//   console.log("bubble document.body");
// });

// event delegation
// grandparent.addEventListener("click", (e) => {
//   console.log(e.target);
// });



const todoForm = document.querySelector(".form-todo");
const todoInput = document.querySelector(".form-todo input[type='text']");
const todoList = document.querySelector(".todo-list");

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const newTodoText = todoInput.value;
  const newLi = document.createElement("li");
  const newLiInnerHtml = `
        <span class="text">${newTodoText}</span>
        <div class="todo-buttons">
            <button class="todo-btn done">Done</button>
            <button class="todo-btn remove">Remove</button>
        </div>`;
  newLi.innerHTML = newLiInnerHtml;
  todoList.append(newLi);
  todoInput.value = "";
});

todoList.addEventListener("click", (e) => {
  // check if user clicked on done button
  if (e.target.classList.contains("remove")) {
    const targetedLi = e.target.parentNode.parentNode;
    targetedLi.remove();
  }
  if (e.target.classList.contains("done")) {
    const liSpan = e.target.parentNode.previousElementSibling;
    liSpan.style.textDecoration = "line-through";
  }
});
 BIN +1.51 MB part2/dom-tutorial/bg-image.jpg 
Binary file not shown.

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- <script src="./122.js" defer></script> -->
    <!-- <script src="./123.js" defer></script> -->
    <!-- <script src="./124.js" defer></script> -->
    <script src="./125.js" defer></script>
    <title>click event</title>
</head>
<body>
    <div class="my-buttons">
        <button id="one">My Button one</button>
        <button id="two">My Button Two</button>
        <button id="three">My Button three</button>
    </div>

</body>
</html> 



<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="./evt-bcd.css" />
    <script src="./128.js" defer></script>
    <title>Event Bubbling | Capturing | delegation</title>
  </head>
  <body>
    <main>
      <div class="grandparent box">
        Grandparent
        <div class="parent box">
          Parent
          <div class="child box">Child</div>
        </div>
      </div>
    </main>
  </body>
</html>
 41  part2/dom-tutorial/evt-bcd.css 
@@ -0,0 +1,41 @@
*{
  padding:0;
  margin: 0;
  box-sizing: border-box;
}

body{
  font-family:arial,sans-serif;
}


main{
  display:flex;
  justify-content:center;
  align-items: center;
  height:100vh;
}

.box{
  min-width:100px;
  min-height: 100px;
  padding:5rem;
  color:white;
  font-weight: bold;
  font-size: 2rem;
  cursor: pointer;
}

.grandparent{
  background: #b1d4e0;
  color:black;
}

.parent{
  background: #145da0;
}

.child{
  background: #0c2d48;
}

 98  part2/dom-tutorial/index.html 
@@ -0,0 +1,98 @@
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="./style.css" />
    <!-- <script src="./102.js" defer></script> -->
    <!-- <script src="./103.js" defer></script> -->
    <!-- <script src="./104.js" defer></script> -->
    <!-- <script src="./105.js" defer></script> -->
    <!-- <script src="./106.js" defer></script> -->
    <!-- <script src="./107.js" defer></script> -->
    <!-- <script src="./108.js" defer></script> -->
    <!-- <script src="./109.js" defer></script> -->
    <!-- <script src="./110.js" defer></script> -->
    <!-- <script src="./113.js" defer></script> -->
    <!-- <script src="./114.js" defer></script> -->
    <!-- <script src="./115.js" defer></script> -->
    <!-- <script src="./116.js" defer></script> -->
    <!-- <script src="./117.js" defer></script> -->
    <!-- <script src="./118.js" defer></script> -->
    <!-- <script src="./119.js" defer></script> -->
    <!-- <script src="./120.js" defer></script> -->
    <!-- <script src="./121.js" defer></script> -->
    <!-- <script src="./127.js" defer></script> -->
    <script src="./129.js" defer></script>
    <title>My Website</title>
  </head>
  <body>
    <header class="header">
      <nav class="nav container">
        <h1 class="logo">Website</h1>
        <ul class="nav-items">
          <li class="nav-item"><a href="#home">Home</a></li>
          <li class="nav-item"><a href="">Todo</a></li>
          <li class="nav-item"><a href="">Sign Up</a></li>
        </ul>
      </nav>
      <div class="headline">
        <h2 id="main-heading">
          Manage your tasks <span style="display: none">Hello</span>
        </h2>
        <button class="btn btn-headline">Learn More</button>
      </div>
    </header>

    <section class="section-todo container">
      <h2>Your plan for today ?</h2>
      <!-- todo form  -->
      <form class="form-todo">
        <input type="text" name="" id="" placeholder="Add Todo" />
        <input type="submit" value="Add Todo" class="btn" />
      </form>

      <ul class="todo-list">
        <li>
          <span class="text">Do this do that</span>
          <div class="todo-buttons">
            <button class="todo-btn done">Done</button>
            <button class="todo-btn remove">Remove</button>
          </div>
        </li>
      </ul>
    </section>

    <section class="section-signup container">
      <h2>Sign Up</h2>
      <form class="signup-form">
        <div class="form-group">
          <label for="username">Username</label>
          <input type="text" name="username" id="username" />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>
        <div class="form-group">
          <label for="confirmPassword">Confirm Password</label>
          <input type="password" name="confirmPassword" id="confirmPassword" />
        </div>
        <div class="form-group">
          <label for="phone">Phone</label>
          <input type="text" name="phone" id="phone" />
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" name="email" id="email" />
        </div>
        <div class="form-group">
          <label for="about">About Yourself</label>
          <textarea name="about" id="about" cols="30" rows="10"></textarea>
        </div>
        <button type="submit" class="btn signup-btn">Submit</button>
      </form>
    </section>
  </body>
</html>
 12  part2/dom-tutorial/index2.html 
@@ -0,0 +1,12 @@
<html>
    <head>
        <title>Dom traversing</title>
        <script src="./111.js" defer></script>
    </head>
    <body>
        <div class="container">
            <h1>My heading</h1>
            <p>Some useful information</p>
        </div>
    </body>
</html> 

*{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}

body{
    font-family:arial,sans-serif;
}
main{
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}

h1{
    padding: 1rem 2rem;
    background-color: #333;
    color: #efefef;
    border-radius: 1rem;
}

button{
    padding: 1rem 2rem;
    font-size:1.4rem;
    border-radius: 1rem;
    cursor: pointer;
    margin-top: 1rem;
    border: none;
    outline: none;
    transition: background 0.4s;
}
button:hover{
    background: rgb(214, 214, 214);
} 


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./little-demo.css">
    <script src="./126.js" defer></script>
    <title>Random Colors</title>
</head>
<body>
    <main>
        <div class="container">
            <h1>Current Color : <span class="current-color"> rgb(255,255,255) </span> </h1>
            <button>Change Background Color</button>
        </div>
    </main>
</body>
</html> 

@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap");

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

body {
  font-family: "Poppins", sans-serif;
}

a {
  text-decoration: none;
  color: white;
}

.header {
  position: relative;
  min-height: 60vh;
  background: url("./bg-image.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: white;
}
.bg-dark {
  background: #000;
  color: #eee;
}

.container {
  max-width: 1200px;
  margin: auto;
  width: 90%;
}
.nav {
  min-height: 8vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-items {
  width: 40%;
  display: flex;
  list-style-type: none;
  justify-content: space-between;
}
.headline {
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.btn {
  display: inline-block;
  outline: none;
  border: none;
  cursor: pointer;
}

.btn-headline {
  padding: 1rem 2rem;
  font-size: 1rem;
  margin-top: 1rem;
  font-weight: 600;
}

.section-todo {
  margin-top: 5rem;
  text-align: center;
}

.form-todo {
  min-height: 5vh;
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
}

.form-todo input {
  min-height: 100%;
}
.form-todo input[type="text"] {
  width: 78%;
  padding: 0.8rem;
  font-size: 1rem;
  font-weight: 400;
}
.form-todo input[type="submit"] {
  width: 20%;
  background: rgb(44, 55, 63);
  color: white;
  font-weight: bold;
}
.todo-list {
  text-align: left;
  font-size: 1.2rem;
  list-style-type: none;
}
.todo-list li {
  padding: 0.7rem;
  background: #444;
  color: white;
  margin-top: 1rem;
  text-transform: capitalize;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.todo-btn {
  /* min-height: 100%; */
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
}
.section-signup {
  margin: 5rem auto;
  text-align: center;
  background: rgb(240, 240, 240);
  border-radius: 10px;
  padding: 1rem;
}

.signup-form {
  max-width: 800px;
  width: 95%;
  text-align: left;
  margin: auto;
}
.signup-form label {
  display: block;
}

.signup-form input {
  display: block;
  width: 100%;
  padding: 0.5rem;
}
.form-group {
  margin-top: 1rem;
}
.signup-form textarea {
  width: 100%;
}
.signup-btn {
  background: rgb(44, 55, 63);
  color: white;
  padding: 1rem 2rem;
  display: block;
  margin: auto;
  margin-top: 1rem;
}

// function myFunction(power){
//     return function(number){
//         return number ** power
//     }
// }
// const square = myFunction(2);
// const ans = square(3);
// console.log(ans);


// const cube = myFunction(3);
// const ans2 = cube(3);
// console.log(ans2);


function myFunction(power){
    return function(number){
        return number ** power
    }
}
const square = myFunction(2);
const ans = square(3);
console.log(ans);


const cube = myFunction(3);
const ans2 = cube(3);
console.log(ans2); 



function func(){
    let counter = 0;
    return function(){
        if(counter < 1){
            console.log("Hi You Called me");
            counter++;
        }else{
            console.log("Mai already ek bar call ho chuka hoon!");
        }
    }
}

const myFunc = func();
myFunc();
myFunc();


// function execution context 

let foo = "foo";
console.log(foo);
function getFullName(firstName, lastName){
    console.log(arguments);
    let myVar = "var inside func";
    console.log(myVar);
    const fullName = firstName + " " + lastName;
    return fullName;
}

const personName = getFullName("Shivam", "sharma");
console.log(personName); 


// lexical environment, scope chain

const lastName = "Vashistha";

const printName = function(){
    const firstName = "Shivam";
    function myFunction(){
        console.log(firstName);
        console.log(lastName);
    }
    myFunction()

}
printName(); 


// closures
// closure : 30-40%
// analyse : 70-80%
// real example : 100%


// function can return functions

// function outerFunction(){
//     function innerFunction(){
//         console.log("hello world")
//     }
//     return innerFunction;
// }

// const ans = outerFunction();
// // console.log(ans);
// ans();


function printFullName(firstName, lastName){
    function printName(){
        console.log(firstName, lastName);
    }
    return printName;
}

const ans = printFullName("Shivam", "sharma");
// console.log(ans);
ans();



function hello(x){
    const a  = "varA";
    const b = "varB";
    return function(){
        console.log(a,b,x);
    }
}

const ans = hello("arg");
ans(); 


// compilation 
// code execution

// why compilation 


// How javascript code executes 


// what is global exection context ? 
// what is local execution context ? 
// closures
console.log(this);
console.log(window);
console.log(firstName);
var firstName = "Shivam";
console.log(firstName); 

// hoisting
console.log(this);
console.log(window);
console.log(myFunction);

console.log(fullName);

function myFunction(){
    console.log("this is my function");
}

var firstName = "Shivam";
var lastName = "Sharma"
var fullName = firstName + " " + lastName;
console.log(fullName); 


console.log(myFunction);

var myFunction = function(){
    console.log("this is my function");
}

console.log(myFunction);


// Uncaught ReferenceError: 
// Cannot access 'firstName' before initialization



// Uncaught ReferenceError: 
// firstName is not defined

// console.log(firstName);

// console.log(firstName);
// let firstName;
// console.log(firstName);

// console.log(typeof firstName);

// let firstName = "Shivam"; 


console.log("hello world");
let firstName = "Shivam";
let lastName = "Vashistha";

const myFunction = function() {
    let var1 = "First Variable";
    let var2 = "second Variable";
    console.log(var1);
    console.log(var2);
} 





// synchronous programming vs asynchronous programming
// synchronous programming
// synchronous programming single threaded
// console.log("script start");

// for (let i = 1; i < 10000; i++) {
//   console.log("inside for loop");
// }

// console.log("script end");

// setTimeout

console.log("script start");

const id = setTimeout(() => {
  console.log("inside setTimeout");
}, 1000);

for (let i = 1; i < 100; i++) {
  console.log("....");
}
console.log("settimeout id is ", id);
console.log("clearing time out");
clearTimeout(id);
console.log("Script end");


// setInterval
// console.log("script start");
// // setInterval(() => {
// //   console.log(total);
// //   console.log(Math.random());
// // }, 500);
// console.log("script end");
const body = document.body;
const button = document.querySelector("button");
const intervalId = setInterval(() => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const rgb = `rgb(${red},${green}, ${blue})`;
  body.style.background = rgb;
}, 1000);

button.addEventListener("click", () => {
  clearInterval(intervalId);
  button.textContent = body.style.background;
});

console.log(intervalId);



// understand callback

// function myFunc(callback) {
//   console.log("Function is doing task 1 ");
//   callback();
// }

// myFunc(() => {
//   console.log("function is doing task 2");
// });

function getTwoNumbersAndAdd(number1, number2, onSuccess, onFailure) {
    if (typeof number1 === "number" && typeof number2 === "number") {
      onSuccess(number1, number2);
    } else {
      onFailure();
    }
  }
  
  function addTwoNumbers(num1, num2) {
    console.log(num1 + num2);
  }
  
  function onFail(){
      console.log("Wrong data type");
      console.log("please pass numbers only")
  }
  getTwoNumbersAndAdd(4, 4,addTwoNumbers, onFail);



  // callbacks , callback hell, pyramid of doom
// asynchronous programming
const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");
const heading8 = document.querySelector(".heading8");
const heading9 = document.querySelector(".heading9");
const heading10 = document.querySelector(".heading10");

// Text       Delay   Color

// one        1s      Violet
// two        2s      purple
// three      2s      red
// four       1s      Pink
// five       2s      green
// six        3s      blue
// seven      1s      brown

// callback hell  
// setTimeout(()=>{
//   heading1.textContent = "one";
//   heading1.style.color = "violet";
//   setTimeout(()=>{
//     heading2.textContent = "two";
//     heading2.style.color = "purple";
//     setTimeout(()=>{
//       heading3.textContent = "three";
//       heading3.style.color = "red";
//       setTimeout(()=>{
//         heading4.textContent = "four";
//         heading4.style.color = "pink";
//         setTimeout(()=>{
//           heading5.textContent = "five";
//           heading5.style.color = "green";
//         },2000)
        
//       },1000)
      
//     },2000)
    
//   },2000)
  
// },1000)

function changeText(element, text, color, time, onSuccessCallback, onFailureCallback) {
  setTimeout(()=>{
    if(element){
      element.textContent = text;
      element.style.color = color;
      if(onSuccessCallback){
        onSuccessCallback();
      }
    }else{
      if(onFailureCallback){
        onFailureCallback();
      }
    }
  },time)
}
// pyramid of doom
changeText(heading1, "one","violet",1000,()=>{
  changeText(heading2, "two","purple",2000,()=>{
    changeText(heading3, "three","red",1000,()=>{
      changeText(heading4, "four","pink",1000,()=>{
        changeText(heading5, "five","green",2000,()=>{
          changeText(heading6, "six","blue",1000,()=>{
            changeText(heading7, "seven","brown",1000,()=>{
              changeText(heading8, "eight","cyan",1000,()=>{
                changeText(heading9, "nine","#cda562",1000,()=>{
                  changeText(heading10, "ten","dca652",1000,()=>{
                    
                  },()=>{console.log("Heading10 does not exist")})
                },()=>{console.log("Heading9 does not exist")})
              },()=>{console.log("Heading8 does not exist")})
            },()=>{console.log("Heading7 does not exist")})
          },()=>{console.log("Heading6 does not exist")})
        },()=>{console.log("Heading5 does not exist")})
      },()=>{console.log("Heading4 does not exist")})
    },()=>{console.log("Heading3 does not exist")})
  },()=>{console.log("Heading2 does not exist")})
},()=>{console.log("Heading1 does not exist")})



// Promise
console.log("script start");
const bucket = ['coffee', 'chips','vegetables','salt','rice'];



const friedRicePromise = new Promise((resolve,reject)=>{
    if(bucket.includes("vegetables")&& bucket.includes("salt") && bucket.includes("rice")){
        resolve({value:"friedrice"});
    }else{
        reject("could not do it");
    }
})

// produce 



// consume 
// how to consume 

friedRicePromise.then(
    // jab promise resolve hoga 
    (myfriedRice)=>{
    console.log("lets eat ", myfriedRice);
    }
    ).catch(
    (error)=>{
        console.log(error)
    })


setTimeout(()=>{
    console.log("hello from settimeout")
},0)

for(let i = 0; i <=100; i++){
    console.log(Math.random(), i);
}

console.log("script end!!!!")



// function returning promise

function ricePromise(){
    const bucket = ['coffee', 'chips','vegetables','salts','rice'];
    return new Promise((resolve,reject)=>{
      if(bucket.includes("vegetables")&& bucket.includes("salt") && bucket.includes("rice")){
          resolve({value:"friedrice"});
      }else{
          reject("could not do it");
      }
    })
  }
  
  
  ricePromise().then(
    // jab promise resolve hoga 
    (myfriedRice)=>{
    console.log("lets eat ", myfriedRice);
    }
    ).catch(
    (error)=>{
        console.log(error)
    })



    // promise && setTimeout 


// I want to resolve / reject promise after 2 seconds 


function myPromise(){
    return new Promise((resolve, reject)=>{
        const value = false;
        setTimeout(()=>{
            if(value){
                resolve();
            }else{
                reject();
            }
        },2000)
    })
}

myPromise()
    .then(()=>{console.log("resolved")})
    .catch(()=>{console.log("rejected")})





    // Promise.resolve
// Promise chaining

// const myPromise = Promise.resolve(5);
// Promise.resolve(5).then(value=>{
//   console.log(value);
// })


// then()
// then method hamesha promise return karta hai


function myPromise(){
    return new Promise((resolve, reject)=>{
      resolve("foo");
    })
  }
  
  myPromise()
    .then((value)=>{
      console.log(value);
      value += "bar";
      return value
    })
    .then((value) =>{
      console.log(value);
      value += "baaz";
      return value;
    })
    .then(value=>{
      console.log(value);
    })



    const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");
const heading8 = document.querySelector(".heading8");
const heading9 = document.querySelector(".heading9");
const heading10 = document.querySelector(".heading10");


function changeText(element, text, color, time) {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(element){
              element.textContent = text;
              element.style.color = color;
              resolve();
            }else{
              reject("element not found");
            }
          },time)
    })  
  }

changeText(heading1, "one", "red", 1000)
  .then(()=>changeText(heading2, "two", "purple", 1000))
  .then(()=>changeText(heading3, "three", "green", 1000))
  .then(()=>changeText(heading4, "four", "orange", 1000))
  .then(()=>changeText(heading5, "four", "orange", 1000))
  .then(()=>changeText(heading6, "four", "orange", 1000))
  .then(()=>changeText(heading7, "four", "orange", 1000))
  .then(()=>changeText(heading8, "four", "orange", 1000))
  .then(()=>changeText(heading9, "four", "orange", 1000))
  .then(()=>changeText(heading10, "four", "orange", 1000))
  .catch((error)=>{
      alert(error);
  })



  // BASIC THEORY 

// AJAX : asynchronous javascript and XML

// HTTP request

// is a set of "web development techniques" 
// using many web technologies on the "client-side "
// to create asynchronous web applications. 


// With Ajax, web applications can send and retrieve 
// data from a server asynchronously (in the background) 
// without interfering with the display and 
// behaviour of the existing page

// We don't use data in XML format anymore. 
// we use JSON now. 


// we have 3 most common ways to create and send request to server
// 1.) xmlHTTPRequest (old way of doing)
// 2.) fetch API (new way of doing)
// 3.) axios (this is third party library)



const URL = "https://jsonplaceholder.typicode.com/posts";
const xhr = new XMLHttpRequest();
// console.log(xhr);
// step1
// console.log(xhr.readyState);
xhr.open("GET",URL);
// console.log(xhr.readyState);
// xhr.onreadystatechange = function(){
//     // console.log(xhr.readyState);
//     if(xhr.readyState === 4){
//         console.log(xhr)
//         const response = xhr.response;
//         const data = JSON.parse(response);
//         console.log(typeof data);
//     }
// }

xhr.onload = function(){
    const response = xhr.response;
    const data = JSON.parse(response);
    console.log(data);
}

xhr.send();

// 

const URL = "https://jsonplaceholder.typicode.com/posts";

const xhr = new XMLHttpRequest();

xhr.open("GET", URL);
xhr.onload = () => {
    if(xhr.status >= 200 && xhr.status < 300) {
        const data = JSON.parse(xhr.response);
        console.log(data);
        const id = data[3].id;
        const xhr2 = new XMLHttpRequest();
        const URL2 = `${URL}/${id}`
        console.log(URL2);
        xhr2.open("GET", URL2);
        xhr2.onload = () => {
            const data2 = JSON.parse(xhr2.response);
            console.log(data2);
        }
        xhr2.send();
    }
   else{
       console.log("something went wrong");
   }
}

xhr.onerror = () => {
    console.log("network error");
}
xhr.send();


const URL = "https://jsonplaceholder.typicode.com/posts";

function sendRequest(method, url) {
    return new Promise(function(resolve, reject) {
        const xhr  = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.onload = function() {
            if(xhr.status >= 200 && xhr.status < 300){
                resolve(xhr.response);
            }
            else{
                reject(new Error("Something Went wrong"));
            }
        }

        xhr.onerror = function() {
            reject(new Error("Something went wrong"));
        }

        xhr.send();
    })
}

sendRequest("GET", URL)
    .then(response => {
        const data = JSON.parse(response);
        // console.log(data)
        return data;
    })
    .then(data=>{
        const id = data[3].id;
        return id;
    })
    .then(id=>{
        const url = `${URL}/${id}ssss`;
        return sendRequest("GET", url);
    })
    .then(newResponse => {
        const newData = JSON.parse(newResponse);
        console.log(newData);
    })
    .catch(error =>{
        console.log(error);
    })



    // async await

// fetch(URL)
//     .then(response => {
//         return response.json()
//     })
//     .then(data => {
//         console.log(data);
//     })
console.log("script start");
const URL = "https://jsonplaceholder.typicode.com/posts";

// async function getPosts(){
//     const response = await fetch(URL);
//     if(!response.ok){
//         throw new Error("Something went wrong")
//     }
//     const data = await response.json();
//     return data;
// }


const getPosts = async() =>{
    const response = await fetch(URL);
    if(!response.ok){
        throw new Error("Something went wrong")
    }
    const data = await response.json();
    return data;
}

// const myData = getPosts();
// console.log(myData);

getPosts()
    .then((myData) => {
        console.log(myData);
    })
    .catch(error =>{
        console.log("inside catch")
        console.log(error);
    })


console.log("script end ");



