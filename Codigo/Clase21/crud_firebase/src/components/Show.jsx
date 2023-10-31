//importaciones
import {useState,useEffect} from "react"
import {Link} from "react-router-dom"

import {collection,getDocs,deleteDoc,doc} from "firebase/firestore"
import {db} from "../firebaseConfig/firebase.js"

import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"
const mySwal = withReactContent (Swal)


export const Show = ()=>{
    //1 configurar useState (hook)
    //2 referenciamos a la db de firestore
    //3 funcion para mostrar todos los documentos
    //4 funcion para eliminar un doc
    //5 funcion para sweet alert (confirmacion / eliminacion de documento)
    //6 use effect
    //7 devolver la vista de nuestro componente
    return (
        <h1>Aca se van a mostrar todos los documentos </h1>
    )
}