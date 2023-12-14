import { FaSearch } from "react-icons/fa";
import {useNavigate} from "react-router-dom" //7 importamos UseNavigate
import {useLocation} from  "react-router-dom" //10 importamos useLocation https://reactrouter.com/en/main/hooks/use-location
import "./Buscador.css"
import { useState } from "react"; // 1 importar useState

export const Buscador = () => {

  //13 utilizamos este hook para tomar lo que viene por params
  const useQuery = ()=>{
    return new URLSearchParams(useLocation().search) //https://developer.mozilla.org/es/docs/Web/API/URLSearchParams
  }

//12 utilizo useQuery() para obtener lo que buscamos
const query = useQuery()
const search = query.get("search")
/* console.log(search); */

  //11- vemos en el navegador lo que viaja en la url(queryparams), separamos lo que buscamos (location.search)
/* const location = useLocation()
console.log(location);
console.log(location.search); */

  const navigate = useNavigate() // 8 defino la variable
  const [txtBuscador,setTxtBuscador] = useState ("") //2 controlamos el estado del input

  //3 realizamos la funcion para controlar el submit (cuando apretamos el boton buscar)
  const handleSubmit = (e) =>{
e.preventDefault(); // 5 no se realiza el submit
navigate(`/?search=${txtBuscador}`) //9 enviar lo que se escribe en el input a la url
  }

  return (
    <form className="containerBuscador" onSubmit={handleSubmit}> {/* 4 ponemos el evento en el form handleSubmit */}
      <div className="cajaBuscador">
        <input 
        value={txtBuscador}
        onChange={(e)=>setTxtBuscador(e.target.value)}
    /* 6 mostramos como controlamos un input {(e)=>setTxtBuscador(e.target.value.toUpperCase())} */
        type="text" 
        className="inputBuscador" 
        />
        <button type="submit" className="botonBuscador">
          <FaSearch />
        </button>
      </div>
    </form>
  );
};
