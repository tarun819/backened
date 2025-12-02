// require('dotenv').config({path: './env'})
// import mongoose from "mongoose";
// import {DB_NAME} from "./constants";
import dotenv from "dotenv"
import connectDB from "./db/index.js";
  
dotenv.config({
    path:'./env'
})

connectDB()

/*
import express from "express";
const app=express()
(async()=>{
    try{
       await mongoose.connect(`${process.env.mongodb_uri}/${DB_NAME}`)
       app.on("error",(error)=>{
        console.log("ERRR",error);
        throw error
       })
       app.listen(process.env.port,()=>{
        console.log(`app is listing on port ${process.env.port}`); 
       })
    }catch(error){
        console.error("error",error)
        throw err
    }
})()  */