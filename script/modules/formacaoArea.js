export const formArea = document.addEventListener("DOMContentLoaded", () => {
  const formacao = document.getElementById("formacao");
  const campoFaculdade = document.getElementById("campo-faculdade");
  const campoEscola = document.getElementById("campo-escola");

  formacao.addEventListener("change", () => {
    if (formacao.value == "Ensino Superior" || formacao.value == "Cursando") {
      campoEscola.classList.add("campo-escola--desativado");
      campoFaculdade.classList.remove("campo-faculdade--desativado");
      campoFaculdade.classList.add("campo-faculdade");
    } else {
      campoFaculdade.classList.add("campo-faculdade--desativado");
      campoEscola.classList.remove("campo-escola--desativado");
      campoEscola.classList.add("campo-escola");
    }
  });
});
