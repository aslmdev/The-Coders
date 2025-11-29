import { ListModel } from "../models/List.js";
import { asyncHandler,successResponse } from "../utils/asynchandler.js";
export const createlist = asyncHandler(async(req,res,next)=>{
    const {userID,title,description,date} =req.body
      if (!title) {
    return res.status(400).json({ message: "Title is required" });
  }
  const todo = await ListModel.create({
    user: userID,
    title,
    description,
    date
  });
  return successResponse({res,status:201,data:todo})
})
export const getalllist = asyncHandler(async(req,res,next)=>{
 const userId = req.user._id;
 const todos = await ListModel.find({user:userId})
   if (!todos || todos.length === 0) {
    return successResponse({ res, status: 200, data: [], message: "No todos found" });
  }
  return successResponse({ res, status: 200, data: todos });
})

export const updatelist = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const { title, description, date, status } = req.body;

  const list = await ListModel.findById(id);
  if (!list) {
    return res.status(404).json({ message: "List not found" });
  }
  if (title) list.title = title;
  if (description) list.description = description;
  if (date) list.date = date;       // صححت الاسم
  if (status) list.status = status; // صححت الاسم
  await list.save();
  return successResponse({
    res,
    status: 200,
    data: list,
  });
});


export const deleteList = asyncHandler(async (req, res,next) => {
  const { id } = req.params;
  const list = await ListModel.findById(id);
  if (!list) {
    return res.status(404).json({ message: "List not found" });
  }
  await ListModel.deleteOne();
  return successResponse({
    res,
    status: 200,
    data: null,
    message: "List deleted successfully",
  });
});
