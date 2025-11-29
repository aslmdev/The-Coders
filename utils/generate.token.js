import jwt from "jsonwebtoken";

export const generateToken = (userId) => {
  return jwt.sign(
    { id: userId },               
    process.env.JWT_SECRET,       
    { expiresIn: process.env.EXPIRES_IN }        
  );
};
export const Verifytoken = (token) => {
    return jwt.verify(token,process.env.JWT_SECRET)
}