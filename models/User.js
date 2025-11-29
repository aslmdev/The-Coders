import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      minLength: 4,
      maxLength: [20, "first name max Length is 20"],
    },
    lastName: {
      type: String,
      required: true,
      minLength: 4,
      maxLength: [20, "last name max Length is 20"],
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    password:{
        type: String,
      required: true,
      minLength: 6,
    }
  },
  {
    timestamps: true, 
  }
);
userSchema.virtual("fullName").set(function(value){
    const [firstName,lastName]=value?.trim().split(" ") ||[]
    this.set({firstName,lastName});
}).get(function(){
    return `${this.firstName}  ${this.lastName}`;
})
export   const UserModel = mongoose.model("User", userSchema)

