export const mascaraCel = celular.addEventListener("keypress", () => {
    if (celular.value.length == 0) {
      celular.value += "(";
    }
  
    if (celular.value.length == 3) {
      celular.value += ") ";
    }
  
    if (celular.value.length == 6) {
      celular.value += " ";
    }
  
    if (celular.value.length == 11) {
      celular.value += "-";
    }
  });

export const mascaraCep = cep.addEventListener("keypress", () => {
    if (cep.value.length == 5) {
      cep.value += "-";
    }
  });