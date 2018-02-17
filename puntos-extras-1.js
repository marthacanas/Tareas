var datoIngresado = prompt("Ingrese un dato cualquiera", "");

if(datoIngresado !== null && datoIngresado !== undefined){
    document.write('<h1>Lo que ingreso fue: ' + datoIngresado + '</h1>');
    console.log(datoIngresado);
}