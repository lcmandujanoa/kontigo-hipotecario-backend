import { Router } from 'express';
const router = Router();

import * as OPERATION_CONTROLLER from '../controllers/operation.controller';
import { verifyAuth } from '../middlewars';

router.route('/')
  .get(verifyAuth.VERIFICAR_TOKEN, OPERATION_CONTROLLER.GET_OPERATIONS)
  .post(OPERATION_CONTROLLER.CREATE_OPERATION);

export default router;