const boxes = document.querySelectorAll(".box");
const inputList = document.querySelectorAll(".color-input");
document.querySelector('#changeButton').addEventListener("click", function(){
  for(let i = 0; i < inputList.length; i++){
    boxes[i].style.backgroundColor = inputList[i].value;
  }
});