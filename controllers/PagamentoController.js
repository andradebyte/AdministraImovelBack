import { Pagamento } from '../models/Pagamento.js';

// Criar pagamento
export const criarPagamento = async (req, res) => {
    try {
        const novoPagamento = new Pagamento(req.body);
        await novoPagamento.save();
        res.status(201).json(novoPagamento);
    } catch (err) {
        res.status(400).json({ erro: err.message });
    }
};

// Listar pagamentos por contrato
export const listarPagamentosPorContrato = async (req, res) => {
    const { contratoId } = req.params;
    const pagamentos = await Pagamento.find({ contrato: contratoId });
    res.json(pagamentos);
};

// Contar quantos pagamentos já foram feitos (número de parcelas pagas)
export const contarPagamentosPorContrato = async (req, res) => {
    const { contratoId } = req.params;
    const total = await Pagamento.countDocuments({ contrato: contratoId });
    res.json({ total });
};
