import { pessoaGlobal } from "../main.js";

export const atualizarExperiencia = () => {
    const curriculoLista = document.getElementById("lista-experiencia");
  
    if (
      pessoaGlobal.cargo1 != "" &&
      pessoaGlobal.empresa1 != "" &&
      pessoaGlobal.anoIn1 != "" &&
      pessoaGlobal.anoSa1 != ""
    ) {
      let form = document.createElement("li");
      form.innerText = `${pessoaGlobal.cargo1} - ${pessoaGlobal.empresa1}
      ${pessoaGlobal.anoIn1[1]}/${pessoaGlobal.anoIn1[0]} - ${pessoaGlobal.anoSa1[1]}/${pessoaGlobal.anoSa1[0]}`;
      curriculoLista.appendChild(form);
    }
  
    if (
      pessoaGlobal.cargo2 != "" &&
      pessoaGlobal.empresa2 != "" &&
      pessoaGlobal.anoIn2 != "" &&
      pessoaGlobal.anoSa2 != ""
    ) {
      let form = document.createElement("li");
      form.innerText = `${pessoaGlobal.cargo2} - ${pessoaGlobal.empresa2}
      ${pessoaGlobal.anoIn2} - ${pessoaGlobal.anoSa2}`;
      curriculoLista.appendChild(form);
    }
  
    if (
      pessoaGlobal.cargo3 != "" &&
      pessoaGlobal.empresa3 != "" &&
      pessoaGlobal.anoIn3 != "" &&
      pessoaGlobal.anoSa3 != ""
    ) {
      let form = document.createElement("li");
      form.innerText = `${pessoaGlobal.cargo3} - ${pessoaGlobal.empresa3}
      ${pessoaGlobal.anoIn3} - ${pessoaGlobal.anoSa3}`;
      curriculoLista.appendChild(form);
    }
  };
  