import { IUser } from "../interfaces/user.interface";
import User from "../model/user.model";

const createUser = async(userData: IUser): Promise<IUser> => {
    const result=await User.create(userData)
return result;
}

const getAllUser = async (): Promise<IUser[]> => {
    const result = await User.find();
    return result;
}

const getSingleUser = async (id: string): Promise<IUser | null> => { 
    const result = await User.findById(id);
    return result;
}


const updateUser = async (id: string,userData:IUser): Promise<IUser | null> => {
    const result = await User.findByIdAndUpdate(id, userData, {
        new: true,
        runValidators:true //validation chekck when update
    });
    return result;
}

const deleteUser = async (id: string): Promise<IUser | null> => {
    const result =User.findByIdAndDelete(id)
    return result;
}


export const userServices = {
    createUser,
    getAllUser,
    getSingleUser,
    updateUser,
    deleteUser
}