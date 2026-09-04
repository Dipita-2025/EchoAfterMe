// import express from "express"
// const app= express()

// app.get('/',(req,res)=>{
//     res.send("Hello World")
// })

// app.listen(8080)


import dotenv from "dotenv";
import connectDB from "./DB/server.js";
import app from "./app.js";
dotenv.config({
    path: "./.env"
});

connectDB();
app.listen(process.env.PORT,()=>{
    console.log(`server is running on port ${process.env.PORT}`)
})