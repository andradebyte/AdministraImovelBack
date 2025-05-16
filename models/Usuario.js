import mongoose from 'mongoose';
import { hashPassword } from '../utils/hash.js';

const usuarioSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  senha: { type: String, required: true }
});

usuarioSchema.pre('save', async function (next) {
  // Verifica se a senha foi modificada
  if (!this.isModified('senha')) return next();
  this.senha = await hashPassword(this.senha);
  next();
});

export const Usuario = mongoose.model('Usuario', usuarioSchema);
