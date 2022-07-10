import { Schema, model } from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    unique: true,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  secondlastname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  phonenumber: {
    type: String,
    unique: true,
    required: false
  },
  boss: {
    ref: 'User',
    type: Schema.Types.ObjectId,
    required: false
  },
  role: {
    ref: 'Role',
    type: Schema.Types.ObjectId,
    required: false
  }
}, {
  timestamps: true,
});

userSchema.statics.encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
}

userSchema.statics.comparePassword = async (receivedPassword, password) => {
  return await bcrypt.compare(receivedPassword, password);
}

export default model('User', userSchema);