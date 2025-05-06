import { Imovel } from '../models/Imovel.js';
import { Grupo } from '../models/Grupo.js';

// ✅ Já está exportando
export const criarImovel = async (req, res) => {
  try {
    const { usuarioId, ...dadosImovel } = req.body;

    const grupoDefault = await Grupo.findOne({
      usuario: usuarioId,
      nome: 'default'
    });

    if (!grupoDefault) {
      return res.status(404).json({ erro: 'Grupo default não encontrado para o usuário' });
    }

    const novoImovel = new Imovel({
      ...dadosImovel,
      grupo: grupoDefault._id
    });

    await novoImovel.save();
    res.status(201).json(novoImovel);
  } catch (err) {
    res.status(400).json({ erro: err.message });
  }
};

// ✅ Adicione esta função para corrigir o erro
export const listarImoveis = async (req, res) => {
  try {
    const imoveis = await Imovel.find().populate('grupo');
    res.status(200).json(imoveis);
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
};
