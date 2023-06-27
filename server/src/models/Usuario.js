const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  senhaHash: {
    type: String,
    required: true
  },
  funcionario: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('Usuarios', usuarioSchema);