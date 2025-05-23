import { pessoaGlobal } from "../main.js";

export const atualizarHabilidades = () => {
    const conhecimentosLista = document.getElementById("lista-habilidades");
  
    const habilidades = [
      pessoaGlobal.hab1,
      pessoaGlobal.hab2,
      pessoaGlobal.hab3,
      pessoaGlobal.hab4,
      pessoaGlobal.hab5,
    ];
  
    for (let index = 0; index < habilidades.length; index++) {
      if (habilidades[index] != "") {
        let form = document.createElement("li");
        form.innerText = habilidades[index];
        conhecimentosLista.appendChild(form);
      }
    }
  };