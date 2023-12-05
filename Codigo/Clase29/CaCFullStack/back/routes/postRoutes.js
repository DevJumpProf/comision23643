import express from "express"
const router  = express.Router()

import {getAllPost,getPost,createPost,updatePost,deletePost} from "../controllers/postController.js"

router.get ("/",getAllPost)
router.get ("/:id",getPost)
router.post("/",createPost)
router.put ("/:id",updatePost)
router.delete ("/:id",deletePost) 

export default router
