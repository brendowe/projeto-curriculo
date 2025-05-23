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

export let pessoaGlobal = null;

const btnGerar = document.getElementById("botao-gerar");

btnGerar.addEventListener("click", function (event) {
  event.preventDefault();

  const pessoa = dados();

  pessoaGlobal = pessoa;

  dados();
  mudarTela();
  atualizarDadosPessoais();
  atualizarFormacao();
  atualizarHabilidades();
  atualizarExperiencia();
  atualizarSobreMim();
  gerarPDF();
});
