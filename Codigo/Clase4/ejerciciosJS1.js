// reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = "Hola Mundo";

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 3;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;

function devolverString(str) {
  // "Return" la string provista: str
  // Tu código:
  return str;
}
console.log(devolverString("Hola Codo a Codo"));

function suma(x, y) {
  // "x" e "y" son números
  // Suma "x" e "y" juntos y devuelve el valor
  // Tu código:
  return x + y;
}
console.log(suma(10, 10));

function resta(x, y) {
  // Resta "x" de "y" y devuelve el valor
  // Tu código:
  return x - y;
}
console.log(resta(20, 10));

function multiplica(x, y) {
  // Multiplica "x" por "y" y devuelve el valor
  // Tu código:
  return x * y;
}
console.log(multiplica(10, 2));

function divide(x, y) {
  // Divide "x" entre "y" y devuelve el valor
  // Tu código:
  return x / y;
}
console.log(divide(10, 2));

/* function sonIguales(x, y) {
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  // Tu código:
 //utilizar if y else
  if(x===y){
    return true
  }else {
    return false
  }
 */
//return (x===y)
//} *
const sonIguales = (x, y) => {
  /* if(x===y){
  return true
}else {
  return false
} */
  //if ternario
  return x === y ? true : false;
};
console.log(sonIguales(10, 11));

/* const sonIguales =(x,y)=>{return x===y};console.log(sonIguales(10, 10)); */
/* const sonIguales =(x,y)=> x===y;console.log(sonIguales(10, 10));

const devolverStr =str=> str;console.log(devolverStr("Hola"));
 */
function tienenMismaLongitud(str1, str2) {
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:
  /*   return "el str11 es:  "+ str1 + " y tiene una longitud de:" + str1.length + "caracteres" */
  return str1.length === str2.length;
}
console.log(tienenMismaLongitud("cuatro", "123456"));

function menosQueNoventa(num) {
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:
  return num < 90;
}
console.log(menosQueNoventa(99));

function mayorQueCincuenta(num) {
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  // Tu código:
  return num > 50;
}
console.log(mayorQueCincuenta(51));

function obtenerResto(x, y) {
  // Obten el resto de la división de "x" entre "y"
  // Tu código:
  return x % y;
}
console.log(obtenerResto(22, 7));

function esPar(num) {
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código:
  return num % 2 === 0;
}
console.log(esPar(2));

function esImpar(num) {
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:
  return num % 2 !== 0;
  /* return num%2===1 */
}
console.log(esImpar(7));

function elevarAlCuadrado(num) {
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:
  // return (num**2)
  /* return (num*num) */
  return Math.pow(num, 2);
}
console.log(elevarAlCuadrado(8));

function elevarAlCubo(num) {
  // Devuelve el valor de "num" elevado al cubo
  // Tu código:
  return Math.pow(num, 3);
}
console.log(elevarAlCubo(3));

function elevar(num, exponent) {
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:
  return Math.pow(num, exponent);
}
console.log(elevar(3, 3));

function redondearNumero(num) {
  // Redondea "num" al entero más próximo y devuélvelo
  // Tu código:
  return Math.round(num);
}
console.log(redondearNumero(1.5));

function redondearHaciaArriba(num) {
  // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
  // Tu código:
  return Math.ceil(num);
}
console.log(redondearHaciaArriba(4.1));

function numeroRandom() {
  //Generar un número al azar entre 0 y 1 y devolverlo
  //Pista: investigá qué hace el método Math.random()
  return Math.random();
}
console.log(numeroRandom());

function esPositivo(numero) {
  //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo.
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false
  /*   if (numero > 0) {
    return "Es positivo";
  } else if (numero < 0) {
    return "Es negativo";
  } else {
    return false;
  } */

  // if ternario
  return numero > 0
    ? "Es positivo"
    : numero < 0
    ? "Es Negativo"
    : console.log(false);
}
console.log(esPositivo(10));

function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:
  return str + "!";
}
console.log(agregarSimboloExclamacion("estudiar como se juega a la papa"));

function combinarNombres(nombre, apellido) {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Bruce Wayne" -> "Bruce Wayne"
  // Tu código:
  /* return nombre + " " + apellido */
  //backstick - plantilla literal
  return `Hola hoy voy a hablar sobre ${nombre} su apellido es ${apellido}`;
  /* alt gr+}
alt+96 */
}
console.log(combinarNombres("Bruce", "Wayne"));

function obtenerSaludo(nombre) {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
  /*   return "Hola " + nombre + "!"*/
  return `Hola como estas ${nombre} !etc`;
}
console.log(obtenerSaludo("Amilcar"));

const saludo = (nombre) => `Hola ${nombre}`;
console.log(saludo("Juana"));

const obtenerAreaRectangulo = (alto, ancho) => ancho * alto;
console.log(obtenerAreaRectangulo(10, 20));

const retornarPerimetro = (lado) => lado * 4;
console.log(retornarPerimetro(34));

const areaDelTriangulo = (base, altura) => {
  //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu código aquí
  return (base * altura) / 2;
};
console.log(areaDelTriangulo(10, 8));

const deEuroAdolar = (euro) => {
  //Supongamos que 1 euro equivale a 1.20 dólares.
  //Escribe un programa que pida al usuario un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí
  return `el cambio a dolares es ${euro * 1.2}`;
};
console.log(deEuroAdolar(100));

const esVocal = (letra) => {

  letra = letra.toLowerCase()
  if (letra.length != 1) {
    return `ingresaste ${letra} TIENE MAS DE UN CARACTER`;
  } else if (
    letra == "a" ||
    letra == "e" ||
    letra == "i" ||
    letra == "o" ||
    letra == "u"
  ) {
    return `la letra ${letra} es una VOCAL`;
  } else {
    return `ingresaste un dato incorrecto`;
  }
}
console.log(esVocal("A").toLowerCase());



// Argumento / parametro
