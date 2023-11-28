import express from "express"
import cors from "cors"
import db from "./database/db.js"
import postRoutes from "./routes/postRoutes.js"

const app = express ()

const port = 8000

app.use(cors())
app.use(express.json())

app.use("/post",postRoutes)


// conexion a la base de datos
const conexionDB =async ()=>{
    try {
        await db.authenticate()
      console.log("conectado a la DB OK");
    } catch (error) {
        console.log(`"error:"   ${error}`)
    }
    
}

app.listen(port,()=>{
    conexionDB()
    console.log(`Servidor del proyecto OK en el puerto ${port}`);
})



