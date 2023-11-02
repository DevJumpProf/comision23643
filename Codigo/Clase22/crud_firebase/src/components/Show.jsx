//importaciones
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebaseConfig/firebase.js";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const mySwal = withReactContent(Swal);

export const Show = () => {
  //1 configurar useState (hook)
  const [heroes, setHeroes] = useState([]);

  //2 referenciamos a la db de firestore
  const heroesCollection = collection(db, "heroes");
  //3 funcion para mostrar todos los documentos

  const getHeroes = async () => {
    const data = await getDocs(heroesCollection);
    /*      console.log(data.docs);  */
    setHeroes(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    /*     console.log(heroes);  */
  };

  //4 funcion para eliminar un doc
  const deleteHeroe = async (id) => {
    const heroesDoc = doc(db, "heroes", id);
    await deleteDoc(heroesDoc);
    getHeroes();
    //
  };
  //5 funcion para sweet alert (confirmacion / eliminacion de documento)
  const confirmDelete = (id) => {
    Swal.fire({
      title: "Segurola?",
      text: "No podes revertir esto!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, Quiero Eliminar!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteHeroe(id);
        Swal.fire("Borrado!", "Tu Documento ha sido Eliminado.", "success");
      }
    });
  };

  //6 use effect
  useEffect(() => {
    getHeroes();
  }, []);

  //7 devolver la vista de nuestro componente
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="d-grid gap-2">
              <Link to="/create" className="btn btn-primary">
                CREAR
              </Link>
            </div>

            <table className="table table-dark table-hover">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Apellido</th>
                  <th>Especialidad</th>
                  <th>Acciones</th>
                </tr>
              </thead>

              <tbody>
                {heroes.map((heroe) => (
                  <tr>
                    <td>{heroe.name}</td>
                    <td>{heroe.lastName}</td>
                    <td>{heroe.specialty}</td>
                    <td>
                      <Link to={`edit/${heroe.id}`} className="btn btn-light">
                        <i className="fa-sharp fa-solid fa-pencil"></i>
                      </Link>
                      <button
                        className="btn btn-danger"
                        onClick={() => confirmDelete(heroe.id)}
                      >
                        <i className="fa-solid fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
