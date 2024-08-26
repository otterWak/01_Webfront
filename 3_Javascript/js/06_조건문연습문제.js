// 문제 1
let a = 5;
let b = 10;

if(a>b){
  console.log(`${a}은/는 ${b}보다 큽니다`)
}else{
  console.log(`${b}은/는 ${a}보다 큽니다`)
}

//문제2

let n = 7;
if(n%2 == 0){
  console.log(`${n}은 짝수입니다`);
}else{
  console.log(`${n}은 홀수입니다`);
}

// 문제3
let x = 15;
let y = 22;
let z = 9;
if(x>y && x>z){
  console.log(`제일 큰 수는 ${x}입니다`);
}else if(y>x && y>z){
  console.log(`제일 큰 수는 ${y}입니다`);
}else{
  console.log(`제일 큰 수는 ${z}입니다`);
}

// 문제4
const fruitName = document.getElementById("fruitName");
function whatFruit(){
  const fruit = fruitName.value;

  if(fruit == "apple"){
    alert("apple 입니다");
  }else if(fruit == "banana"){
    alert("banana 입니다");
  }else{
    alert("apple도 banana도 아닙니다");
  }
}

// 문제5
const testScore = document.getElementById("testScore");
const scoreResult = document.getElementById("scoreResult");
function scoreCheck(){
  const score = Number(testScore.value);
  let result;

  if(score >= 90){
    result = "A"
  }else if(score >= 80){
    result = "B"
  }else if(score >= 70){
    result = "C"
  }else if(score >= 60){
    result = "D"
  }else{
    result = "F"
  }

  scoreResult.innerText = result;
}

// 문제6
const testAge = document.getElementById("testAge");
const testHeight = document.getElementById("testHeight");
function factCheck(){
  const age = Number(testAge.value);
  const height = Number(testHeight.value);

  if(age<0 || age>100){
    alert("잘못 입력 하셨습니다");
  }else if(age<12){
    alert("적정 연령이 아닙니다");
  }else if(height<140){
    alert("적정 키가 아닙니다");
  }else{
    alert("탑승 가능");
  }
}

// 문제7

const monTest = document.getElementById("monTest");
function monResult(){
  const month = Number(monTest.value);
  let result;

  if(month >= 3 && month <=5){
    alert("봄");
  }else if(month >= 6 && month <=8){
    const temp = Number(prompt("여름: 온도를 입력하시오"));

    // prompt("여름: 온도를 입력하시오");

    if(temp>=30){
      alert("폭염")
    }else{
      alert("나름 시원한 겁니다");
    }
  }else if(month >= 9 && month <=11){
    alert("가을");
  }else if(month == 1 || month == 12 || month == 2){
    const temp = Number(prompt("겨울: 온도를 입력하시오"));

    if(temp <= 0){
      alert("한파");
    }else{
      alert("나름 따뜻한 겁니다");
    }
  }else{
    alert("달을 잘못 입력하셨습니다");
  }
}
