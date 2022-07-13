import User from '../models/user';
// import Role from '../models/role';
import jwt from 'jsonwebtoken';
import { SECRET_KEY } from '../config';

export const REGISTRAR_USUARIO = async (req, res) => {
  const { TIPO_DOCUMENTO, NUMERO_DOCUMENTO, USERNAME, PASSWORD, NOMBRE, APELLIDO_PATERNO, APELLIDO_MATERNO, EMAIL, ROLE } = req.body;
  const USUARIO_NUEVO = new User({
    TIPO_DOCUMENTO,
    NUMERO_DOCUMENTO,
    USERNAME,
    PASSWORD: await User.ENCRIPTAR_CONTRASENA(PASSWORD),
    NOMBRE,
    APELLIDO_PATERNO,
    APELLIDO_MATERNO,
    EMAIL,
    ROLE
  });
  const USUARIO_REGISTRADO = await USUARIO_NUEVO.save();
  const TOKEN = jwt.sign({ _id: USUARIO_REGISTRADO._id }, SECRET_KEY, {
    expiresIn: 86400
  });

  res.status(200).json({ TOKEN });
}

export const LOGUEAR_USUARIO = async (req, res) => {
  const { USERNAME, PASSWORD } = req.body;
  const USUARIO_ENCONTRADO = await User.findOne({ USERNAME });
  if (!USUARIO_ENCONTRADO) return res.status(400).json({ message: 'Usuario no encontrado.' });

  const MATCH_PASSWORD = await User.COMPARAR_CONTRASENA(PASSWORD, USUARIO_ENCONTRADO.PASSWORD);
  if (!MATCH_PASSWORD) return res.status(401).json({ message: 'Contraseña incorrecta.' });

  const TOKEN = jwt.sign({ _id: USUARIO_ENCONTRADO._id }, SECRET_KEY, {
    expiresIn: 86400
  });

  res.status(200).json({ TOKEN });
}