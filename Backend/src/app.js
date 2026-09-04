import express from "express";
const app = express();
app.get('/',(req,res)=>{
    res.send("This is the backend of the application")
})

export default app;