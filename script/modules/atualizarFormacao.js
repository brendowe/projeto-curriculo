import { pessoaGlobal } from "../main.js";

export const atualizarFormacao = () => {
  const formacaoLista = document.getElementById("lista-formacao");
  let form = document.createElement("li");

  if (
    pessoaGlobal.formacao == "Ensino Fundamental" ||
    pessoaGlobal.formacao == "Ensino Médio"
  ) {
    form.innerText = "Ensino Médio Completo - " + pessoaGlobal.escola;
    formacaoLista.appendChild(form);
  } else if (
    pessoaGlobal.formacao == "Ensino Superior" ||
    pessoaGlobal.formacao == "Cursando"
  ) {
    form.innerText =
      "Superior - " + pessoaGlobal.curso + " pela " + pessoaGlobal.facul;
    formacaoLista.appendChild(form);
  }
};