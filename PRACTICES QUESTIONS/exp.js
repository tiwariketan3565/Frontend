//TASK 1
// const a = prompt("enter your name");
// alert("hello " + a);
// document.write("<h1>Hello, " + a + "!<h1>");


//TASK 2
// const a = prompt("enter your age");
// alert(typeof a);
// if(a >= 18){
//     document.write("<h1>eligible for vote");
// }
// else{
//     document.write("<h1>not eligible for vote");
// }

//TASK 3
// let b = '18';
// let c = Number(b);
// let d = 18;

// console.log(typeof c);
// console.log(b === d);

//TASK 4
// function calc(calculate, num1, num2){
//     console.log(calculate(num1, num2));
// }

// function add(n1, n2){
//     return n1 + n2;
// }

// function multiply(n1, n2){
//     return n1 * n2;
// }

// calc(add, 5, 10);
// calc(multiply, 5, 10);


// TASK 5
// const arr= [1 ,2, 3, 4, 5, 6, 7, 8, ,9, 10];

// const doubleArr = arr.map((num) => {
//     return num * 2;
// });

// console.log(doubleArr);

// TASK 6
// const arr = [1,2,3,4,5,6,7,8,9];
// const prime = (num) => {
//     if(num <= 1){
//         return false;
//     }
//     for(let i = 2; i <= Math.sqrt(num); i++){
//         if(num % i == 0 ) return false;
//     }
//     return true;
// }
// const primeArr = arr.filter(prime);
// console.log(primeArr);


//WORKSHOP ----------->>>>>>>

// const isOdd = (num) => num % 2 === 1;
// console.log(isOdd(2));

// const greet = (name) => "hello, " + name + "!";
// const add = (a,b) => a + b;
// const isEven = (num) => num % 2 === 0;

// console.log(greet("krtan tiwari"));
// console.log(add(2,3));
// console.log(isEven(64));

//TEMPLATE LITERALS --->
// let name = "ketan tiwari";
// const age = 19;
// console.log(`hello my name is ${name},
// I was born in ${2025-age}.`);

// const user = "aman";
// const points = 120;
// console.log(`Hey ${user}, you have ${points} points!`);

//  OBJECTS --->
// const person = {
//     firstName : "ketan",
//     lastName : "tiwari",
//     age : 19,
//     introduce : function() {
//         console.log(`Hi my name is ${this.firstName} ${this.lastName} 
// and i am ${this.age} year old`)
//     },

// }
// console.log(person.firstName); //DOT NOTATION...
// console.log(person["lastName"]); //BRACKET NOTATION...
// person.introduce();
// person.birthYear = 2025 - person.age;
// person.birth = function(){
//     console.log(`hi my birthday is ${this.birthYear}`);
// }

// person.birth();

// ARRAYS ---->
// const heroes =["shaktiman", "batman", "hulk", "rohit", "virat", "ironman"];
// const [,secondheroes, ,fifthheroes, ...rest] =heroes;
// console.log(rest);

// console.log(20);
// console.log(30);
// console.log(40);
// setTimeout(() => console.log("hello"),2000);
// console.log(50);


// let count = 10;
// const timer = setInterval(() => {
//     console.log(count);
//     count--;
//     if(count <= 0) clearInterval(timer);
// }, 2000);


// DOM ------>
// console.log("hello");
// const maiHeading = document.getElementById("title");
// mainHeading.textContent = "Faltu ki batein";

const body = document.querySelector("body");
const box = document.createElement("div");
const btn = document.createElement("button");
body.appendChild(box);
body.appendChild(btn);
btn.textContent = "click me";
box.style.height = "200px";
box.style.width = "200px";
box.style.backgroundColor = "teal";