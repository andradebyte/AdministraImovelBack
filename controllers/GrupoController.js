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
    const grupos = await Grupo.find().populate('usuario');
    res.json(grupos);
};
