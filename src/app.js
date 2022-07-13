import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import { roleCreation } from './libs/initialSetup';

import AUTH_ROUTES from './routes/auth.routes';
import USER_ROUTES from './routes/user.routes';
import OPERATION_ROUTES from './routes/operation.routes';

const app = express();
roleCreation();

// middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// routes
app.use('/api/auth', AUTH_ROUTES);
app.use('/api/users', USER_ROUTES);
app.use('/api/operations', OPERATION_ROUTES);

export default app;