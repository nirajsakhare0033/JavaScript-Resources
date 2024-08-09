//JavaScript Array is an object that represents a collection of similar data type
//Each value(name) will be called as an Element
//creating array--CRUD--filter in an array--very very important Array Method--Array traversal/Iterating Over Arrays--Searching is an array--how to sort and compare an array
//🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆
//Iterable == Object where can use the for-of loop
//array as object
//🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆
//creating Array
//🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆
//1.Array in javaScript can be created using the Array constructor or with array literals (square brackets [])

//let fruits = new Array("banna","apple","mango")
//console.log(fruits);

//2.Using array literals

//let arrFurits = ["banna", "apple", "mango"];
//console.log(arrFurits)

//👉Accessing Elements: Array elements can accessed using zero- based indices
//let arrFurits = ["banna", "apple","mango"]
//console.log(arrFurits[0])
//👉Modifying Elements:
//👉👉you can modify array elements by asssiging new values to specific indices.

//arrFurits[2] = "ornage"
//👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉
//Array Traversal / Iterating Over Arrays

let fruits = ["apple", "orange", "mango", "banana", "grapes"]
//1.for of loop also known as iterables
//for(let item of fruits){console.log(item)}
//👉using for loop
//for(let i = 0; i<fruits.length; i++){console.log(fruits[i])}
//2.for in loop
//for(let item in fruits){console.log(item)}
//3.for each method = forEach() method calls the provided function once for each element of the array. The provided function may perform any kind of operation on the elements of the given array.

//fruits.forEach((currentElment, index, arr) =>{console.log(`${currentElment} ${index} ${arr}`)})

// 4. map Function 
//const foreach = fruits.map((currentElment, index, arr) => { return (`my fav food is ${currentElment} ${index}`)})
//console.log(foreach)

//todo practice time
//Write a program  to multiply each element with 2
let arr = [1,2,3,4,5,6,7]
arr.forEach((currentEle) => {
  //console.log(`${2*currentEle}`)
})
const doubleValue = arr.map((currentEle)=>{
  return currentEle * 2
})
//console.log(doubleValue)

//👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉
//How to Insert, Add, Replace, And Delete Elements In Array(CRUD) - P1
let person = ["ram","suraj","a","b","c","d"]
// person.pop()
// for(let item of person){
//   console.log(item)
// }
// person.splice(1,1,"x")
// console.log(person)

const num = [1,2,3,4,5,6,7,8,9];
//let ele = 4;
// for(let i=0; i<num.length; i++){
//   if(ele==num[i])
//     console.log(num[i])
// }
//console.log(num.indexOf(4))

// console.log(num.includes(5))

const fAr = num.filter((curEle)=>{
 return curEle > 4
})
console.log(fAr)




