let result = "";
function display() {
  document.querySelector(".js-display-taping").innerHTML = `${result}`;
}
function showReusult() {
  result += " = " + eval(result);
  display();
  result = "";
}
function HandleCostKeyDown() {
  if (event.key === "Enter") {
    showReusult();
  }
}
function calcul() {
  HandleCostKeyDown();
  result = eval(document.querySelector(".js-input-section"));
}
