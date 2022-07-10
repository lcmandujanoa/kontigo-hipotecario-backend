import app from './app';
import { PORT } from './config';
import { databaseConnection } from './database';

databaseConnection();

app.listen(PORT, () => {
  console.log('********** server started successfully');
});