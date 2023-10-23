import { get } from "../../utils/httpCliente";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import "./DetallePelicula.css"

// css de este componente

export const DetallePelicula = () => {
  const [pelicula, setPelicula] = useState(null);
  const { peliculaId } = useParams();

  useEffect(() => {
    get(`/movie/${peliculaId}`).then((data) => {
 /*      console.log(data); */
      setPelicula(data);
    });
  }, [peliculaId]);

  if (!pelicula) {
    return null;
  }

  const imgURL = `https://image.tmdb.org/t/p/w300${pelicula.poster_path}`;
/*   const compania = `https://image.tmdb.org/t/p/w300${pelicula.production_companies[2].logo_path}`; */

  return (
    <div className="contenedorDetalle"> 
      <img className="col" src={imgURL} alt={pelicula.title} />
      <div className="peliculaDetalle col">
        <p className="item">
          <strong>Titulo:</strong>
          {pelicula.title}
        </p>

        <p>
          <strong>Descripcion</strong>
          {pelicula.overview}
        </p>

        <p>
            <strong>Generos:</strong>
            {pelicula.genres.map((genre)=>genre.name).join(" - ")}
        </p>

        <p>
            <strong>Fecha de Lanzamiento</strong>
            {pelicula.release_date}
        </p>
        <p>
            <strong>Compañias productoras: </strong>
            {pelicula.production_companies.map((company)=>company.name).join(" - ")}
    {/*      <img src={compania} alt={compania} /> */}
        </p>
      </div>
    </div>
  );
};
