import mongoose from "mongoose";
const connectionDB = async () =>{
    try{
        const uri = process.env.DB|| "mongodb://127.0.0.1:27017/List-App" 
         await mongoose.connect(uri, {
              serverSelectionTimeoutMS:5000
            });
            console.log("MongoDB connected");
    }catch(error){
        console.log("MongoDB connection error:", error);
        
    }
}
export default connectionDB;