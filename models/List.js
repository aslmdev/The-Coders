import mongoose from "mongoose";
export const stautsEnum={pending:"pending",completed:"completed"}
const listSchema = new mongoose.Schema(
    {
        user:{
            type:mongoose.Schema.ObjectId,
            ref:"User",
            required:true
        },
      title:{
        type: String,
        required: true,
        maxLength: 100
      },
       description: {
      type: String,
      maxLength: 500
      },
      Date:{
        type:Date,
      },
      stauts:{
        type:String,
        enum:{values:Object.values(stautsEnum)},
        default:completed
      }
    },
    {timestamps:true}
)
export const ListModel = mongoose.model("List",listSchema)