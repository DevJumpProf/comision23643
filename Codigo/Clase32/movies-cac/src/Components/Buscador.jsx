import { FaSearch } from "react-icons/fa";
import "./Buscador.css"
export const Buscador = () => {
  return (
    <form className="containerBuscador">
      <div className="cajaBuscador">
        <input type="text" className="inputBuscador" />
        <button type="submit" className="botonBuscador">
          <FaSearch />
        </button>
      </div>
    </form>
  );
};
