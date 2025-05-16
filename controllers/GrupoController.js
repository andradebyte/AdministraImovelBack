import { Grupo } from '../models/Grupo.js';

export const criarGrupo = async (req, res) => {
    try {
        const novoGrupo = new Grupo(req.body);
        await novoGrupo.save();

        res.status(201).json(novoGrupo);
    } catch (err) {
        res.status(400).json({ erro: err.message });
    }
};

export const listarGrupos = async (req, res) => {
    try {
        const { usuarioId } = req.body;

        if (!usuarioId) {
            return res.status(400).json({ erro: 'usuarioId é obrigatório' });
        }

        const grupos = await Grupo.find({ usuario: usuarioId });
        res.status(200).json(grupos);
    } catch (err) {
        res.status(500).json({ erro: err.message });
    }
};
