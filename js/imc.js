function calculateIMC(){
    let cm = +document.getElementById("cm").value;
    let kg = document.getElementById("kg").value;
    let altura=cm/100;
    console.log(altura);
    let altura2=altura*altura;
    console.log(altura2);
    let resultado=kg/altura2;
    console.log(resultado);
    let text=""
    if (resultado<16.00) {
      text="Infrapeso (delgadez severa)";
    } else if ((resultado>16.00) && (resultado<=16.99)) {
      text="Infrapeso (delgadez moderada)";
    } else if ((resultado>=17.00) && (resultado<=18.49)) {
      text="Infrapeso (delgadez aceptable)";
    } else if ((resultado>=18.50) && (resultado<=24.99)) {
      text="Peso normal";
    } else if ((resultado>=25.00) && (resultado<=29.99)){
      text="Sobrepeso";
    } else if ((resultado>=30.00) && (resultado<=34.99)){
      text="Obeso (Tipo I)";
    } else if ((resultado>=35.00) && (resultado<=40.00)){
      text="Obeso (Tipo II)";
    } else if (resultado>=40.00){
      text="Obeso (Tipo III)";
    }
    document.getElementById("text_area").innerText=text
}

