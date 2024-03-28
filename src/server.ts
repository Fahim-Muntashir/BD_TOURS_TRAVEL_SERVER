import app from "./app"
import mongoose from "mongoose";
const port = 5000
// getting-started.js


async function server() {
 try {
    await mongoose.connect(`${process.env.DATABASE_URL_LOCAL}`);

    app.listen(port, () => {
        console.log(`Murir app listening on port ${port}`)
    })
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
 } catch (error) {
    console.log(error);
 }
}

server().catch(err => console.log(err));