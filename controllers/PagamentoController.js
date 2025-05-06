import { Pagamento } from '../models/Pagamento.js';

export const criarPagamento = async (req, res) => {
    try {
        const novoPagamento = new Pagamento(req.body);
        await novoPagamento.save();
        res.status(201).json(novoPagamento);
    } catch (err) {
        res.status(400).json({ erro: err.message });
    }
};

export const listarPagamentos = async (req, res) => {
    const pagamentos = await Pagamento.find().populate({
        path: 'contrato',
        populate: {
            path: 'imovel',
            populate: {
                path: 'grupo',
                populate: {
                    path: 'usuario'
                }
            }
        }
    });
    res.json(pagamentos);
};
