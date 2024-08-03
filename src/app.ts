import express from "express";
import glovalErrorHandler from "./middlewares/globalErrorHandler";
const app = express()

app.get("/",(req,res,next)=>{


    res.json({message:"welcom to api"})
})


// GLOVAL ERROR HANDLER
app.use(glovalErrorHandler)


export default app;