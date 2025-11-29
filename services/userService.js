import { ListModel } from "../models/List.js";
import { asyncHandler,successResponse } from "../utils/asynchandler.js";
export const createlist = asyncHandler(async(req,res,next)=>{
    const {title,description,date} =req.body
      const userId = req.user._id;
  const todo = await ListModel.create({
    user: userId,
    title,
    description,
    date
  });
  return successResponse({res,status:201,data:todo})
})
export const getalllist = asyncHandler(async(req,res,next)=>{
 const userId = req.user._id;
 const todos = await ListModel.find({user:userid})
   if (!todos || todos.length === 0) {
    return successResponse({ res, status: 200, data: [], message: "No todos found" });
  }
  return successResponse({ res, status: 200, data: todos });
})
export const updatelist = asyncHandler(async(req,res,next)=>{
     const { id } = req.params; 
  const updateData = req.body; 
  const userId = req.user._id; 
  const todo = await ListModel.findOneAndUpdate(
    { _id: id, user: userId },
    updateData,
    { new: true } 
  );

  if (!todo) {
    return next(new Error("Todo not found or not authorized", { cause: 404 }));
  }

  return successResponse({ res, status: 200, data: todo, message: "Todo updated successfully" })
})
export const deletelist = asyncHandler(async(req,res,next)=>{
  const { id } = req.params; 
  const userId = req.user._id; 
  const todo = await ListModel.findOneAndDelete({ _id: id, user: userId });

  if (!todo) {
    return next(new Error("Todo not found or not authorized", { cause: 404 }));
  }

  return successResponse({ res, status: 200, data: todo, message: "Todo deleted successfully" })
})