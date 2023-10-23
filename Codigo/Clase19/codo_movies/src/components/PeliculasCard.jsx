import {Link} from "react-router-dom"
import "./PeliculasCard.css"


export const PeliculasCard = ({ pelicula }) => {
  const imgURL = `https://image.tmdb.org/t/p/w300${pelicula.poster_path}`;

  return (
    <li className="moviesCard">
      <Link to={`/pelicula/${pelicula.id}`}>
      <img className="movieImage" src={imgURL} alt={pelicula.title} />
      <div>{pelicula.title}</div>
      </Link>
    </li>
  );
};
