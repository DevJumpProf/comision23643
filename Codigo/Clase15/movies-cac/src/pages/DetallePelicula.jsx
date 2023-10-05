import { get } from "../utils/httpCliente";
import { useState, useEffect } from "react";
import {useParams} from "react-router-dom"

import "./DetallePelicula.css"

export const DetallePelicula=()=>{
    const [pelicula,setPelicula] = useState(null)

    const {peliculaId} = useParams()

    useEffect(()=>{
       get(`/movie/${peliculaId}`).then((data)=>{
            setPelicula(data);
        }) 
        },[peliculaId])

        if(!pelicula){
            return null;
        }
        const imgURL= `https://image.tmdb.org/t/p/w300${pelicula.poster_path}`
        return(
<div className="contenedorDetalle">
 <img className="col" src={imgURL} alt={pelicula.title} />
<div className="peliculaDetalle col">
<p className="item">
    <strong>Titulo:</strong>
    {pelicula.title}
</p>
<p >
    <strong>Descripcion:</strong>
    {pelicula.overview}
</p>

<p >
    <strong>Generos:</strong>
    {pelicula.genres.map((genre)=>genre.name).join(", ")}
</p>

</div>
</div>

    

        )

}