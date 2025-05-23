export const mudarTela = () => {
    const principal = document.getElementById("principal");
    const curriculoGerado = document.getElementById("curriculo-gerado");
  
    curriculoGerado.style.display = "block";
    principal.style.display = "none";
  };