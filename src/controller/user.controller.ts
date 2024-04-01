/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";
import User from "../model/user.model";

const createUser = async (req: Request, res: Response) => {
    try {
        
        const userData = req.body;

        console.log(userData);

        const result=await User.create(userData)

        res.status(201).json({
            status: 'success',
            message: 'User Created Successfully',
            data:result
        })

    } catch (error:any) {
        console.log(error);

        res.status(500).json({
            status: "Fail",
            message: error.message || "somethign went wrong"
})    }
}

export const userController={
    createUser
}