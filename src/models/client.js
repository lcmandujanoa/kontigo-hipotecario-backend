import { Schema, model } from 'mongoose';

const clientSchema = new Schema({
  dni: {
    type: String,
    required: true
  },
  inelegibilidad: {
    type: Boolean,
    required: false
  },
  buro: {
    type: String,
    required: false
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
    required: false
  },
  phonenumber: {
    type: String,
    unique: true,
    required: false
  },
  maritalstatus: {
    type: String,
    required: false
  },
  partner: {
    ref: 'Client',
    type: Schema.Types.ObjectId,
    required: false
  }
}, {
  timestamps: true,
});

export default model('Client', clientSchema);