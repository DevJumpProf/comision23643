

/* ARGUMENTOS Y PARAMETROS
El parametro es la representacion simbolica de un valor
El argumento es el valor como tal.
Por ejemplo
En la funcion el area de un rectantulo tenemos
Area=Base*Altura
Los parametros son las palabras base y altura y los Argumentos son por ejemplo
3 y 1, entonces el valor de la base es 3 y el de la altura es 1. entonces 3 y 1 con los argumentos.
 */




/* const deEuroAdolar = (nombre, euro)=>alert (`${nombre } el cambio es ${euro*1.2} euros`)
deEuroAdolar(prompt("tu nombre"),Number(prompt("Decime la cantidad de Euros")))
 */

//SCOPE
/* let euro =100

const deEuroAdolar=euro=>`El cambio a dolares es ${euro*1.2}`
console.log(deEuroAdolar(euro))

console.log(euro); */

/* function esVocal(letra){
  
    if(letra.length != 1 || typeof letra === "string"){
      let caracter = letra.toLowerCase();
      const vocales = new Set(['a', 'e', 'i', 'o', 'u']);
  
      if (vocales.has(caracter)) {
        return `${caracter} es vocal`;
      }else{
        return `${caracter} no es vocal. Dato ingresado incorrecto`;
      }
    }else{
      return "Dato incorrecto, debe ingresar un caracter";
    }
  }
  console.log(esVocal("a")); */

/*   SWITCH */

let semaforo = "rOJO";

switch (semaforo.toUpperCase()) {
  case "ROJO":
    console.log("No podes Pasar");
    break;
  case "AMARILLO":
    console.log("Precaución");
    break;
  case "VERDE":
    console.log("Podes Avanzar");
    break;
    default:
      console.log("NO ES UN COLOR DE SEMAFOTO");  

}

//SWITH RECOMENDAR JUEGO/ PELICULA/ LIBRO



let sumar = (num1,num2)=>num1+num2
let restar = (num1,num2)=>num1-num2
let multiplicar = (num1,num2)=>num1*num2
let dividir = (num1,num2)=>num1/num2

let calculadora = (num1,num2,operacion)=> operacion (num1,num2);

console.log(calculadora(10,10,sumar));
console.log(calculadora(10,10,restar));
console.log(calculadora(10,10,multiplicar));

/* CALLBACK */

//callback hell  = investigar



