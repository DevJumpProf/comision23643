import { useState, useEffect} from "react";
import Button from 'react-bootstrap/Button';

export const Counter = () => {

  const [contador, setContador] = useState(14);


useEffect(()=>{
console.log("Cambio el contador")
},[contador])

  return (
    <>
      <p>Contador:{contador}</p>
      <Button onClick={() => setContador(contador + 1)} variant="success">Sumar</Button>{' '}
      <Button onClick={() => setContador(contador - 1)} variant="danger">Restar</Button>{' '}
    </>
  );
};
