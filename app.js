import express from "express";
import * as dotenv from 'dotenv'
dotenv.config({})
import connectionDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js"
const app =express()
app.use(express.json())
const port = process.env.PORT
connectionDB()
// routers
app.use('/api/auth',authRoutes)
app.listen(port,()=>console.log(`server running on  ${port}`))