import express from 'express'
import { allUsers, login, registerUser } from '../controllers/userControllers.js'
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router()


router.post('/register', registerUser);
router.post('/login', login);
router.get('/users',protect, allUsers);



export default router;