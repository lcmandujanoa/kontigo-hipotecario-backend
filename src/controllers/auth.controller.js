import User from '../models/user';
import Role from '../models/role';
import jwt from 'jsonwebtoken';
import { SECRET_KEY } from '../config';

export const signUp = async (req, res) => {
  const { username, password, name, lastname, secondlastname, email } = req.body;
  const newUser = new User({
    username,
    password: await User.encryptPassword(password),
    name,
    lastname,
    secondlastname,
    email
  });
  const savedUser = await newUser.save();
  const token = jwt.sign({ id: savedUser._id }, SECRET_KEY, {
    expiresIn: 86400
  });

  res.status(200).json({ token });
}

export const signIn = async (req, res) => {
  const { username, password } = req.body;
  const userFound = await User.findOne({ username });
  if (!userFound) return res.status(400).json({ message: 'Usuario no encontrado.' });

  const matchPassword = await User.comparePassword(password, userFound.password);
  if (!matchPassword) return res.status(401).json({ message: 'Contraseña incorrecta.' });

  const token = jwt.sign({ id: userFound.id }, SECRET_KEY, {
    expiresIn: 86400
  });

  res.status(200).json({ token });
}