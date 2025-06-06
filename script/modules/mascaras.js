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

export const saida3 = () => {
  document.addEventListener("DOMContentLoaded", () => {
    const checkboxAtual = document.getElementById("atual");
    const saidaEmprego3 = document.getElementById("ano-sa3");

    checkboxAtual.addEventListener("change", () => {
      if (checkboxAtual.checked) {
        saidaEmprego3.disabled = true;
        saidaEmprego3.value = "";
      } else {
        saidaEmprego3.disabled = false;
      }
    });
  });
};
