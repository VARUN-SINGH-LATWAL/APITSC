import { NextFunction, Request, Response } from "express";
import createHttpError from "http-errors";
import userModel from "./userModel";

const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
    const {name, email, password} = req.body;
    //Validation
    if (!name || !email || !password) {
        const error = createHttpError(400,"All fields are required");
        return next(error)
    }
    //Database call
    const user = await userModel.findOne({email:email})
    if (user) {
        const errro = createHttpError(400,"User already exists with this gmail")
        return next(errro);
    }
    //Process
    //Response
    res.json({message:"crate user"});
};

export { createUser };
