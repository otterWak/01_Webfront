const body = document.querySelector("body");

function normalMode(){
  body.style.color = "black"; //글자색을 검정색으로 변경
  body.style.backgroundColor = "white"; //배경색을 흰색으로 변경
}

function wakGood(){
  body.style.color = "#eef7cd"; //글자색을 검정색으로 변경
  body.style.backgroundColor = "#070829"; //배경색을 흰색으로 변경
}

// 변수 선언 및 초기화

// document : HTML 문서 내에서
// Element : HTML 요소
// ById : 아이디가 일치하는
const number1 = document.getElementById("input1");
const number2 = document.getElementById("input2");
const result = document.getElementById("calcResult")

// console.log(number1);
// console.log(number2);
// console.log(result);

// 두 수를 더해서 화면에 출력하는 함수
function plusFn() {
  // input요소.value : input 요소에 작성된 값 얻어오기
  const value1 = number1.value;
  const value2 = number2.value;
  
  console.log("두 수의 합", value1 + value2 );

  // -> input 요소에 작성된 값 무조건 문자열(string) 형태라서
  // 더했을 때 이어쓰기 되는 문제 발생

  // [해결방법]
  // 문자열(string)을 숫자(number)로 변경하는 코드를 수행
  // 숫자만 작성된 문자열 "123"을
  // 진짜 숫자타입 123로 바꾸는 방법
  // -> Number("123") --> 123

  console.log(Number(value1) + Number(value2));

  // 두 수의 합을
  // 아이디가 "calcResult"인 요소(result 변수)의
  // 내부 글자(innerText)로 대입하기
  result.innerText = Number(value1) + Number(value2);
}


// 빼기 함수
function minusFn() {
  const value1 = number1.value;
  const value2 = number2.value;
  result.innerText = Number(value1) - Number(value2);
}

// 곱하기 함수
function multiFn() {
  const value1 = number1.value;
  const value2 = number2.value;
  result.innerText = Number(value1) * Number(value2);
}


// 나누기 함수
function divisionFn() {
  const value1 = number1.value;
  const value2 = number2.value;
  result.innerText = Number(value1) / Number(value2);
}

// modulo 함수
function modFn() {
  const value1 = number1.value;
  const value2 = number2.value;
  result.innerText = Number(value1) % Number(value2);
}

// 응용 문제

const level1 = document.getElementById("num1");
const level2 = document.getElementById("num2");
const level3 = document.getElementById("num3");
const totalValue = document.getElementById("total")

// function multiPlusFn() {
//   const value1 = level1.value;
//   const value2 = level2.value;
//   const value3 = level3.value;
//   totalValue.innerText = Number(value1) + Number(value2) + Number(value3);
// }

function multiPlusFn() {
  totalValue.innerText = Number(level1.value)
                       + Number(level2.value)
                       + Number(level3.value);
}

// 증가/감소 연산자 (++, --)

// 증가, 감소할 수를 저장할 변수 선언 및 0으로 초기화
let count = 0;
// (주의) const로 선언하면 값을 증가/감소 시킬 수 없다!

// 필요한 요소 얻어오기

// 문서내에서 id 가 "result2"인 요소를 얻어와 result2인 변수에 대입
const result2 = document.getElementById("result2");

// 1 증가 함수
function increase(){
  // count 변수의 값 1 증가
  count++; //또는 ++count; -> count 값이 1 증가

  // 증가한 count 값을 result2의 내부 글자로 대입
  result2.innerText = count;
}

// 1 감소 함수
function decrease(){
  // 감소한 count 값을 result2의 내부 글자로 대입
  result2.innerText = --count;
}

// 전위, 후위 연산 확인하기
function check(){
  // 함수 밖, 안은 구분되는 공간
  // 밖에 작성한 변수 count,
  // 안에 작성한 변수 count
  // 서로 다른 변수(동명이인)
  let count = 100;

  // 컴퓨터한테 연산은 +-*/ 뿐만 아니라
  // 코드를 하나하나 실행하는 것들이 전부 연산

  // 전위 연산(++count, --count)
  // -> 다른 연산보다 먼저 수행
  // -> count 값이 먼저 증가/감소 후 console에 출력
  console.log(++count);//101
  console.log(++count);//102
  console.log(++count);//103
  console.log(--count);//102
  console.log(--count);//101
  console.log(--count);//100

  // 후위 연산(count++, count--) 확인
  // -> 다른 연산이 다 끝나고 마지막에 수행
  
  count = 50;

  console.log(count++) //50 (출력 후 51)
  console.log(count); //51

  console.log(count--); //51 (출력 후 50)
  console.log(count);

  let a =10;
  let b =5;
  let c = ++a*b--;

  // 최종적으로 a,b,c에 저장된 값은 얼마?
  // a == 11
  // b == 4
  // c == 55
 
  console.log(a, b, c)
}


// function printJSObject(){
//   const userName = document.getElementById("userName");
//   const userAge = document.getElementById("userAge");
//   const userGender = document.getElementById("userGender");

//   const userName1 = userName.value;
//   const userAge1 = userAge.value;
//   const userGender1 = userGender.value;
//   const user = {
//     이름 : "userName1",
//     나이 : "userAge1",
//     성별 : "userGender1"
//   };

//   console.log(user)
// }

function printJSObject(){
  const userName = document.getElementById("userName");
  const userAge = document.getElementById("userAge");
  const userGender = document.getElementById("userGender");

  const userInfo = {
    "이름" : userName.value,
    "나이" : userAge.value,
    "성별" : userGender.value
  };

  console.log(userInfo);
}