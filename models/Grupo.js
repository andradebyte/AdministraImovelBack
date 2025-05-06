import mongoose from 'mongoose';

const grupoSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    usuario: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario', required: true }
});

export const Grupo = mongoose.model('Grupo', grupoSchema);
