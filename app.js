import express from "express";
import dotenv from "dotenv";
import PATH from "path";
import { DataBaseConnection } from "./src/database/DB.connection.js";
import BootStrap from "./src/app.controller.js";
dotenv.config({path : PATH.resolve('./src/config/.env') })
const port = 3000
const app = express()

BootStrap(app , express)

    app.use('/*dummy', (req , res)=>{
        res.status(404).json({massage : 'not found'})
    })
app.listen( port , (error)=>{ 
    if (!error) {
         console.log(`server is running on ${port}`)
        DataBaseConnection()
    }else{
        console.log( "server error", error);
    }
 } )