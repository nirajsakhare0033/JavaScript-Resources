let inputEle = document.getElementById("input")
//console.log(inputEle)
let btn = document.querySelector('.btn')
//console.log(btn)
//let todoFirst = document.getElementById("todoFirst");
let todoFirst = document.querySelector(".todoFirst");
const addToDo = () => {
  console.log(inputEle.value)
 // todoFirst.textContent = inputEle.value
 let pEle = document.createElement("p");
 pEle.textContent = inputEle.value
 console.log(pEle)
 todoFirst.append(pEle);


}

btn.addEventListener("click", () => {
  addToDo();
  
})