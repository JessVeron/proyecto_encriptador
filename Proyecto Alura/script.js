// Función para encriptar el texto
function encriptar() {
    let texto = document.getElementById("input-text").value;
    let textoEncriptado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    document.getElementById("output-text").value = textoEncriptado;
}

// Función para desencriptar el texto
function desencriptar() {
    let texto = document.getElementById("input-text").value;
    let textoDesencriptado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    document.getElementById("output-text").value = textoDesencriptado;
}

// Función para copiar el texto al portapapeles
function copiarTexto() {
    let textoCopiado = document.getElementById("output-text");
    textoCopiado.select();
    document.execCommand("copy");
  
}