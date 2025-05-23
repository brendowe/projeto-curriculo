import { pessoaGlobal } from "../main.js";

export const atualizarSobreMim = () => {
    const sobreMim = document.getElementById("sobre-mim-curriculo");
    let form = document.createElement("p");
  
    form.innerText = pessoaGlobal.sobreVoce;
  
    sobreMim.appendChild(form);
  };