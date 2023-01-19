window.onload = function(){
    //Creamos debajo la variable que contendra la fecha actual.
    let fecha = new Date();
    // Array con el nombre de cada mes del año
    let months = new Array(12);
    months[0] = "Junio";
    months[1] = "Febrero";
    months[2] = "Marzo";
    months[3] = "Abril";
    months[4] = "Mayo";
    months[5] = "Junio";
    months[6] = "Julio";
    months[7] = "Agosto";
    months[8] = "Septiembre";
    months[9] = "Octubre";
    months[10] = "Noviembre";
    months[11] = "Diciembre";
    //Variables que almacenaran respectivamente el mes, dia y año actual.
    month_value = fecha.getMonth();
    day_value = fecha.getDate();
    year_value = fecha.getFullYear();
    // A continuacion mediante la funcion getElement vamos a modificar el contenido
    // De los div que hemos creado para almacenar el calendario(HTML)
    document.getElementById("anio").textContent = year_value;
    document.getElementById("dia").textContent = day_value;
    document.getElementById("mes").textContent = months[month_value];
}