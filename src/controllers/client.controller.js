import Client from '../models/client';

export const getClient = (req, res) => {
  res.send('getClient');
}

export const getClients = async (req, res) => {
  const clients = await Client.find();
  res.json(clients);
}

export const createClient = async (req, res) => {
  const { dni, name, lastname, secondlastname } = req.body;
  const newClient = new Client({ dni, name, lastname, secondlastname });
  const savedClient = await newClient.save();
  res.status(200).json(savedClient);
}

export const updateClient = (req, res) => {
  res.send('updateClient');
}

export const deleteClient = (req, res) => {
  res.send('deleteClient');
}