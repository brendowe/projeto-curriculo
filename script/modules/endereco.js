export const checarCep = document.getElementById("botao-buscar-cep");
export const inputCep = document.getElementById("cep");

/*checarCep.addEventListener("click", async function (event) {
  event.preventDefault();
  const reformado = inputCep.value.replace("-", "");
  const url = `https://viacep.com.br/ws/${reformado}/json/`;
  const response = await fetch(url);
  const cep = await response.json();
  endereco(cep);
});*/

const preencherCep = async (event) => {
  event.preventDefault();
  const reformado = inputCep.value.replace("-", "");
  const url = `https://viacep.com.br/ws/${reformado}/json/`;
  const response = await fetch(url);
  const cep = await response.json();
  endereco(cep);
};

checarCep.addEventListener("click", preencherCep);
checarCep.addEventListener("keypress", (event) => {
  if (event.key == "Enter") {
    preencherCep();
  }
});

export function endereco(cep) {
  const endereco = document.getElementById("endereco");
  const bairro = document.getElementById("bairro");
  const cidade = document.getElementById("cidade");
  const estado = document.getElementById("estado");

  endereco.value = cep.logradouro;
  bairro.value = cep.bairro;
  cidade.value = cep.localidade;
  estado.value = cep.uf;
}
