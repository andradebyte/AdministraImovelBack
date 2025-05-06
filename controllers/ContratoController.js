import { Contrato } from '../models/Contrato.js';

export const criarContrato = async (req, res) => {
    try {
        const novoContrato = new Contrato(req.body);
        await novoContrato.save();
        res.status(201).json(novoContrato);
    } catch (err) {
        res.status(400).json({ erro: err.message });
    }
};

export const listarContratos = async (req, res) => {
    const contratos = await Contrato.find().populate({
        path: 'imovel',
        populate: {
            path: 'grupo',
            populate: { path: 'usuario' }
        }
    });
    res.json(contratos);
};
