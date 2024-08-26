// 인라인 이벤트 모델 확인

function check1(btn){
  // 매개변수 btn == 클릭한 버튼(this)
  // console.log(btn);

  // 버튼의 배경석 얻어와 저장
  const bgColor = btn.style.backgroundColor;

  // console.log(bgColor);


  // 버튼이 클릭될 때 마다 pink <-> yellow 변경

  if(bgColor == "yellow"){
    btn.style.backgroundColor = "pink";
  }else{
    btn.style.backgroundColor = "yellow";
  }
}

// 고전 이벤트 모델 확인

// 아이디가 test1-1인 요소를 얻어와 test1a 변수에 저장
const test1a = document.getElementById("test1-1");

// 고전 이벤트 모델 작성법
// 요소.이벤트리스너 = 이벤트핸들러

test1a.onclick = function(){
  alert("고전 이벤트 모델 확인 버튼 클릭됨");
};

// 고전 이벤트 모델 제거

// test1-2 버튼 클릭시 
// test1-1의 onclick 이벤트 리스너의 이벤트 핸들러 제거
document.querySelector("#test1-2").onclick = function(){
  // test1-1 기존 onclick 이벤트 핸들러를
  // null로 덮어씌움(이벤트 제거)
  test1a.onclick = null;
  alert("이벤트 제거됨");
}

// 고정 이벤트 모델 단점

// #test1-3 요소를 얻어와 test1c변수에 저장

const test1c = document.querySelector("#test1-3");

// test1c 요소가 클릭되었을 때 배경색을 레드로 변경
test1c.onclick = function(){
  test1c.style.backgroundColor = "red";
}

test1c.onclick = function(){
  test1c.style.color = "white";
}

// -> onclick에 저장된 값이 덮어씌워지면서
// 이전 코드가 사라지는 문제 발생

// 표준 이벤트 모델 확인
const test2 = document.querySelector("#test2");

// 표준 이벤트 모델 작성법
// 요소.addEventListener("이벤트종류", 이벤트핸들러(함수));
test2.addEventListener("click", function(){
  // 투명도 1 (불투명) -> 0 (투명) 0.1씩 감소
  // 현재 test2의 투명도 확인
  let curr = test2.style.opacity;

  // 맨처음에는 투명도 '' -> 1대입
  console.log(curr);

  if(curr == ''){
    test2.style.opacity = 1;
    curr = 1;
  }

  // 투명도 0.1 감소
  test2.style.opacity = curr - 0.1;

  if(test2.style.opacity == 0){ //완전히 투명해졌다면
    test2.style.opacity = 1; //다시 불투명하게
  }
});

// test2 요소를 클릭하면 클릭 횟수 카운트--------------------------------------

let count = 0;

test2.addEventListener("click", function(){
  count++ //카운트를 1증가
  // 표준 이벤트 모델의 이벤트 핸들러(함수)안에서
  // this == 이벤트가 발생한 요소
  this.innerText = count;
})


// 입력한 색상으로 배경색 변경하기----------------------------------------

// [ 강사님 코드 ]

// 내가 입력할 input 태그 요소를 얻어오기
// 얻어온 색상(내용))으로 배경색을 줄 div 요소 얻어오기
// 얻어온 input 요소의 내용(작성된값) 얻어오기

const input3 = document.querySelector("#input3");
const box3 = document.querySelector("#box3");

// input3요소에 이벤트를 추가한다
// - 무슨이벤트? input3에서 키보드가 올라왔을 때
// -(이벤트핸들러)함수안에 작성한 내용을 수행하겠다

input3.addEventListener("keyup", function(e){
  // e : 이벤트 객체(발생한 이벤트에 대한 정보를 담은 객체)
  console.log(e);

  // 조건 : 이벤트로써 감지된 키다 Enter일 때
  if(e.key == "Enter"){
    // 얻어온 input요소의 내용(작성된값) 얻어오기
    // box3의 배경색에 대인하기
    box3.style.backgroundColor = input3.value;
    input3.value = "";
    input3.focus();
  }

});


// box3를 클릭하면
// box3가 가지고 있는 배경색을 alert출력
box3.addEventListener("click", function(e){

  console.log(e);
  // e.target : 이벤트가 발생한 대상 요소

  alert(`배경색 : ${e.target.style.backgroundColor}`);
})


// [ 내가 쓴 코드]

// input3의 입력 값
// 색상이 바뀔 곳

// const print = document.getElementById("input3");
// const box3 = document.getElementById("box3");

// document.getElementById("input3").addEventListener("keyup", function(e){
//   const input3 = document.getElementById("input3").value;
//   if(e.key == "Enter"){
//     document.getElementById("box3").style.backgroundColor = input3;
//     print.value = "";
//     print.focus();
//   }
// });


// 키보드 색상 변화-------------------------------------------------------

document.querySelector("body").addEventListener("keydown", function(e){
  if(e.key == "q"){
    document.getElementById("q").style.backgroundColor = "red";
    document.getElementById("q").style.transitionDuration = "0.3s";
  }
  
  if(e.key == "w"){
    document.getElementById("w").style.backgroundColor = "orange";
    document.getElementById("w").style.transitionDuration = "0.3s";
  }

  if(e.key == "e"){
    document.getElementById("e").style.backgroundColor = "green";
    document.getElementById("e").style.transitionDuration = "0.3s";
  }

  if(e.key == "r"){
    document.getElementById("r").style.backgroundColor = "blue";
    document.getElementById("r").style.transitionDuration = "0.3s";
  }
});

document.querySelector("body").addEventListener("keyup", function(e){
  if(e.key == "q"){
    document.getElementById("q").style.backgroundColor = "transparent";
    document.getElementById("q").style.transitionDuration = "0.3s";
  }
  
  if(e.key == "w"){
    document.getElementById("w").style.backgroundColor = "transparent";
    document.getElementById("w").style.transitionDuration = "0.3s";
  }

  if(e.key == "e"){
    document.getElementById("e").style.backgroundColor = "transparent";
    document.getElementById("e").style.transitionDuration = "0.3s";
  }

  if(e.key == "r"){
    document.getElementById("r").style.backgroundColor = "transparent";
    document.getElementById("r").style.transitionDuration = "0.3s";
  }
});