function calculate() {
    var age = +document.getElementById("age").value;
    let sexo = document.getElementById("opciones").value;
  
    var text=""
    if (age<=1 && sexo=="mujer") {
      text="Las pulsaciones recomendadas son entre 120 y 140";
    } else if (age<=1 && sexo=="hombre") {
      text="Las pulsaciones recomendadas son entre 120 y 140";
    } else if (age<=10 && sexo=="mujer") {
      text="Las pulsaciones recomendadas son entre 100-120"
    } else if (age<=10 && sexo=="hombre") {
      text="Las pulsaciones recomendadas son entre 100-120"
    } else if (age>10 && age<=20 && sexo=="mujer") {
      text="Las pulsaciones recomendadas son 90"
    } else if (age>10 && age<=20 && sexo=="hombre"){
      text="Las pulsaciones recomendadas son 90"
    } else if (age>20 && age<=50 && sexo=="mujer"){
      text="Las pulsaciones recomendadas son entre 75 y 90"
    } else if (age>20 && age<=50 && sexo=="hombre"){
      text="Las pulsaciones recomendadas son entre 60 y 80"
    } else if (age>50 && sexo=="mujer"){
      text="Las pulsaciones recomendadas son entre 65 y 80"
    } else if (age>50 && sexo=="hombre"){
      text="Las pulsaciones recomendadas son entre 85 y 100"
    }
    document.getElementById("text_area").innerText=text
  }