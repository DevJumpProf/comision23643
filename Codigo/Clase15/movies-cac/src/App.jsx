import { LandingPage } from "./pages/LandingPage";
import { DetallePelicula } from "./pages/DetallePelicula";
import {BrowserRouter,Routes,Route,Link} from "react-router-dom"
import "./App.css";

function App() {
  return (
   <BrowserRouter>
      <header>
        <Link to="/">
          <h1 className="title">Peliculas</h1>
        </Link> 
        </header>

        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/pelicula/:peliculaId" element={<DetallePelicula/>}/>
        </Routes>
 
      </BrowserRouter>
  );
}

export default App;
