import { Schema, model } from 'mongoose';

const roleSchema = new Schema({
  name: {
    type: String,
    require: true
  },
  location: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

export default model('Role', roleSchema);
