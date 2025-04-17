const btnGerar = document.getElementById("gerar");

document.addEventListener("DOMContentLoaded", () => {
  const formacao = document.getElementById("formacao");
  const faculArea = document.getElementById("facul-area");
  const escolaArea = document.getElementById("escola-area");

  formacao.addEventListener("change", () => {
    if (formacao.value == "Ensino Superior" || formacao.value == "Cursando") {
      faculArea.style.display = "block";
      escolaArea.style.display = "none";
    } else {
      faculArea.style.display = "none";
      escolaArea.style.display = "block";
    }
  });
});

let pessoaGlobal = null;

btnGerar.addEventListener("click", function (event) {
  event.preventDefault();

  const pessoa = dados();

  pessoaGlobal = pessoa;

  mudarTela();
  atualizarDadosPessoais();
  atualizarFormacao();
  atualizarHabilidades();
  atualizarExperiencia();
  atualizarSobreMim();
  gerarPDF();
  console.log(pessoaGlobal.anoIn1);
  console.log(pessoaGlobal.anoSa1);
});

const checarCep = document.getElementById("checarCep");
const inputCep = document.getElementById("input-cep");

checarCep.addEventListener("click", async function (event) {
  event.preventDefault();
  const reformado = inputCep.value.replace("-", "");
  const url = `https://viacep.com.br/ws/${reformado}/json/`;
  const response = await fetch(url);
  const cep = await response.json();
  address(cep);
});

function address(cep) {
  const endereco = document.getElementById("endereco");
  const bairro = document.getElementById("bairro");
  const cidade = document.getElementById("cidade");
  const estado = document.getElementById("estado");

  endereco.value = cep.logradouro;
  bairro.value = cep.bairro;
  cidade.value = cep.localidade;
  estado.value = cep.uf;
}

//MASCARAS

inputCep.addEventListener("keypress", () => {
  if (inputCep.value.length == 5) {
    inputCep.value += "-";
  }
});

celular.addEventListener("keypress", () => {
  if (celular.value.length == 0) {
    celular.value += "(";
  }

  if (celular.value.length == 3) {
    celular.value += ") ";
  }

  if (celular.value.length == 6) {
    celular.value += " ";
  }

  if (celular.value.length == 11) {
    celular.value += "-";
  }
});

const dados = () => {
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
  const inputCep = document.getElementById("input-cep");
  const celular = document.getElementById("celular");
  const formacao = document.getElementById("formacao");
  const escola = document.getElementById("escola");
  const facul = document.getElementById("facul");
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
  const sobreVoce = document.getElementById("sobre__text");

  if (
    !nomeCompleto.value /*||
    !sexo.value ||
    !dataNasc.value ||
    !estadoCivil.value ||
    !mae.value ||
    !inputCep.value ||
    !endereco.value ||
    !bairro.value ||
    !cidade.value ||
    !estado.value ||
    !celular.value */
  ) {
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

dados();

const mudarTela = () => {
  const main = document.getElementById("main");
  const container = document.getElementById("container");

  container.style.display = "block";
  main.style.display = "none";
};

const atualizarDadosPessoais = () => {
  const nomeCurriculo = document.getElementById("nomeCurriculo");
  const liSexo = document.getElementById("li__sexo");
  const liData = document.getElementById("li__data");
  const liLocal = document.getElementById("li__local");
  const liBairro = document.getElementById("li__bairro");
  const liCivil = document.getElementById("li__civil");
  const liEndereco = document.getElementById("li__endereco");
  const liCep = document.getElementById("li__cep");
  const liCelular = document.getElementById("li__celular");
  const liFiliacao = document.getElementById("li__filiacao");

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

const atualizarFormacao = () => {
  const formacaoLista = document.getElementById("formacao__lista");
  let form = document.createElement("li");

  if (
    pessoaGlobal.formacao == "Ensino Fundamental" ||
    pessoaGlobal.formacao == "Ensino Médio"
  ) {
    form.innerText = "Ensino Médio Completo - " + escola.value;
    formacaoLista.appendChild(form);
  } else if (
    pessoaGlobal.formacao == "Ensino Superior" ||
    pessoaGlobal.formacao == "Cursando"
  ) {
    form.innerText =
      "Superior - " + pessoaGlobal.curso + " pela " + facul.value;
    formacaoLista.appendChild(form);
  }
};

const atualizarHabilidades = () => {
  const conhecimentosLista = document.getElementById("conhecimentos__lista");

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

/*
  if(hab1.value.length > 0) {
    let form = document.createElement("li");
    form.innerText = hab1.value;
    conhecimentosLista.appendChild(form);  
  } 
  
  if (hab2.value.length > 0) {
    let form = document.createElement("li");
    form.innerText = hab2.value;
    conhecimentosLista.appendChild(form);  
  }

  if (hab3.value.length > 0) {
    let form = document.createElement("li");
    form.innerText = hab3.value;
    conhecimentosLista.appendChild(form);  
  }

  if (hab4.value.length > 0) {
    let form = document.createElement("li");
    form.innerText = hab4.value;
    conhecimentosLista.appendChild(form);  
  }

  if (hab5.value.length > 0) {
    let form = document.createElement("li");
    form.innerText = hab5.value;
    conhecimentosLista.appendChild(form);  
  }*/
const atualizarExperiencia = () => {
  const curriculoLista = document.getElementById("curriculo__lista");

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

const atualizarSobreMim = () => {
  const sobreMim = document.getElementById("curriculo__sobremim");
  let form = document.createElement("p");

  form.innerText = pessoaGlobal.sobreVoce;

  sobreMim.appendChild(form);
};

/*const gerarPDF = () => {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF("p", "mm", "a4");

  doc.html(document.body, {
    callback: function (doc) {
      doc.save("meu-pdf.pdf");
    }
  });
};*/

function gerarPDF() {
  const { jsPDF } = window.jspdf;
  const pdf = new jsPDF({
    format: "a4",
    orientation: "portrait",
    unit: "mm",
  });

  pdf.html(document.body, {
    callback: function (pdf) {
      pdf.save("output.pdf");
    },
    width: 210, //define o tamanho do pdf - a4
    windowWidth: 480,
  });
}

//windowWidth: 1080
