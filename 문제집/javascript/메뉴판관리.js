// 수정 눌렀을 때 disply:block

document.getElementById("updateBtn").addEventListener("click",()=>{
  const fixTool = document.querySelector(".b-hidden");
  const fixBtn = document.querySelector(".normal-container");

  fixTool.style.display = "block";
  fixBtn.style.display = "none";
});

document.getElementById("exitBtn").addEventListener("click",()=>{
  const fixTool = document.querySelector(".b-hidden");
  const fixBtn = document.querySelector(".normal-container");

  fixTool.style.display = "none";
  fixBtn.style.display = "block";
});

// 추가 버튼 눌렀을 때 리스트, check-box, 메뉴input, 가격input 생성

const addMenu = document.querySelector("#addMenu");
addMenu.addEventListener("click",()=>{

  const menuContainer = document.querySelector(".menu-container");

  menuContainer.innerHTML = 
      `<li class='menu'>
        <span class='menu-name'></span>
        <span class='menu-price'></span>
      </li>
      <li class='menu'>
        <span class='menu-name'></span>
        <span class='menu-price'></span>
      </li>`;

  // // li 생성
  // const menuLi = document.createElement("li");
  // menuLi.style.display = "flex";

  // // 체크박스 생성
  // const checkBox = document.createElement("input");
  // checkBox.type = "checkbox";

  // // 메뉴input 생성
  // const menuName = document.createElement("input");
  // menuName.type = "text";
  // menuName.style.width = "100px";

  // // 가격input 생성
  // const menuPrice = document.createElement("input");
  // menuPrice.type = "number";
  // menuPrice.style.width = "100px";

  // // ul에 li추가
  // menuContainer.append(menuLi, checkBox, menuName, menuPrice, "원");
  // // menuLi.append(checkBox);
  // // checkBox.append(menuName);
  // // menuName.append(menuPrice);

});