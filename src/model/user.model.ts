import { Query, Schema, model } from "mongoose";
import { IUser } from "../interfaces/user.interface";

const UserSchema = new Schema<IUser>({
    name: {
        type: String,
        required: [true, "please tell us your name"]
    },
    age: {
        type: String,
        required: [true, "please tell us your email"]
    },
    email: {
        type: String,
        unique: true,
        required: [true, "please tell us your email"],
        lowercase: true,
    },
    photo: {
        type: String,
    },
    role: {
        type: String,
        enum: ["admin", "user"],
        default: "user",
    },
    userStatus: {
        type: String,
        enum: ['active', 'inactive'],
        default: "active",
    },

})


// pre hook for query middleware


UserSchema.pre(/^find/, function (this:Query<IUser,Document>, next) {
    this.find({ userStatus: { $eq: "active" } })
    next()
})

const User = model<IUser>('User', UserSchema);
export default User;