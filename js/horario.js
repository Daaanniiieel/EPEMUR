function horarioDia(){

    document.write("<table border='1'><thead><tr><th>HORARIOS MAÑANAS</th><th>Lunes</th> <th>Martes</th> <th>Miercoles</th> <th>Jueves</th> <th>Viernes</th>  </tr> <tr>  <th>9:00 - 11:00</th>   <th></th> <td></td> <td></td><td></td><td></td><td></td></tr><tr><th>11:00 - 13:00</th><td></td> <td></td><td></td><td></td><td></td></tr><tr><th>13:00 - 15:00</th><td></td> <td></td><td></td><td></td><td></td></tr></thead><tbody></tbody></table>")    ;

}

function horarioTarde(){
    document.write("<table border='1'><thead><tr><th>HORARIOS TARDES</th><th>Lunes</th> <th>Martes</th> <th>Miercoles</th> <th>Jueves</th> <th>Viernes</th>  </tr> <tr>  <th>16:00 - 17:00</th>   <td></td> <td></td><td></td><td></td><td></td></tr><tr><th>17:00 - 18:00</th><td></td> <td></td><td></td><td></td><td></td></tr><tr><th>18:00 - 19:00</th><td></td> <td></td><td></td><td></td><td></td></tr><tr><th>19:00 - 20:00</th><td></td> <td></td><td></td><td></td><td></td></tr><tr><th>20:00 - 21:00</th><td></td> <td></td><td></td><td></td><td></td></tr></thead><tbody></tbody></table>")    ;

}
/*
function genera_tabla() {
	
    var body = document.getElementsByTagName("body")[0];
    var tabla = document.createElement("table");
    var tblBody = document.createElement("tbody");
      
    var hora = 9;
    for (var i = 0; i < 4; i++) {
      var hilera = document.createElement("tr");
          
      for (var j = 0; j < 4; j++) {
        let elmt = (j == 0 || i == 0) ? "th" : "td";
        var celda = document.createElement(elmt);
        if(i > 0 && j == 0){
          var proximaHora = (hora + 2);
          var textoCelda = hora+":00 - "+proximaHora+":00";
          hora = proximaHora;
        }else{
          var textoCelda = "fila " + i + ", columna " + j + "\n";
        }
        celda.textContent = textoCelda;
        hilera.appendChild(celda);
      }
  
      tblBody.appendChild(hilera);
    }
  
    tabla.appendChild(tblBody);
  
    body.appendChild(tabla);
  
    tabla.setAttribute("border", "2");
  }*/