// .JS 파일 내부를 <script></script> 내부라고 생각하면 됨

console.log("html 파일과 연결됨");

function externalFn(){
  alert("외부 파일에 작성된 externalFn() 함수가 호출됨");
}

// -----------------------------------

// JS 맛보기
// 버튼 클릭 시 body 태그의 글자색, 배경색 변경

// 1. body 태그를 선택
const body = document.querySelector("body");
// body 라는 이름의 상자를 구성(내용물 : 문서의 body태크)

// 실행되면 다크모드로 바꾸는 함수(기능)
function darkMode() {
  body.style.color = "#eef7cd"; //글자색을 흰색으로 변경
  body.style.backgroundColor = "#070829"; //배경색을 검정색으로 변경
}

// 실행되면 라이트모드로 바꾸는 함수(기능)
function lightMode() {
  body.style.color = "#ba1b09"; //글자색을 검정색으로 변경
  body.style.backgroundColor = "#baf0ff"; //배경색을 흰색으로 변경
}

function normalMode() {
  body.style.color = "black"; //글자색을 검정색으로 변경
  body.style.backgroundColor = "white"; //배경색을 흰색으로 변경
}
