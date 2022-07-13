import Operation from '../models/operation';

export const GET_OPERATION = (req, res) => {
  res.send('getClient');
}

export const GET_OPERATIONS = async (req, res) => {
  const OPERACIONES = await Operation.find();
  res.json(OPERACIONES);
}

export const CREATE_OPERATION = async (req, res) => {
  const { TIPO_DOCUMENTO, NUMERO_DOCUMENTO, NOMBRE, APELLIDO_PATERNO, APELLIDO_MATERNO, ORIGEN } = req.body;
  const OPERACION_NUEVA = new Operation({ TIPO_DOCUMENTO, NUMERO_DOCUMENTO, NOMBRE, APELLIDO_PATERNO, APELLIDO_MATERNO, ORIGEN });
  const OPERACION_REGISTRADA = await OPERACION_NUEVA.save();
  res.status(200).json(OPERACION_REGISTRADA);
}

export const UPDATE_OPERATION = (req, res) => {
  res.send('updateOperation');
}

export const DELETE_OPERATION = (req, res) => {
  res.send('deleteOperation');
}