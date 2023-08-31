//     SPLICE            0      1        2       3       4     5      6         7
/* let animales = ["Gato","Perro","Tigre","Conejo","Pez","Rata","Tortuga","Gato"]

animales.splice(3,3,"Gatito")
console.log(animales) */


//OBJETOS {}

/* const celular ={
    marca : "Apple",
    modelo : 11,
    stock : true ,
    encender: function(){
        console.log(`celular ${this.marca} ${this.modelo} encendido`);
    }
} */

const celular = {

    marca: "Samsung",
    modelo: "Galaxy S10",
    precio: 1000,
    vendido: false,
    stock: 10,
    encendido: ()=> {
        console.log(`celular ${celular.modelo} encendido`);
    },
    bloquear: ()=> {
        console.log("Bloqueando el celular");
    },
    llamar: (numero)=> {
        console.log("Llamando al numero: " + numero);
    }
}

celular.encendido();

// notacion de puntos console.log(celular.marca);
// notacion de corchetes console.log(celular["marca"]);


// spread operator (objetos)

let generoAccion={
    nombreGenero: "Accion",
    ranking:1
}

let duroMatar={
    titulo:"rambo",
    popularidad:10,
...generoAccion
}
console.log(duroMatar);

//DESTRUCTURING

// ARRAY            0        1          2
let seleccion = ["Messi","De Paul", "Martinez"]

// copiando datos SIN DESTRUCTURING
let dibu2 = seleccion[2]
console.log( dibu2);

// copiando datos con DESTRUCTURING
let [leo,rodrigo,dibu] = seleccion
console.log(leo);


//DESTRUCTURING OBJETOS

let auto ={
    marca: "Chevrolet",
    modelo: "Zafira",
    anio: 2006
}

// copiando datos SIN DESTRUCTURING
let miModelo = auto.modelo
console.log(miModelo);

// copiando datos CON DESTRUCTURING

let {marca:nuevaMarca,anio}  = auto
console.log(nuevaMarca);


