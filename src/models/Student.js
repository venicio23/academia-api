const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: [true, 'Nome é obrigatório'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Email é obrigatório'],
    unique: true,
    lowercase: true,
    trim: true
  },
  telefone: {
    type: String,
    required: [true, 'Telefone é obrigatório'],
    trim: true
  },
  cpf: {
    type: String,
    required: [true, 'CPF é obrigatório'],
    unique: true,
    trim: true
  },
  dataNascimento: {
    type: Date,
    required: [true, 'Data de nascimento é obrigatória']
  },
  endereco: {
    rua: String,
    numero: String,
    bairro: String,
    cidade: String,
    cep: String,
    estado: String
  },
  plano: {
    tipo: {
      type: String,
      enum: ['mensal', 'trimestral', 'semestral', 'anual'],
      required: true
    },
    valor: {
      type: Number,
      required: true
    },
    dataInicio: {
      type: Date,
      required: true
    },
    dataFim: {
      type: Date,
      required: true
    },
    ativo: {
      type: Boolean,
      default: true
    }
  },
  modalidades: [{
    type: String,
    enum: ['musculacao', 'natacao', 'zumba', 'pilates', 'yoga', 'crossfit', 'spinning']
  }],
  status: {
    type: String,
    enum: ['ativo', 'inativo', 'suspenso'],
    default: 'ativo'
  },
  observacoes: {
    type: String,
    trim: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Student', studentSchema);
