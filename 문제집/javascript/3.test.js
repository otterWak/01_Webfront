document.getElementById("btn").addEventListener("click", ()=>{
  const name = document.getElementById("tagName").value;
  const text = document.getElementById("tagInnerText").value;
  const colorName = document.getElementById("colorName").value;
  let result = document.getElementById("result");
  const tag = document.createElement(name);

  result.append(tag);
  tag.append(text);

  result.style.color = `${colorName}`;
});