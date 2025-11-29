import CryptoJS from "crypto-js";
export const generateencryption = async({plaintext ="",secretkey=process.env.SECRET_KEY})=>{
return CryptoJS.AES.encrypt(plaintext,secretkey)
}

export const decryptencryption = async({ciphertext ="",secretkey=process.env.SECRET_KEY}={})=>{
return CryptoJS.AES.decrypt(ciphertext,secretkey).toString()
}