import { Schema, model } from 'mongoose';

const operationSchema = new Schema({
  TIPO_DOCUMENTO: {
    type: String,
    required: true
  },
  NUMERO_DOCUMENTO: {
    type: String,
    required: false
  },
  NOMBRE: {
    type: String,
    required: false
  },
  APELLIDO_PATERNO: {
    type: String,
    required: true
  },
  APELLIDO_MATERNO: {
    type: String,
    required: true
  },
  ORIGEN: {
    type: String,
    required: true
  }
}, {
  timestamps: true,
});

export default model('Operation', operationSchema);