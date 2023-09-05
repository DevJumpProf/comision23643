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


let numero=243671;
if (numero>9){
    let aTexto=String(numero);
    if (aTexto.slice(-1)==1 || aTexto.slice(-1)==3 || aTexto.slice(-1)==7 || aTexto.slice(-1)==9){
        let resultado="es primo";
        let aTextoI="";
        console.log("realizando proceso");
        for (i=3;i<=(numero/3);i=i+2){
            aTextoI=String(i);
            if(aTextoI.slice(-1)==5){
                i=i+2;
            };
            if (numero%i==0){
                console.log("es divisible por: "+i);
                resultado="no es primo";
                break;
            };
        };
        console.log("proceso terminado");
        console.log(resultado);
    }else{
        console.log("no es primo");
    };
}else{
    if (numero==2 || numero==3 || numero==5 || numero==7){
        console.log("es primo");
    }else{
        console.log("no es primo");
    };
};