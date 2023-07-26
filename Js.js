function Verificar() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const num3 = parseFloat(document.getElementById("num3").value);
    const num4 = parseFloat(document.getElementById("num4").value);
  
    let suma = num1 + num2+ num3+num4;
    let promedio = suma / 4;

    if (promedio > 61) {
      document.getElementById("result").textContent = `Aprobado: ${promedio}`;
      console.log("Aprobado.");
    }  else {
      document.getElementById("result").textContent = `Reprobado ${promedio} `;
      document.getElementById("result").style.color = "red";
      console.log("Reprobado.");
    }
  }