 
// Declaro la funcion para calcular la categoria de edad.
function calculateOne(){
      // Mediante el DOM cogemos el valor que el usuario introduce al meter su edad.
        let age = +document.getElementById("age").value;
        let anyo= parseInt(new Date().getFullYear());

        let categoria=anyo-age;
        console.log(categoria);
        
        // IF para evaluar la edad y poder dar una categoria de edad.
        // Se pondra en rojo la categoria a la que pertenece el usuario.
        if (categoria>39) {
            document.getElementById("veterano").style.color = "red";
          } else if (categoria>=19 && categoria<=38) {
            document.getElementById("senior").style.color = "red";
          } else if (categoria>=16 && categoria<=18) {
            document.getElementById("junior").style.color = "red";
          } else if (categoria==14 || 15==categoria) {
            document.getElementById("cadete").style.color = "red";
          } else if (categoria==12 || 13==categoria) {
            document.getElementById("infantil").style.color = "red";
          } else if (categoria==10 || 11==categoria){
            document.getElementById("alevin").style.color = "red";
          } else if (categoria>=8 && categoria<=10){
            document.getElementById("benjamin").style.color = "red";
          } else if (categoria>=6 && categoria<=8) {
            document.getElementById("prebenjamin").style.color = "red";
          }
       
    }    
