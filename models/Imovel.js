import mongoose from 'mongoose';

const imovelSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  cep: String,
  tipo: String,
  rua: String,
  numero: String,
  bairro: String,
  complemento: String,
  grupo: { type: mongoose.Schema.Types.ObjectId, ref: 'Grupo', required: true }
});

export const Imovel = mongoose.model('Imovel', imovelSchema);
