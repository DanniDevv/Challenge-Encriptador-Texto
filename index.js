function encriptar() {
  const texto = document.getElementById("encriptado").value;
  const textoEncriptado = texto
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");
  
  mostrarTextoEncriptado(textoEncriptado);

  document.querySelector(".desencriptado img").style.display = "none";
  document.querySelector(".mensaje-encriptado ").style.display = "none";
}

function desencriptar() {
  const texto = document.getElementById("encriptado").value;
  const textoDesencriptado = texto
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");

  mostrarTextoEncriptado(textoDesencriptado);
}

function mostrarTextoEncriptado(texto) {
  // Mostrar el contenedor de texto encriptado
  document.getElementById("mensaje-encriptado").style.display = "block";
  document.getElementById("text-encriptado").value = texto;
  
  // Mostrar la sección de texto encriptado
  document.querySelector(".text-encriptado").style.display = "block";
}

function copiar() {
  const textoEncriptado = document.getElementById("text-encriptado");
  textoEncriptado.select();
  document.execCommand("copy");

  // Mostrar mensaje de copiado exitoso
  alert("Texto copiado al portapapeles");

  // Pegar el texto copiado en el primer textarea
  document.getElementById("encriptado").value = textoEncriptado.value;
}
