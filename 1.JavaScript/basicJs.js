// var num = 49;
// var count = 0;
while(num>0){
  let rem = num % 10;
  num = num - rem;
  num = num / 10;
  count++;
}
//console.log(`the give number of digit ${num} is = ` + count);
var num = 12
var count = 0;
var nCount = 0;
for(let i=1; i<=num; i++){
  if(i%2==0){
   // console.log("prime number " + i)
    count++;
  }
  else{
    nCount++
  }
}
// console.log(count)
// console.log(nCount)
//calculate the sum of 1 to 10 
//console.log(sum)
var number = 27;
var isPrimeNumber = true;
for(let i=2; i<number; i++){
  if(number % i ==0){
    isPrimeNumber= false;
    break;
  } 
}
if(isPrimeNumber){
  //console.log("this is prime number")
} else  {
  //console.log("not prime number")
}
let numF = 5;
let factorial = 1;
for(let i=1; i<=numF; i++){
  factorial = factorial* i
}
//console.log(factorial)

//fizzbizz
let cntFB = 0
for(let i = 1; i<=100; i++){
  if(i % 3 == 0 && i % 5 ==0){
   // console.log("FizzBizz")
    cntFB++;
  }

 // else if(i%3==0)
    //console.log("fizz")
  //else if(i%5==0)
    //console.log("bizz")
  //console.log(i)
}
//console.log(cntFB)

let countDown = 100;
while(countDown>0){
  //console.log(countDown)
  countDown--;

}

//console.log("blast off")
let year = 2023

if((year%4==0 && year%100!=0) || year%400==0){
  //console.log("this is leap year")
}
else {
 // console.log("this is not leap year")
}
//function for leapYear
function leaplear(year) {
  if((year%4==0 && year%100!=0) || year%400==0)
    console.log("leap year")
  else{
    console.log("not leap year")
  }
}
//leaplear(2023)
//function for table
let tn= 2
function Table(tn){
  for(let i=1; i<=10; i++){
    console.log(i*tn)  
  }
}
//Table(5321)
//create a function count digit in number
let digit = 1231;
let cnt = 0;
function CountDigit(digit){
  while(digit > 0){
    let rem = digit % 10;
    digit = digit - rem;
    digit = digit / 10;
    cnt++;
  }
}
CountDigit(12231)
//console.log(cnt);

//even number of range
let range = 50;
function Even(range){
  for(let i =0 ; i<=range ; i++){
    if(i%2==0){
      console.log("This is even number = "+i)
    }
  }
}
let result = Even(50)
//console.log(result)



