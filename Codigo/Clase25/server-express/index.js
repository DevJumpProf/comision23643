import express from "express"  //  importo express
/* console.log(express); */
const port = 3030
const app = express() // guardo en app sus metodos

app.get("/",(req,res)=>{
res.send("servidor ok , estas en el index")
})

app.get("/contacto",(req,res)=>{
    res.send("servidor ok , estas contactos")
    })
    

app.listen(port,()=>{
    console.log(`server funcionando en el puerto ${port}`);
})

