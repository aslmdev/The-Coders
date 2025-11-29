import * as authService from '../services/authService.js'
import { Router } from 'express'
const router = Router();
router.post('/signup',authService.signup);
router.post('/login',authService.login);
export default router