import { formArea } from "./modules/formacaoArea.js";
import * as moduloEnderecos from "./modules/endereco.js";
import { atualizarSobreMim } from "./modules/atualizarSobreMim.js";
import { mudarTela } from "./modules/mudarTela.js";
import { gerarPDF } from "./modules/gerarPDF.js";
import { atualizarDadosPessoais } from "./modules/atualizarDadosPessoais.js";
import * as moduloMascaras from "./modules/mascaras.js";
import { atualizarFormacao } from "./modules/atualizarFormacao.js";
import { atualizarExperiencia } from "./modules/atualizarExperiencia.js";
import { atualizarHabilidades } from "./modules/atualizarHabilidades.js";
import { dados } from "./modules/dados.js";
import { saida3 } from "./modules/atualizarExperiencia.js";

saida3();
export let pessoaGlobal = null;

const btnGerar = document
  .getElementById("botao-gerar")
  .addEventListener("click", function () {
    const form = document.querySelector("form");

    const pessoa = dados();
    pessoaGlobal = pessoa;
dados();
      atualizarDadosPessoais();
      atualizarFormacao();
      atualizarHabilidades();
      atualizarExperiencia();
      atualizarSobreMim();
    if (form.checkValidity()) {
            mudarTela();

      gerarPDF();
    }

    
  });
