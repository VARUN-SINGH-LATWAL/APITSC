import express from "express";
import glovalErrorHandler from "./middlewares/globalErrorHandler";
import userRouter from "./users/userRouter";
const app = express()
app.use(express.json())

app.get("/",(req,res)=>{
    res.json({message:"welcom to api"})
})

app.use("/api/users",userRouter)

// GLOVAL ERROR HANDLER
app.use(glovalErrorHandler)


export default app;