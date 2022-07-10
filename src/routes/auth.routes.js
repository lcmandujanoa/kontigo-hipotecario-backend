import { Router } from 'express';
const router = Router();

import * as authController from '../controllers/auth.controller';

router.route('/signup').post(authController.signUp);
router.route('/signin').post(authController.signIn);

export default router;