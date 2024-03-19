

const campoTexto = document.querySelector("#textoIntroducido");
const resultado =document.querySelector("#resultado");

const matriz = [
  ["e", "enter"],
  ["i", "imes"],
  ["a", "ai"],
  ["o", "ober"],
  ["u", "ufat"],
];




function botonE() {
  
alert("Recuerda no usar letras mayúsculas ni caracteres especiales");
  const texto = encriptar(campoTexto.value);
  resultado.value = texto;
  
  
 // console.log(texto);
}


function encriptar(fraseEncriptada) {
for (let i = 0; i < matriz.length; i++) {
  if(fraseEncriptada.includes(matriz[i][0])) {
    fraseEncriptada = fraseEncriptada.replaceAll(
      matriz[i][0],
      matriz[i][1],
    );
  }
}


return fraseEncriptada;

}






function botonD() {
 // alert("Desencriptando");
  const texto = desencriptar(campoTexto.value);
 // console.log(texto); 
  resultado.value = texto;

}

function desencriptar(fraseDesEncriptada) {
  for (let i = 0; i < matriz.length; i++) {
    if(fraseDesEncriptada.includes(matriz[i][0])) {
      fraseDesEncriptada = fraseDesEncriptada.replaceAll(
        matriz[i][1],
        matriz[i][0],
      );
    }
  }
  
  return fraseDesEncriptada;
  
  }

  function botonC() {
    const copiarTexto = document.getElementById("resultado");
    copiarTexto.select();
    navigator.clipboard.writeText(copiarTexto.value);
  }

 

function copiar() {
 alert("Texto Copiado");

}


