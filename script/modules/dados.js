export const dados = () => {
  const nomeCompleto = document.getElementById("nome-completo");
  const estadoCivil = document.getElementById("estado-civil");
  const dataNasc = document.getElementById("data-nascimento");
  const sexo = document.querySelector("input[name=sexo]:checked");
  const pai = document.getElementById("nome-pai");
  const mae = document.getElementById("nome-mae");
  const endereco = document.getElementById("endereco");
  const bairro = document.getElementById("bairro");
  const cidade = document.getElementById("cidade");
  const estado = document.getElementById("estado");
  const complemento = document.getElementById("complemento");
  const inputCep = document.getElementById("cep");
  const celular = document.getElementById("celular");
  const formacao = document.getElementById("formacao");
  const escola = document.getElementById("escola");
  const facul = document.getElementById("faculdade");
  const curso = document.getElementById("curso");
  const hab1 = document.getElementById("hab1");
  const hab2 = document.getElementById("hab2");
  const hab3 = document.getElementById("hab3");
  const hab4 = document.getElementById("hab4");
  const hab5 = document.getElementById("hab5");
  const cargo1 = document.getElementById("cargo1");
  const cargo2 = document.getElementById("cargo2");
  const cargo3 = document.getElementById("cargo3");
  const empresa1 = document.getElementById("empresa1");
  const empresa2 = document.getElementById("empresa2");
  const empresa3 = document.getElementById("empresa3");
  const anoIn1 = document.getElementById("ano-in1");
  const anoIn2 = document.getElementById("ano-in2");
  const anoIn3 = document.getElementById("ano-in3");
  const anoSa1 = document.getElementById("ano-sa1");
  const anoSa2 = document.getElementById("ano-sa2");
  const anoSa3 = document.getElementById("ano-sa3");
  const sobreVoce = document.getElementById("texto-sobre");

  if (!nomeCompleto.value) {
    return "Preencha os campos";
  } else {
    const pessoa = {
      nome: nomeCompleto.value,
      sexo: sexo.value,
      nascimento: dataNasc.value.split("-"),
      civil: estadoCivil.value,
      mae: mae.value,
      pai: pai.value,
      cep: inputCep.value,
      endereco: endereco.value,
      bairro: bairro.value,
      cidade: cidade.value,
      estado: estado.value,
      complemento: complemento.value,
      celular: celular.value,
      formacao: formacao.value,
      escola: escola.value,
      curso: curso.value,
      facul: facul.value,
      hab1: hab1.value,
      hab2: hab2.value,
      hab3: hab3.value,
      hab4: hab4.value,
      hab5: hab5.value,
      cargo1: cargo1.value,
      cargo2: cargo2.value,
      cargo3: cargo3.value,
      empresa1: empresa1.value,
      empresa2: empresa2.value,
      empresa3: empresa3.value,
      anoIn1: anoIn1.value.split("-"),
      anoIn2: anoIn2.value.split("-"),
      anoIn3: anoIn3.value.split("-"),
      anoSa1: anoSa1.value.split("-"),
      anoSa2: anoSa2.value.split("-"),
      anoSa3: anoSa3.value.split("-"),
      sobreVoce: sobreVoce.value,
    };

    return pessoa;
  }
};
