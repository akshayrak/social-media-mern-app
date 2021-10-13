import express from 'express';  //importing express

//named import of controller functions that fetch data
import { createPost, getposts } from '../controller/posts.js';

const router=express.Router();  //router function


//@desc GET all products form db
//@route GET /api/products
//@access Public
router.get('/',getposts)
router.post('/',createPost)



export default router  //exporting router function