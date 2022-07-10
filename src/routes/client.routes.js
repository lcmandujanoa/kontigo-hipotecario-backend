import { Router } from 'express';
const router = Router();

import * as clientController from '../controllers/client.controller';

router.route('/')
  .get(clientController.getClients)
  .post(clientController.createClient);

export default router;