document.getElementById("btn").addEventListener("click",()=>{
  const ul = document.getElementById("ulTag");
  const numbers = [1, 2, 3, 4, 5];  
  let result = 0;

  console.log(result);

  for(let i =0; i<5; i++){
    ul.innerHTML += `<li>${numbers[i]*2}</li>`
  }
});