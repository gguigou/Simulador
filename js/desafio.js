const IVA = 0.22;

let nombre = "Gabriel";
let apellido = "Guigou";
let direccion = "Colonia";
let documento = 40215548;
let contrasenia = "desafio";

let nombre2;
let apellido2;
let direccion2;
let documento2;
let contrasenia2;


function ingresar(){
    let usuario = parseInt(prompt("Hola, ingrese nro documento:"));
    if (documento == usuario) {
        let contraseniaIngresada = prompt("Ingrese contraseña");
        if (contrasenia == contraseniaIngresada)
            alert("Bienvenido " + nombre + " " + apellido);
        else alert("Contraseña no es valida");
    }
    else alert("Usuario no existe");
}
function ingresar2(){
    alert("SE ABRIO INGRESO DE USUARIO");
    let usuario = parseInt(prompt("Hola, ingrese nro documento:"));
    if (documento2 == usuario) {
        let contraseniaIngresada = prompt("Ingrese contraseña");
        if (contrasenia2 == contraseniaIngresada)
            alert("Bienvenido " + nombre2 + " " + apellido2);
        else alert("Contraseña no es valida");
    }
    else alert("Usuario no existe");
}// esta funcion2 no se necesitaria, con array y listas, haciendo un while recorriendo la lista de usuarios

function registrarUsuario(){
    alert("SE ABRIO EL REGISTRO DE USUARIO");
    nombre2 = prompt("Ingrese nombre:");
    apellido2 = prompt("Ingrese apellido:");
    direccion2 = prompt("Ingrese su direccion:");
    documento2 = parseInt(prompt("Ingrese su nro de docuento. (Solo numeros)"));
    contrasenia2 = prompt("ingrese contraseña:");
        let contraseniaVerificacion = prompt("Ingrese contraseña de verificacion");
        let iguales = contrasenia2 == contraseniaVerificacion;
    while (!iguales){
        alert("CONTRASEÑAS DISTINTAS");
        contrasenia2 = prompt("ingrese nuevamente la contraseña:");
        contraseniaVerificacion = prompt("Ingrese contraseña de verificacion");
        iguales = contrasenia2 == contraseniaVerificacion;
    }
    alert("USUARIO REGISTRADO CON EXITO");
}
let carrito = "";
let total = 0;
function agregarAlCarrito(producto, valor){
    if (carrito=="") carrito = producto;
        else carrito = carrito + " - " + producto;
    total = total + valor;
}

function llenarCarrito(){
    let producto = prompt("Ingrese nombre producto o escriba ESC para terminar");
    while (producto!="ESC"){
        agregarAlCarrito(producto, parseFloat(prompt("Ingrese valor del producto")));
        producto = prompt("Ingrese nombre producto o escriba ESC para terminar")
    }

}

function sumarIva(valor){
    return valor + valor*IVA;
}

let ivaDelValorFinal = function(valor) { return (valor - (valor/(1+IVA)))}

let valorSinIva = (valor) => valor/(1+IVA);

registrarUsuario();
ingresar2();

alert("A CONTINUACION REALIZARA LA COMPRA");
llenarCarrito();
alert("Ud tiene en el carrito " + carrito + " por un valor total de $" + total);
alert("El valor sin IVA es de: $" + valorSinIva(total) + " y el valor del IVA es: $" + ivaDelValorFinal(total));