let darkBtn = document.querySelector("#darkmode");
let documento = document.querySelector("html");

function alternarModoOscuro() {
  console.log("click");
  documento.classList.toggle("dark");
}

darkBtn.addEventListener("click", alternarModoOscuro);