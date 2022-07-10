// require('dotenv').config();
import { config } from 'dotenv';
config();

// export default {
//   PORT: process.env.PORT || 3000,
//   MONGODB_URI: process.env.MONGODB_URI
// }
export const PORT = process.env.PORT || 3000;
export const MONGODB_URI = process.env.MONGODB_URI;
export const SECRET_KEY = process.env.SECRET_KEY;