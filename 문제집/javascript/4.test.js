document.getElementById("btn").addEventListener("click", (e)=>{
  const num = document.getElementById("numberInput").value;

  if(num <= 0){
    alert("양수를 입력하세요");
    return;
  }

  if(num%2 == 0){
    setTimeout(()=>{alert("짝수입니다");}, 3000);
  }else{
    setTimeout(()=>{alert("홀수입니다");}, 3000);
  }
});