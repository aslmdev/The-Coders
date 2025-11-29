
export const asyncHandler = (fn) => {
  return (req, res, next) => {
    Promise
      .resolve(fn(req, res, next))
      .catch(next);
  };
};

export const successResponse =({res,message="Done",status=200,data= {} } = {}) =>{
 return res.status(status).json({message,data})
}

export const globalerrorHandling=(error,req,res,next)=>{
        return res.status(error.cause||400).json({message:error.message,stack:error.stack})
}