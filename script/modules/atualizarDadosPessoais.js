import { pessoaGlobal } from "../main.js";

export const atualizarDadosPessoais = () => {
  const nomeCurriculo = document.getElementById("nome-curriculo");
  const liSexo = document.getElementById("info-sexo");
  const liData = document.getElementById("info-nascimento");
  const liLocal = document.getElementById("info-local");
  const liBairro = document.getElementById("info-bairro");
  const liCivil = document.getElementById("info-estado-civil");
  const liEndereco = document.getElementById("info-endereco");
  const liCep = document.getElementById("info-cep");
  const liCelular = document.getElementById("info-celular");
  const liFiliacao = document.getElementById("info-filiacao");

  nomeCurriculo.innerText = pessoaGlobal.nome;
  liSexo.innerText = "Sexo: " + pessoaGlobal.sexo;
  liData.innerText =
    "Data de nascimento: " +
    pessoaGlobal.nascimento[2] +
    "/" +
    pessoaGlobal.nascimento[1] +
    "/" +
    pessoaGlobal.nascimento[0];
  liLocal.innerText = `Local: ${pessoaGlobal.cidade} / ${pessoaGlobal.estado}`;
  liBairro.innerText = "Bairro: " + pessoaGlobal.bairro;
  liCivil.innerText = "Estado Civil: " + pessoaGlobal.civil;
  liEndereco.innerText = "Endereço: " + pessoaGlobal.endereco;
  liCep.innerText = "CEP: " + pessoaGlobal.cep;
  liCelular.innerText = "Celular: " + pessoaGlobal.celular;
  liFiliacao.innerText =
    "Filiação: " + pessoaGlobal.mae + " e " + pessoaGlobal.pai;
};