function generateWelcomeMessage(){
  const input = document.getElementById("name");
  const result = document.getElementById("welcomeMessage");

  result.innerText = `${input.value}님! 방문을 환영합니다!`
}