import express from "express";
import * as dotenv from 'dotenv'
dotenv.config({})
import connectionDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js"
import userRoutes from "./routes/userRoutes.js"
import errorHandler from "./middleware/errorHandler.js"
const app =express()
app.use(express.json())
const port = process.env.PORT
// errorhandler
app.use(errorHandler)
// dbconnection
connectionDB()
// routers
app.use('/api/auth',authRoutes)
app.use('/api/user',userRoutes)
app.listen(port,()=>console.log(`server running on  ${port}`))