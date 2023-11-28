//IMPORTAMOS EL MODELO

import postModel from "../models/postModel.js"

/* C
   R
   U
   D */


   //mostrar todos los registros

export const getAllPost = async (req,res)=>{
    try {
        const post = await postModel.findAll()
        res.json (post)

    } catch (error) {
        res.json ({message:error.message})
    }
}