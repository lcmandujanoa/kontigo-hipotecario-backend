const jwt = require('jsonwebtoken');
import { SECRET_KEY } from '../config';

export const VERIFICAR_TOKEN = (req, res, next) => {
  if (!req.headers.authorization) return res.status(401).send('Petición no autorizada. No se encontró cabecera autorización');

  const TOKEN = req.headers.authorization.split(' ')[1]; //token: "BEARER asdasdasdasdasdasdadsasd..."
  if (TOKEN === 'null') return res.status(401).send('Petición no autorizada. No se encontró token');

  const PAYLOAD = jwt.verify(TOKEN, SECRET_KEY);
  req.ID_USUARIO = PAYLOAD._id;
  next();
}