const body = document.querySelector("body");

function normalMode(){
  body.style.color = "black"; //글자색을 검정색으로 변경
  body.style.backgroundColor = "white"; //배경색을 흰색으로 변경
}

function wakGood(){
  body.style.color = "#eef7cd"; //글자색을 검정색으로 변경
  body.style.backgroundColor = "#070829"; //배경색을 흰색으로 변경
}

function fn1(){
  for(let y = 10; y >= 1; y--){
    console.log("y : ", y);
  }
}

function fn2(){
  for(let y = 20; y >1; y--){
    if(y%2 == 1) continue;
    console.log("y : ",y);
  }
}

function fn3(){
  let y = 1;
  while(y <= 50){
    y++;
    if(y%5 != 0) continue;
    console.log("y : ", y);
  }
}


function fn4(){
  let y = 1;
  for(let x = 1; x <= 5; x++){
    y *= x;
  }
  console.log(y);
}

// function fn5(){
//   const y = Number(document.getElementById("input3").value);
//   const ul = document.getElementById("result");
//   ul.innerHTML = "";

//   if(y < 2 || y > 9){
//     alert("2~9만 됨");
//     return;
//   }

//   for(let x = 1; x <= 9; x++){
//     ul.innerHTML += `<li>${y} x ${x} = ${y*x}</li>` ;
//   }
// }

function fn5(){
  for(let y = 2; y <= 9; y++){
    for(let x=1; x <= 9; x++){
      console.log(`${y} x ${x} = ${y*x}`);
    }
  }
}

function fn6(){
  for(let x = 1; x <=30; x++){
    if(x%3 == 0){
      console.log("짝");
    }else{console.log(x);

    }
  }
}

// function fn7(){
//   for(let x = 2; x <= 20; x++){
//     if(x != 2 && x%2 == 0) continue;
//     if(x != 3 && x%3 == 0) continue;

//     console.log(x);
//   }
// }

function fn7(){
  for(let num = 2; num <= 20; num++){
    let isPrime = true;

    for(let i = 2; i<num; i++){
      if(num % i == 0){
        isPrime = false;
        break;
      }
    }
    if(isPrime){
      console.log(num)
    }
  }
}