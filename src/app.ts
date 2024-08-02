import express  from "express";
const app = express()

app.get("/",(req,res)=>{
    res.json({message:"welcom to api"})
})


// GLOVAL ERROR HANDLER

export default app;