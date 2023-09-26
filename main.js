
let nombre = prompt("Ingrese nombre:");

while (nombre != "ESC") {
    if (nombre == "") {
        alert("Ese no es tu nombre")
    } else { alert("Hola " + nombre + " ¡Bienvenido!") }

    let numero = prompt("Ingrese su año de nacimiento:");
    numero = parseInt(numero);

    let sumas = 2023 - numero;

    if (sumas >= 110) {
        alert("Tenes " + sumas + " años ¡Pero para cabernicola!")
    } else if (sumas <= 109, sumas >= 80) {
        alert("Tenes " + sumas + " años ¡Estas en las ultimas!")
    } else if (sumas <= 79, sumas >= 50) {
        alert("Tenes " + sumas + " años ¡Te queda poco disfruta!")
    } else if (sumas <= 49, sumas >= 30) {
        alert("Tenes " + sumas + " años ¡No estas tan mal aprovecha que estas a tiempo!")
    } else if (sumas <= 29, sumas >= 10) {
        alert("Tenes " + sumas + " años ¡Vivi la vida y disfruta que es corta!")
    } else if (sumas <= 9, sumas >= 1) {
        alert("Tenes " + sumas + " años ¡Sos muy chico, juga y divertite mucho!")
    } else if (sumas <= 0) {
        alert("Tenes " + sumas + " años ¿Que onda venis del futuro?")
    }

    let entrada = prompt("ingrese su numero de mes (entre el 1 y el 12): ");
    let mes = "";
    let mensaje = "";

    switch (parseInt(entrada)) {
        case 1:
            mes = "Enero";
            break;
        case 2:
            mes = "Febrero";
            break;
        case 3:
            mes = "Marzo";
            break;
        case 4:
            mes = "Abril";
            break;
        case 5:
            mes = "Mayo";
            break;
        case 6:
            mes = "Junio";
            break;
        case 7:
            mes = "Julio";
            break;
        case 8:
            mes = "Agosto";
            break;
        case 9:
            mes = "Septiembre";
            break;
        case 10:
            mes = "Octubre";
            break;
        case 11:
            mes = "Noviembre";
            break;
        case 12:
            mes = "Diciembre";
            break;
        default:
            mensaje = "Numero no valido";
            break;
    }
    if (mes) {
        alert("Tu fecha de nacimiento es en: " + mes)
    } else {
        alert(mensaje)
    }

    console.log(nombre + ": " + sumas + " años / Nacio en el mes de: " + mes + " / En el año: " + numero);
    nombre = prompt("Ingrese otro nombre")
}


