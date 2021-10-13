import dotenv from "dotenv";
dotenv.config();
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import connectDB from "./config/db.js";
import postRoutes from "./routes/posts.js"

connectDB()

const app=express()

app.use('/posts', postRoutes)

app.use(bodyParser.json({limit:"30mb", extended:true}))
app.use(bodyParser.urlencoded({limit: "30mb", extended:true}))
app.use(cors())

const PORT = process.env.PORT||5000

app.listen(PORT,()=>console.log(`server started on port ${PORT}`))//listen
