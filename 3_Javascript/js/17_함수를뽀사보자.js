const pb = document.querySelectorAll(".problems")

// 문제1===============
function q1(name){
  console.log(`Hello, ${name}!`)
}

pb[0].addEventListener("click", function(){
  const nm = "홍길동"
  
  q1(nm);
});

// 문제2================
function q2(v1, v2){
  console.log(v1+v2)
}

pb[1].addEventListener("click", function(){
  const num1 = 3
  const num2 = 4
  q2(num1, num2);
});

// 문제3=================
function q3(v1, v2){
  console.log(v1*v2)
}

pb[2].addEventListener("click", function(){
  const num1 = 2
  const num2 = 5
  q3(num1, num2);
});

// 문제4=================
function q4(v1, v2){
  if(v1 > v2){
    console.log("첫 번째 숫자가 더 큽니다")
  }else{
    console.log("두 번째 숫자가 더 큽니다")
  }
}

pb[3].addEventListener("click", function(){
  const num1 = 10
  const num2 = 5
  q4(num1, num2);
});

// 문제5=================
function q5(wordLength){
  console.log(wordLength.length)
}

pb[4].addEventListener("click", function(){
  const word = "HelloHello"
  q5(word);
});

// 문제6================
function q6(text, num){
  let reText =""
  for(i=1; i<=num; i++){
    reText += text;
  }
  console.log(reText);
}

pb[5].addEventListener("click", function(){
  const word = "Hello"
  const count = 3
  q6(word, count);
});

// 문제7================
function q7(v){
  if(v%2 == 0){
    console.log("true");
  }else{
    console.log("false");
  }
}

pb[6].addEventListener("click", function(){
  const num = 3

  q7(num);
});


// 문제8================
function q8(v1, v2, v3){
  if(v1>v2 && v1>v3){
    console.log(v1);
  }else if(v2>v1 && v2>v3){
    console.log(v2);
  }else{
    console.log(v3);
  }
}

pb[7].addEventListener("click", function(){
  const num1 = 2
  const num2 = 3
  const num3 = 5

  q8(num1, num2, num3);
});


// 문제9===================
function q9(arr1){
  console.log(arr1[0]);
}


pb[8].addEventListener("click", ()=>{
  const arr = [10, 5, 2];

  q9(arr);
});

// 문제10===================
function q10(arr2){
  let sum = 0;
  for(i = 0 ; i < arr2.length; i++){
    sum += arr2[i];
  }
  let average = sum/arr2.length

  console.log(`합계: ${sum}, 평균: ${average}`)
}
pb[9].addEventListener("click", ()=>{
  const arr = [3, 3, 3, 3, 3];

  q10(arr);
});


// 문제11===================
function q11(addFn){
  const v1 = 3
  const v2 = 5

  console.log(v1+v2);
}

pb[10].addEventListener("click", ()=>{
  q11((num1, num2)=>num1 + num2);
});


// 문제12===================
function q12(name, fn){

  fn(name);

  //console.log(`${ola}, ${olaFn}`);
}

pb[11].addEventListener("click", ()=>{
  const hiFn = function(nm){
    console.log(`Hello, ${nm}`);
  }

  const byeFn = function(nm){
   console.log(`Bye, ${nm}`);
  }
  
  q12("길동", hiFn);
  q12("둘리", byeFn);
});