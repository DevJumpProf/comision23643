import React from 'react'
import ReactDOM from 'react-dom/client'
import Card from "./Card.jsx"
ReactDOM.createRoot(document.getElementById('root')).render(
    <>
      <Card apellido="Messi" nacimiento={1987} clubes={["Newells ","Barcelona ","PSG "," Inter MIAMI"]} mundial={true} late={false} /> 
      <Card apellido="Ronaldo" nacimiento={1984} clubes={["Lisboa ","Manchester ","R.Madrid ","Juve ","Al-Nasar"]} mundial={false} late={true} /> 
    </> 
)
