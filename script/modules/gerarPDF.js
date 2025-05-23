export function gerarPDF() {
    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF({
      format: "a4",
      orientation: "portrait",
      unit: "mm",
    });
  
    pdf.html(document.getElementById('curriculo-gerado'), {
      callback: function (pdf) {
        pdf.save("output.pdf");
      },
      width: 210, //define o tamanho do pdf - a4
      windowWidth: 1080,
    });
  }