const body = document.querySelector("body");

function normalMode(){
  body.style.color = "black"; //글자색을 검정색으로 변경
  body.style.backgroundColor = "white"; //배경색을 흰색으로 변경
}

function wakGood(){
  body.style.color = "#eef7cd"; //글자색을 검정색으로 변경
  body.style.backgroundColor = "#070829"; //배경색을 흰색으로 변경
}

const input1 = document.getElementById("input1"); // input

function check1(){
  // 버튼이 클릭되었을 때 수행할 내용

  const value = Number(input1.value); // 입력받은 값
  //            Number() : 문자열 -> 숫자형태로 형변환

  if(value > 0){ //value가 0보다 커서 true인 경우
    alert("양수입니다");
  }

  if(value <= 0){ alert("양수가 아닙니다");}

  // value > 0? alert("양수입니다") : alert("양수가 아닙니다.")
}


// if - else 홀짝 판별하기
function check2(){
  // 난수 발생 : Math.random()
  // 범위 : 0 <= Math.random() < 1
  // Math.floor() : 소수점을 내림하여 정수로 만든다

  // 0~100 사이 난수
  const randomNumber = Math.floor(Math.random()*101);

  // console.log(randomNumber);

  if(randomNumber % 2 == 1){
    alert(`${randomNumber}는 홀수 입니다`);
  }else{
    alert(`${randomNumber}는 짝수 입니다`);
  }
}

// -3 ~ 3 사이 난수 발생시켜 양수, 음수, 0 판별
function check3(){
  const randomNumber = Math.floor(Math.random()*7) - 3;

  let message = randomNumber + "은/는";

  if(randomNumber == 0){// 0인 경우
    //message = message + "0 입니다";
    message += " 0 입니다"; // 복합 대입 연산자 활용
  }else if(randomNumber > 0){// 양수인 경우
    message += " 양수 입니다"
  }else{ //0도 아니고, 양수도 아닌 경우 == 음수인 경우
    message += " 음수 입니다"
  }

  alert(message);
}

const inputAge = document.getElementById("inputAge"); //input
function check4(){
  // 입력한 나이 값 얻어오기 (숫자타입 형변환)
  const age = Number(inputAge.value);

  console.log(inputAge.value.length);
  // "문자열".length: 문자열의 길이

  // 입력된 값이 없을 때

  if(inputAge.value.length == 0){
    alert("값을 입력 해 주세요");}
  else { // 입력한 경우 -> 이 때 이 어린이, 청소년, 성인 검사

    //중첩 if문
    if( age < 0 || age > 150 ){ //0 ~ 150 사이가 아닌 경우
      alert("잘못 입력하셨습니다");
    } else if(age >= 0 && age <= 13){ //어린이 0세 이상 13세 이하 (0 미만은 위에서 걸러짐)
      alert("어린이");
    } else if(age <= 19){ // 청소년 14~19 까지 (0~13세까지는 위에서 걸러짐)
      alert("청소년");
    } else{
      alert("성인");
    }
  }  
}

const calcResult = document.getElementById("calcResult"); // span
const number1 = document.getElementById("number1"); // input
const number2 = document.getElementById("number2"); // input

function calc(op){
  // 매개 변수(Parameter)
  // - 함수 호출 시 전달받은 값을 저장하는 변수
  // - 매개 변수명은 자유

  // ex) calc('+')
  // '+' 값이 op 변수에 저장됨

  // console.log(op);

  const v1 = Number(number1.value);
  const v2 = Number(number2.value);

  // switch(식)에서
  // "식"은 다양한 값이 나타날 수 있는 변수 또는 계산식

  let result; // 계산 결과 저장 변수 선언
  
  // break : switch문을 멈춤
  // -> case에 break;를 작성하지 않으면
  //    멈추지 않고 다음 case로 넘어간다 
  /*
  switch(op){
    case '+' : result = v1 + v2; break;
    case '-' : result = v1 - v2; break;
    case '*' : result = v1 * v2; break;
    case '/' : result = v1 / v2; break;
    case '%' : result = v1 % v2; break;

    // 맞는 case가 없을 경우에 적용할 기본값 (else)
    default : result = "잘못된 연산자"; break; //(break) 생략 가능
  }

  calcResult.innerText = result;
  */

  if(op == '@'){
    result = "잘못된 연산자";
  }else if(op == '+'){
    result = v1 + v2;
  }else if(op == '-'){
    result = v1 - v2;
  }else if(op == '*'){
    result = v1 * v2;
  }else if(op == '/'){
    result = v1 / v2;
  }else{
    result = v1 % v2;
  }
  

  calcResult.innerText = result;
}