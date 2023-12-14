import { get } from "../utils/httpCliente.js"
import {useState,useEffect} from "react"
import { PeliculasCard } from "./PeliculasCard"
import "./PeliculasGrid.css"
import { Spinner } from "./Spinner.jsx"

export const PeliculasGrid=()=>{
    
const [peliculas,setPeliculas] = useState([])
const [cargando,setCargando]= useState(true);

useEffect (()=>{
    setCargando(true)
        get("/discover/movie").then((data)=>{
    /*         console.log(data); */
            setPeliculas(data.results);
        })
        setCargando(false)
},[])

  if(cargando){
    return <Spinner/>
  }
return(
    <ul className="moviesGrid">
        {peliculas.map((pelicula)=>(
        <PeliculasCard key={pelicula.id} pelicula={pelicula}/>
        ))}
    </ul>
)


}