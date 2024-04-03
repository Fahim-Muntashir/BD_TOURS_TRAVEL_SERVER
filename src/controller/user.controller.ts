/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";
import { userServices } from "../services/user.service";

const createUser = async (req: Request, res: Response) => {
    try {
        
        const userData = req.body;
        const result=await userServices.createUser(userData)

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
const getAllUser = async (req: Request, res: Response) => {
    try {

        const result=await userServices.getAllUser()

        res.status(200).json({
            status: 'success',
            message: 'User All retrived Successfully',
            data:result
        })

    } catch (error:any) {
        console.log(error);

        res.status(500).json({
            status: "Fail",
            message: error.message || "somethign went wrong"
})    }
}
const getSingleUser = async (req: Request, res: Response) => {
    try {
        
        const id = req.params.id;
        const result=await userServices.getSingleUser(id)

        res.status(200).json({
            status: 'success',
            message: 'SIngle User Get Successfully',
            data:result
        })

    } catch (error:any) {
        console.log(error);

        res.status(500).json({
            status: "Fail",
            message: error.message || "somethign went wrong"
})    }
}
const updateUser = async (req: Request, res: Response) => {
    try {
        const id=req.params.id;
        const userData = req.body;
        const result=await userServices.updateUser(id,userData)

        res.status(200).json({
            status: 'success',
            message: 'User Updated Successfully',
            data:result
        })

    } catch (error:any) {
        console.log(error);

        res.status(500).json({
            status: "Fail",
            message: error.message || "somethign went wrong"
})    }
}
const deleteUser = async (req: Request, res: Response) => {
    try {
        
        const id = req.params.id;
        const result=await userServices.deleteUser(id)

        res.status(200).json({
            status: 'success',
            message: 'User Delete Successfully',
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
    createUser,
    getAllUser,
    getSingleUser,
    updateUser,
    deleteUser
}