import mongoose from "mongoose";

export function connect(){
    mongoose.connect(process.env.MONGODB_URL!)
    .then(()=>console.log(`Database connected Successfully !!!`))
    .catch((err)=>console.log(`Database connection Error`,err))
}