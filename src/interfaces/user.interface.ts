interface IUser{
    name: string;
    age: string;
    email: string;
    photo: string;
    role: "user" | "admin";
    userStatus: 'active' | 'inactive';
}

export {IUser}