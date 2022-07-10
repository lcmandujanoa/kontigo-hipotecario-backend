import { Router } from 'express';
const router = Router();

import * as userController from '../controllers/user.controller';

router.route('/')
  .get(userController.createUser);

export default router;