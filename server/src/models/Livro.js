const mongoose = require('mongoose');

const livroSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true
  },
  autor: {
    type: String,
    required: true
  },
  categoria: {
    type: String,
    required: true
  },
  ano: {
    type: Boolean,
    required: true,
  }
});

module.exports = mongoose.model('Livros', livroSchema);