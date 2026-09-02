const crypto = require('crypto');

let users = [
  {
    id: crypto.randomUUID(),
    nome: "Administrador",
    email: "admin@apiconnect.com"
  }
];

const UserModel = {
  findAll: () => users,
  findById: (id) => users.find(user => user.id === id),
  create: (userData) => {
    const newUser = { id: crypto.randomUUID(), ...userData };
    users.push(newUser);
    return newUser;
  }
};

module.exports = UserModel;