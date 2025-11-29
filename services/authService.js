import { UserModel } from "../models/User.js";
import { asyncHandler, successResponse } from "../utils/asynchandler.js";
import { generateencryption } from "../utils/encryption.js";
import { generateToken } from "../utils/generate.token.js";
import { generateHash } from "../utils/hashpassword.js";
import { compareHash } from "../utils/hashpassword.js";
export const signup = asyncHandler(async(req,res,next)=>{
    const {fullName,email,phone,password} = req.body;
    const user = await UserModel.findOne({email})
    if (user) {
        return next(new Error('email already exists',{cause:409}))
    }
const hashpassword = await generateHash({plaintext:String(password)})
const generatephone = await generateencryption({plaintext:String(phone)})
const NewUser = await UserModel.create({
  fullName,
  email,
  phone:generatephone,
  password:hashpassword,
});

   return successResponse({res,status:201,data:{NewUser}})
})
export const login = asyncHandler(async(req,res,next)=>{
    const {email,password} = req.body;
    const user = await UserModel.findOne({email})
    if (!user) {
     return next(new Error('user not found',{cause:404}))
    }
    const passwordmatch = await compareHash ({plaintext:String(password),hashValue:user.password})
    if (!passwordmatch) {
     return next(new Error('invalid-password',{cause:404}))
    }
    const accesstoken = await generateToken({id:user._id,email:user.email})
    const Refreshtoken = await generateToken({id:user._id,email:user.id})
    return successResponse({res,status:200,data:{accesstoken,Refreshtoken}})
})