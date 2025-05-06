import mongoose from 'mongoose';

const pagamentoSchema = new mongoose.Schema({
    data_pagamento: { type: Date, required: true },
    metodo: String,
    valor: { type: mongoose.Decimal128, required: true },
    contrato: { type: mongoose.Schema.Types.ObjectId, ref: 'Contrato', required: true }
});

export const Pagamento = mongoose.model('Pagamento', pagamentoSchema);
