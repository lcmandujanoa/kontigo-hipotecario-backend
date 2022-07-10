import express from 'express';
import morgan from 'morgan';

import { roleCreation } from './libs/initialSetup';

import authRoutes from './routes/auth.routes';
import userRoutes from './routes/user.routes';
import clientRoutes from './routes/client.routes';

const app = express();
roleCreation();

// middlewares
app.use(express.json());
app.use(morgan('dev'));

// routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/clients', clientRoutes);

export default app;