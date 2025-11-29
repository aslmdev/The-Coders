import { auth } from '../middleware/authMiddleware.js';
import * as userservice from '../services/userService.js';
import { Router } from 'express';
const router = Router();
router.post('/create-list',userservice.createlist);
router.get('/get-all-list',auth,userservice.getalllist);
router.put('/update-list/:id',userservice.updatelist);
router.delete('/delete-list/:id',userservice.deleteList);
export default router