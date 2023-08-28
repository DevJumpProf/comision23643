// sentencia while

/* let numero = Number(prompt ("decime un numero")); */

/* while (numero<1000){
numero++;
document.write (numero + "<br>");
if(numero==500){
    break;
}
} */

// do 
/* do {
numero++;
document.write (numero)
}while (numero<10)
 */

//FOR
//declaramos la variable, expresion condicional, incrementamos la variable
/* for (let i = 0;i<10;i++){
    console.log(i);
}

for (let i= 1;i<=10;i++){
    console.log(2*i);
}
 */
// bucle infinito
/* for (let i = 0 ; i>=0;i++){
    console.log(i);
}
 */

/* ARRAYS - ARREGLO - MATRIZ */
//indice          0        1        2        3    
/* let frutas = ["Manzana","Banana","Pera", "Tomate"] */
// length         1         2       3       4     
 // ultimo elemento
/* console.log(frutas[frutas.length-1]); */
                                            
/* console.log(frutas[1]); //accedo a un elemento.
console.log(frutas.length); */
 //               0       1        2      3       4    5       6        7
let animales = ["Gato","Perro","Tigre","Conejo","Pez","Rata","Tortuga","Gato"]
let numeros = [1,2,8,7,4,6,7,3]


//spread operator
let rapido= ["rapido y furioso","rapido y furioso 2","rapido y furioso 3"]
let furioso = ["rapido y furioso 4","rapido y furioso 5"]

let todas = [...rapido,...furioso,"la 6"]
console.log(todas);


//DESTRUCTURING

//OBJETOS

//metodos de array


//map
/* .map() : Permite recorre el array y modificar los elements presentes en él, 
retornando un nuevo array con la misma longitud que el original.
.map */
/* 
let nuevoArray = numeros.map(elements=>elements*10)
console.log(nuevoArray); */

//filter 

/* .filter() : Recorre el array y retorna un nuevo array con aquellos elementos que pasen una determinada condición
.filter */
/* let nuevoArray = animales.filter (elements=>elements==="Perro"||elements==="Gato")
console.log(nuevoArray ); */

//forEach
/* .forEach() : Permite iterar el contenido de un array. Recibe un callback que toma como parámetro el elemento actual de la iteración y el indice del mismo.
forEach */
/* animales.forEach((element,i)=>{
    console.log(`Animal:  ${element} esta en la posicion ${i}`);
}) */


//find
/* .find() : Recorre el array y retorna la primera coincidencia del elemento que se busca.
.find */

/* const nuevo = numeros.find(element=>element>7)
console.log(nuevo); */


//SLICE
/* slice() : Devuelve una copia de una parte del array dentro de un nuevo array empezando por inicio hasta fin (fin no incluido). El array original no se modificará.  */
/* let nuevoArray= animales.slice(2,5) 
console.log(nuevoArray); */

//unshift
//Agrega un dato al inicio del array

/* animales.unshift("Elefante")
console.log(animales); */

//shift
//elimina un dato al inicio del array
/* animales.shift()
console.log(animales); */

//.pop ()
// elimina elemento al final del array
/* animales.pop()
console.log(animales)

// .PUSH()
animales.push ("Cocodrilo")
console.log(animales)
 */











