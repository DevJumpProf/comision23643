/* let num1 = 2 //number
let num2 = "2"  // string

let resultado = num1 * num2
console.log(resultado);
 */
//operadores
/*  + , -,/,*, % */
/* 
console.log(2+2);  //suma
console.log(3-2);//resta
console.log(7*3);//multiplicacion
console.log(21/7);//division
console.log(21%7);//modulo

 */

//operadores
//comparacion

/* let num1= 24
let num2="24"
let num3= 30
let num4= 30
console.log(num1==num2)  //boolean : true false  - no se fija el tipo de dato 
console.log(num1===num2)  // igualdad estricta
console.log(num1<num3); // menor
console.log(num1>num3); // mayor
console.log(num4>=num3); // mayor o igual
console.log(num4<=num3); // menor o igual

console.log("perro"==="Perro");

console.log(1!=="1");// estrictamente desigual
console.log(1!="1"); 
 */

// flujos de control
// if

/* if (1 == 2) {
  console.log("es igual");
} else {
  console.log("NO es igual");
} */

/* let nombre = prompt("decime nombre")
let edad = Number(prompt("decime tu edad"))

if (edad >=16) {
   alert(nombre+ " puede Votar");
  } else {
    alert(nombre+ "NO Puede Votar");
  }
 */
/* 
  let contrasenia = "12345678"
 console.log(contrasenia.length);

 if (contrasenia.length>=8){
    console.log("Contraseña ok");
 }else{
    console.log("debe tener minimo 8 caracteres");
 }
 */
/*   ||   -  && 
  or       and */
/*  console.log( 8>8  &&  7=="7");
           /*  false    true */

/* console.log( 8>8  ||  7=="7"); */
/*  false    true */
/* let edad= 18
let rol = "programador/a"

if (edad >= 18 && rol == "programador/a") {
  console.log("entra al evento");
} else {
  console.log("no entra al evento");
}
 */



let edad = 18

/* if (edad>=18){
console.log("ok");
}else {
    console.log("NO ok");
}
 */
// if ternario
/* edad>=18?console.log("ok"):console.log("NO ok"); */


// FUNCIONES
function saludo (){
    console.log("hola Codo a codo");
}
saludo ()

function suma (num1,num2){
    console.log(num1+num2);
}
suma(50,52)
suma(150,52)
suma(150,52)

// funcion flecha  / arrow

const sumar = (num1,num2) =>{console.log(num1+num2)};sumar(50,52)

const saludar = (nombre)=>{console.log("hola "+nombre)};saludar("juan")




