import express from "express"
const router  = express.Router()

import {getAllPost} from "../controllers/postController.js"

router.get ("/",getAllPost)
/* router.get ("/:id",funcion que trae post)
router.post("/",otrocontrolador)
router.put ("/:id",otrocontrolador)
router.delete ("/:id"otrocontrolador) */

export default router
