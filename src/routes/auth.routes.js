import { Router } from 'express';
const router = Router();

import * as AUTH_CONTROLLER from '../controllers/auth.controller';

router.route('/register').post(AUTH_CONTROLLER.REGISTRAR_USUARIO);
router.route('/login').post(AUTH_CONTROLLER.LOGUEAR_USUARIO);

export default router;