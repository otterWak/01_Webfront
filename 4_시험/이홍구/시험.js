const divWidth = document.getElementById("div-width");
const divHeight = document.getElementById("div-height");
const divFontSize = document.getElementById("div-font-size");
const divFontColor = document.getElementById("div-font-color");
const divBackgroundColor = document.getElementById("div-background-color");
const divFontWeight = document.getElementsByClassName("div-font-weight");
const divRow = document.getElementsByClassName("div-row");
const divCol = document.getElementsByClassName("div-col");



function printResult(){
  let print = document.getElementById("result")
  const divText = document.getElementById("div-text").value;

  print.innerText = divText;


  print.style.width = `${Number(divWidth.value)}px`;
  print.style.height = `${Number(divHeight.value)}px`;
  print.style.fontSize = `${Number(divFontSize.value)}px`;
  print.style.color = divFontColor.value;
  print.style.backgroundColor = divBackgroundColor.value;

  if(divFontWeight[1].checked){
    print.style.fontWeight = "bold";
  }else{
    print.style.fontWeight = "";
  }

  if(divRow[2].checked){
    print.style.justifyContent = "right";
  }else if(divRow[1].checked){
    print.style.justifyContent = "center";
  }else{
    print.style.justifyContent = "left";
  }

  if(divCol[2].checked){
    print.style.alignItems = "end";
  }else if(divCol[1].checked){
    print.style.alignItems = "center";
  }else{
    print.style.alignItems = "baseline";
  }
}