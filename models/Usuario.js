import mongoose from 'mongoose';
import { hashPassword } from '../utils/hash';

const usuarioSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  senha: { type: String, required: true }
});

usuarioSchema.pre('save', function (next) {
  // Verifica se a senha foi modificada
  if (!this.isModified('senha')) return next();
  this.senha = hashPassword(this.senha);
  next();
});

export const Usuario = mongoose.model('Usuario', usuarioSchema);
