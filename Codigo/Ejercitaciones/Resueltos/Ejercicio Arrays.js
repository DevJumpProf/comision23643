/* Ejercicio  arrays */

/* 1)Declarar un array que vamos a llamar “clasificaciones” con los siguientes valores:
Marcos, Franco, Agostina, Leon, Juan Cruz,Eduardo */

const clasificaciones = ["Marcos", "Franco", "Agostina", "Leon", "Juan Cruz", "Eduardo"]
/* (vamos a suponer que esa es la orden de clasificación de un concurso) */

/* 2)recorre el array (clasificaciones) e Imprime la clasificación actual.
 (realizar una funcion "mostrarClasificacion()" esa funcion debe recorrer el array con un bucle for y mostrar la clasificacion) */
document.write("POSICION INICIAL" + "<br>")
//modo Correcto ForEach (pueod usar tambien document.w  rite)
const mostrarClasificacion= ()=>{
    for (let i= 0;i<clasificaciones.length;i++){
        document.write((`${i+1}. ${clasificaciones[i]}<br>`))
    }
}
mostrarClasificacion()
/* 3)El concurso continua, y se van modifican esas posiciones anteriores. Debemos cambiar en el array: */
/* a)Leon adelanta a Agostina */
/* const clasificaciones = ["Marcos", "Franco", "Agostina", "Leon", "Juan Cruz", "Eduardo"] */
clasificaciones.splice(2,2,"Leon","Agostina")

/* clasificaciones[2] = "Leon"
clasificaciones[3] = "Agostina" */

/* const indiceAgostina = clasificaciones.indexOf("Agostina") */



/* b)Eduardo es descalificado y se elimina del concurso */
clasificaciones.pop()


/* c)Detrás de Marcos y antes de Franco se clasifican dos nuevas concursantes: Julieta y Martina, en ese orden */

clasificaciones.splice(1,0,"Julieta","Martina")

/* d)Hay una nueva participante que pasa a encabezar la clasificación: Alicia */

clasificaciones.unshift("Alicia")

/* e)muestra la clasificación actualizada (mostrarClasificacion())y comprueba que se ha hecho correctamente  */

document.write("<br>")

document.write("POSICION FINAL" + "<br>")
mostrarClasificacion()