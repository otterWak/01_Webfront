function test(){
  // prompt() 사용 연습

  const password = prompt("비밀번호를 입력하세요");

  // 확인 -> 입력한 문자열
  // 취소 -> null
  if(password == null){ //취소
    alert("취소");
  }else{ //확인
    if(password == '1234'){
      alert("비밀번호 일치");
    }else{
      alert("비밀번호 일치");
    }
  }
}




// 잔액 기록 변수
let balance = 10000;
//잔액 출력 span 태그
const output = document.getElementById("output");
//금액 작성 input 태그
const amount = document.getElementById("amount");
// 초기 금액 설정
output.innerText = balance;
// 비밀번호 저장
const password = '1234';


function deposit(){
const add = Number(amount.value);

if(amount.value.length == 0){ // 금액을 입력 안했을 때
  alert("금액을 입력하시오");
}else{ // 금액을 입력했을 때
  alert(`${add}원이 입금되었습니다. 남은 잔액 : ${balance += add}`);
}

output.innerText = balance;

// input에 기존에 작성된 값 제거하기
amount.value = '';
}

function withdrawal(){
  const min = Number(amount.value);

  if(amount.value.length == 0){
    alert("금액을 입력하시오");
  }else if(balance < min){
    alert("출금 금액이 잔액보다 클 수 없습니다");
  }else{
    const pwCheck = prompt("비밀번호를 입력하세요");

    if(pwCheck == null){ // prompt 취소 버튼 누른 경우
      alert("출금을 취소하셨습니다");
    }else{ //prompt 확인 버튼 누른 경우
      if(pwCheck == password){ //비밀번호가 일치할 경우
        alert(`${min}원이 출금되었습니다. 남은 잔액 : ${balance -= min}`);
      }else{ //비밀번호가 일치하지 않을 경우
        alert("비밀번호가 일치하지 않습니다")
      }
    }
  }

  output.innerText = balance;
  amount.value = '';
}