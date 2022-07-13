import { Schema, model } from 'mongoose';

const roleSchema = new Schema({
  NAME: {
    type: String,
    require: true
  },
  LOCATION: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

export default model('Role', roleSchema);
