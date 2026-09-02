const UserModel = require('../models/userModel');

const userController = {
  listUsers: (req, res) => {
    return res.status(200).json(UserModel.findAll());
  },
  
  getUserById: (req, res) => {
    const user = UserModel.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ error: 'Usuário não encontrado.' });
    }
    return res.status(200).json(user);
  },

  createUser: (req, res) => {
    const { nome, email } = req.body;

    if (!nome || typeof nome !== 'string' || nome.trim() === '') {
      return res.status(400).json({ error: 'O campo "nome" é obrigatório.' });
    }
    if (!email || typeof email !== 'string' || !email.includes('@')) {
      return res.status(400).json({ error: 'O campo "email" é obrigatório e deve ser válido.' });
    }

    const newUser = UserModel.create({ nome: nome.trim(), email: email.trim() });
    return res.status(201).json({ data: newUser });
  }
};

module.exports = userController;