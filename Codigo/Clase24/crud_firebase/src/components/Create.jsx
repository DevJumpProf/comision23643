import {useState} from "react"
import {Link,useNavigate} from "react-router-dom"
import {collection,addDoc} from "firebase/firestore"
import {db} from "../firebaseConfig/firebase.js"



export const Create = ()=>{
  //estados
  const [name, setName] = useState("Nombre");
  const [lastName, setLastName] = useState("Apellido");
  const [specialty, setSpecialty] = useState("Especialidad");

//navegacion luego que se ejecute una funcion
const navigate = useNavigate();

//referenciamos a la db de firestore
  const heroesCollection = collection(db, "heroes");

  // funcion para crear un heroe

  const createHeroe= async (e)=>{
    e.preventDefault();
    await addDoc (heroesCollection,{
        name: name,
        lastName: lastName,
        specialty :  specialty
    })
    navigate("/")
  }

    return (
        <div className="container">
        <div className="row">
          <div className="col">
            <h1>Crear Heroe</h1>
            <form onSubmit={createHeroe}>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input
    
                  onChange={(e) => setName(e.target.value)}
                  /*   {console.log(e.target)} */
                  className="form-control"
                  type="text"
                  placeholder={name}
                />
              </div>
  
              <div className="mb-3">
                <label className="form-label">Last Name</label>
                <input

                  onChange={(e) => setLastName(e.target.value)}
                  /*   {console.log(e.target)} */
                  className="form-control"
                  type="text"
                  placeholder={lastName}
                />
              </div>
  
              <div className="mb-3">
                <label className="form-label">Specialty</label>
                <input
                   placeholder={specialty}
                 onChange={(e) => setSpecialty(e.target.value)} className="form-control"type="text"/>
              </div>
  
              <button type="submit" className="btn btn-primary">
              CREAR
              </button>
                <Link to="/" className="btn btn-danger">
                CANCELAR
              </Link>
               
            </form>
          </div>
        </div>
      </div>
        



    )
}