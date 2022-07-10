import { connect } from 'mongoose';
import { MONGODB_URI } from './config';

// connect(MONGODB_URI)
//   .then(db => console.log('********** mongo database connected successfully'))
//   .catch(err => console.log(err));

export const databaseConnection = async () => {
  try {
    await connect(MONGODB_URI);
    console.log('********** mongo database connected successfully');
  } catch (error) {
    console.error(error);
  }
}