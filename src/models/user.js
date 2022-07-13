import { Schema, model } from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new Schema({
  TIPO_DOCUMENTO: {
    type: String,
    unique: true,
    required: true
  },
  NUMERO_DOCUMENTO: {
    type: String,
    unique: true,
    required: true
  },
  USERNAME: {
    type: String,
    unique: true,
    required: true
  },
  PASSWORD: {
    type: String,
    unique: true,
    required: true
  },
  NOMBRE: {
    type: String,
    required: true
  },
  APELLIDO_PATERNO: {
    type: String,
    required: true
  },
  APELLIDO_MATERNO: {
    type: String,
    required: true
  },
  EMAIL: {
    type: String,
    unique: true,
    required: true
  },
  FUVEX: {
    type: String,
    required: false
  },
  JEFE: {
    ref: 'User',
    type: Schema.Types.ObjectId,
    required: false
  },
  ROLE: {
    ref: 'Role',
    type: Schema.Types.ObjectId,
    required: true
  }
}, {
  timestamps: true,
});

userSchema.statics.ENCRIPTAR_CONTRASENA = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
}

userSchema.statics.COMPARAR_CONTRASENA = async (receivedPassword, password) => {
  return await bcrypt.compare(receivedPassword, password);
}

export default model('User', userSchema);