import { Contrato } from '../models/Contrato.js';

// Criar contrato
export const criarContrato = async (req, res) => {
    try {
        const novoContrato = new Contrato(req.body);
        await novoContrato.save();
        res.status(201).json(novoContrato);
    } catch (err) {
        res.status(400).json({ erro: err.message });
    }
};

// Listar contratos de um usuário
export const listarContratosPorUsuario = async (req, res) => {
    const { usuarioId } = req.params;
    const contratos = await Contrato.find({ usuario: usuarioId }).populate('imovel');
    res.json(contratos);
};

// Listar contrato ativo de um imóvel
export const listarContratoAtivoPorImovel = async (req, res) => {
    const { imovelId } = req.params;
    const contrato = await Contrato.findOne({ imovel: imovelId, ativo: true }).populate('imovel');
    res.json(contrato);
};

// Listar histórico (contratos inativos) de um imóvel
export const listarContratosInativosPorImovel = async (req, res) => {
    const { imovelId } = req.params;
    const historico = await Contrato.find({ imovel: imovelId, ativo: false }).populate('imovel');
    res.json(historico);
};


//Inativar contrato
export const inativarContrato = async (req, res) => {
    try {
        const { contratoId } = req.params;

        const contrato = await Contrato.findById(contratoId);
        if (!contrato) {
            return res.status(404).json({ erro: 'Contrato não encontrado' });
        }

        contrato.ativo = false;
        contrato.estado = 'Inativo';
        contrato.data_termino = new Date();
        await contrato.save();

        res.status(200).json({ mensagem: 'Contrato inativado com sucesso', contrato });
    } catch (err) {
        res.status(500).json({ erro: err.message });
    }
};
