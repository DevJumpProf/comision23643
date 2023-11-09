//importaciones
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { getDoc, updateDoc, doc } from "firebase/firestore";
import { db } from "../firebaseConfig/firebase.js";

export const Edit = () => {
  //estados
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [specialty, setSpecialty] = useState("");

  //navegacion luego que se ejecute una funcion
  const navigate = useNavigate();

  // destructuro los paremetros y traigo el id
  const { id } = useParams();

  // funcion para actualizar un documento

  const update = async (e) => {
    e.preventDefault();
    const heroeDoc = doc(db, "heroes", id);
    const data = {
      name: name,
      lastName: lastName,
      specialty: specialty,
    };
    await updateDoc(heroeDoc, data);
    navigate("/");
  };

  // funcion que trae un doc por su id

  const getHeroesById = async (id) => {
    // guardar en una variable la identificacion al documento que quiero traer
    const heroeDoc = await getDoc(doc(db, "heroes", id));

    if (heroeDoc.exists()) {
      setName(heroeDoc.data().name);
      setLastName(heroeDoc.data().lastName);
      setSpecialty(heroeDoc.data().specialty);
    } else {
      console.log("no existe ese dato en la base datos");
    }
  };

  //tarea: dentro del use effect tiene que ir la funcion para el heroe (buena practica)

  //6 use effect
  useEffect(() => {
    getHeroesById(id);
  }, []);

  // retorno el formulario

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>Edit Heroe</h1>
          <form onSubmit={update}>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                /*   {console.log(e.target)} */
                className="form-control"
                type="text"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Last Name</label>
              <input
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                /*   {console.log(e.target)} */
                className="form-control"
                type="text"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Specialty</label>
              <input value={specialty} onChange={(e) => setSpecialty(e.target.value)} className="form-control"type="text"/>
            </div>

            <button type="submit" className="btn btn-primary">
              Editar
            </button>
              <Link to="/" className="btn btn-danger">
              CANCELAR
            </Link>
             
          </form>
        </div>
      </div>
    </div>
  );
};
