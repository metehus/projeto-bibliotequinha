const mongoose = require('mongoose');

const reservaSchema = new mongoose.Schema({
  usuarioId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Usuarios'
  },
  livroId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Livros'
  },
  dataRetirada: {
    type: Date,
    required: true
  },
  dataDevolucao: {
    type: Date,
    required: true
  },
  retirado: {
    type: Boolean,
    default: false
  },
  devolvido: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('Reservas', reservaSchema);