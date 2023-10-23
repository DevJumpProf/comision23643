import "./App.css";
import { LandingPage } from "./pages/LandingPage";
import { DetallePelicula } from "./pages/DetallePelicula"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export const App = () => {
  return (
    <BrowserRouter>
    <header >
      <Link to="/">
        <h1 className="title">PELICULAS</h1>
      </Link>
      </header>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/pelicula/:peliculaId" element={<DetallePelicula/>}/>
      </Routes>
    </BrowserRouter>
  );
};
