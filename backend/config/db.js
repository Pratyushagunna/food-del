import mongoose from "mongoose";

export  const connectDB  = async ()=>{
    await mongoose.connect('mongodb+srv://greatstack:125689@cluster0.qbjki6j.mongodb.net/food-del').then(()=>console.log("DB Connected"))
}