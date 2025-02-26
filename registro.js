/*Hola!
Este proyecto lo realizo para sumarlo al que trabajé inicialmente en desarrollo web (https://celeriumpatinaje.netlify.app/).  Por ahora quiero que funcione para solicitar los datos de registro a quienes se quieran inscribir a la escuela de patinaje.  Luego con más herramientas y aprendizaje poder pasar del registro a la invitación a los clientes a adquirir algún producto y agregarlo a un carrito de compras o simplemente que accedan a realizar el pago de las mensualidades en línea a través de algún botón de pago, algo así.
Agradezco me confirmen y me guíen si es una buena opción para todo el proyecto a realizar durante el curso.
Muchas gracias!!*/

alert(" Bienvenid@ a Celerium Patinaje! \n A continuación podrás inscribirte.");

/*Función para que no se ingresen caracteres no permitidos
La busqué en Google porque no sabía como hacer para que en nombre y apellido solo aceptara letras, así mismo para que solo aceptara números en el campo edad (encontré la función isNaN en un ejemplo en Google) y que al dejar los campos vacíos arroje una alerta*/

function caracteresValidos(valor) {
    return /^[a-zA-Z\s]+$/.test(valor);
}

//Pedir nombre

let nombre = prompt("¿Cuál es tu nombre?");
while (!nombre || !caracteresValidos(nombre)) {
    alert("Por favor ingresa un nombre válido (Debe contener solo letras y no puedes dejar el campo vacío)");
    nombre = prompt("¿Cuál es tu nombre?");
}

//Pedirapellido

let apellido = prompt("¿Cuál es tu apellido?");
while (!apellido || !caracteresValidos(apellido)) {
    alert("Por favor ingresa un apellido válido (Debe contener solo letras y no puedes dejar el campo vacío)");
    apellido = prompt("¿Cuál es tu apellido?");
}

//Pedir edad y convertirla a número

let edad = prompt("¿Cuántos años tienes?");
while (!edad || isNaN(edad) || edad <= 0) {
    alert("Por favor ingresa un número válido (Solo valores positivos)");
    edad = prompt("¿Cuántos años tienes?");
}
edad = parseInt(edad);

//Array con opciones de clases y precios, varía si es para menores o mayores de 18 años

const opcionesClases = [
    { veces: 1, precio: 64000 },
    { veces: 2, precio: 96000 },
    { veces: 3, precio: 120000 }
];

let diasClase, valorPagar;

if (edad <= 17) {
    let opcionesDisponibles = opcionesClases.map(opcion => `${opcion.veces} día(s) a la semana: $${opcion.precio}`).join("\n");
    diasClase = prompt(`¿Cuántos días a la semana deseas tomar tus clases? Opciones:\n${opcionesDisponibles}`);

    //Verificar que se escoja una opción válida

    let opcionSeleccionada = opcionesClases.find(opcion => opcion.veces.toString() === diasClase);

    while (!opcionSeleccionada) {
        alert("Por favor escoge una opción válida (1, 2 o 3)");
        diasClase = prompt(`¿Cuántos días a la semana deseas tomar tus clases? (Opciones:\n${opcionesDisponibles})`);
        opcionSeleccionada = opcionesClases.find(opcion => opcion.veces.toString() === diasClase);
    }

    //Asignar el valor a pagar según los días de clase seleccionados

    valorPagar = opcionSeleccionada.precio;

    // Asigna clases personalizadas para mayores de 18 años

} else {
    diasClase = "Por ser mayor de 18 años, te ofrecemos únicamente clases personalizadas.  Tarifa por hora.";
    valorPagar = 50000;
}

//Resumen de los datos ingresados (nombre, apellido, días de clase escogidos, precio)

let resumen = `
Nombre: ${nombre}
Apellido: ${apellido}
Edad: ${edad} años
Cantidad días de clase a la semana: ${diasClase}
Valor a pagar: $${valorPagar}
`;

let confirmacion = confirm(`¿Los datos aquí mostrados son correctos?\n${resumen}`);

if (confirmacion) {
    alert("¡Muchas gracias! Has sido registrado con éxito en nuestra escuela de patinaje.");
} else {
    alert("Ingresa tus datos nuevamente por favor");
}


