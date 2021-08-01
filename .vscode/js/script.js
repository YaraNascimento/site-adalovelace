document.getElementById("botaoEnviar").addEventListener("click", validaFomulario);

function validaFomulario() {
  if(document.getElementById("nome").value != "" &&       document.getElementById("email").value != "") {

    alert("Prontinho! você receberá as novidades por email.");
  }else {
    alert("Por favor, preencha os campos nome e email.");
  }
}