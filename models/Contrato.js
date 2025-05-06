import mongoose from 'mongoose';

const contratoSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    prazo: String,
    estado: String,
    locador: String,
    data_inicio: Date,
    data_termino: Date,
    caucao: { type: mongoose.Decimal128, default: 0.0 },
    destino: String,
    reajuste: String,
    imovel: { type: mongoose.Schema.Types.ObjectId, ref: 'Imovel', required: true }
});

export const Contrato = mongoose.model('Contrato', contratoSchema);
