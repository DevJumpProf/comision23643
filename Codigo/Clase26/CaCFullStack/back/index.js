import express from "express"
import cors from "cors"

const app = express ()

const port = 8000

app.use(cors())
app.use(express.json())

// conexion a la base de datos

app.listen(port,()=>{
    console.log(`Servidor del proyecto OK en el puerto ${port}`);
})



