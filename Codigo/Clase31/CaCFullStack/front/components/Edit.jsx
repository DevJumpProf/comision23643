import axios from "axios"
import {useEffect,useState} from "react"
import {useParams,useNavigate} from "react-router-dom"

const Edit = ()=>{
    
//llamar al endpoint (nuestra API en el local host 8000)
const API = "http://localhost:8000/post/";

const [titulo, setTitulo] = useState("");
const [contenido, setContenido] = useState("");

const navigate = useNavigate();

const {id} = useParams()    

// procedimiento para traer un post por su id
const getPostById = async ()=>{
    const respuesta = await axios.get(API+id)
    setTitulo(respuesta.data.title)
    setContenido(respuesta.data.content)
}

useEffect(()=>{
    getPostById ()
},[])

// procedemiento para actualizar un post
const update = async (e)=>{
    e.preventDefault()
    await axios.put(API+id,{
        title:titulo,
        content:contenido
    })
    navigate("/")
}
    return (
        <div>
          <h1>Editar Post </h1>
          <form onSubmit={update}>
             <div className="mb-3">
                <label className="form-label">Titulo</label>
                <input 
                type="text" 
                value={titulo} 
                onChange={(e)=>setTitulo(e.target.value)} 
                className="form-control"/>
             </div>
    
             <div className="mb-3">
                <label className="form-label">Contenido</label>
                <input 
                type="text" 
                value={contenido} 
                onChange={(e)=>setContenido(e.target.value)} 
                className="form-control"/>
             </div>
             <button type="submit" className="btn btn-primary">EDITAR</button>
          </form>
        </div>
      );
}

export default Edit