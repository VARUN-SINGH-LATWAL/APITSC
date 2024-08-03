import { config } from "../config/config";
import { NextFunction ,Request , Response } from "express";
import { HttpError } from "http-errors";

// GLOVAL ERROR HANDLER
 const glovalErrorHandler = (err:HttpError ,req: Request,res: Response,next: NextFunction)=>{
    const statusCode = err.statusCode || 500;
    return res.status(statusCode).json({
        message: err.message,
        errorStack: config.env === "development"?  err.stack : ""
    })
}

export default glovalErrorHandler;