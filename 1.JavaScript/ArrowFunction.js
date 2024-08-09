//EcmaScript

//1. Let and Const
//2. template String
//3. default arguments
//4. Arrow Function
//5. Destructuring
//6. Object Properties
//7. Rest Operators
//8. Spread oprators

//let Keyword:
// The let is used to declare variables with block scope. variables declared with let are mutable, meaning theire value can be reassigned

//block scope

//const Keyword:
// The const keyword is used to decleare variable with block scope, but ones a value is assigned to a const variable, it cannot be reassigned. const variable are immutable

//block scope

//Fat Arrow Function
//const ArrowFunctionName = (parameter1, parameter2, ....) =>{}

const sum = (a, b) => {
  let result = `the sum of ${a} and ${b} is ${a + b}`;
  console.log(result);
};
//sum(5,5);

//2 problem
// Print numbers from 1 to 100
const ArrowNumber = (number) => {
  for (let i = 0; i <= number; i++) {
    console.log(i);
  }
};
//ArrowNumber(100)

//3 prblm
//Print even numbers between 1 and 50:

const ArrowEven = (number) => {
  for (let i = 0; i <= number; i++) {
    if (i % 2 == 0) {
      console.log(`This is the even number ${i}`);
    }
  }
};
//ArrowEven(50)

//4 prblm
//Sum of numbers from 1 to 100:
let ArrowSum = 0;
const ArrowSumFun = (number) => {
  for (let i = 0; i <= number; i++) {
    ArrowSum = i + ArrowSum;
  }
  console.log(ArrowSum);
};
//ArrowSumFun(1000)

//5 prblm
//Factorial of a number:

let ArrowFactorial = 1;
const ArrowFactorialNumber = (number) => {
  for (let i = 1; i <= number; i++) {
    ArrowFactorial = i * ArrowFactorial;
  }
  console.log(`The Factorial of ${ArrowFactorial}`);
};
//ArrowFactorialNumber(4)

//create calculator

const ArrowCalculator = (a, b, operator) => {
  let result;
  switch (operator) {
    case "+":
      return a + b;
    case "-":
     return a - b;
    case "*":
      return a*b;
    case "/":
      return a/b;
    default:
      return "No operator found"
  }
};
//console.log(ArrowCalculator(10, 10, "+"));
//Reverse Function
const ArrowReverseFunction = (str) => {
  let reverse=""
  for(let char=str.length-1; char>=0; char--){
    reverse = reverse+str[char]
  }
  return reverse
}
console.log(ArrowReverseFunction("niraj sakhare"));

