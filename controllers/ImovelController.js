import { Imovel } from '../models/Imovel.js';
import { Grupo } from '../models/Grupo.js';

export const criarImovel = async (req, res) => {
  try {
    const { grupoId, usuarioId, nome, cep, tipo, rua, numero, bairro, complemento } = req.body;

    // Verifica se o grupo existe
    const grupo = await Grupo.findById(grupoId);
    if (!grupo) {
      return res.status(404).json({ erro: 'Grupo não encontrado' });
    }

    // Cria o imóvel
    const novoImovel = new Imovel({
      nome,
      cep,
      tipo,
      rua,
      numero,
      bairro,
      complemento,
      grupo: grupoId,
      usuario: usuarioId
    });

    await novoImovel.save();
    res.status(201).json(novoImovel);
  } catch (err) {
    res.status(400).json({ erro: err.message });
  }
};

export const listarImoveis = async (req, res) => {
  try {
    const { grupoId, usuarioId } = req.body;

    if (!usuarioId) {
      return res.status(400).json({ erro: 'usuarioId é obrigatório' });
    }

    if (!grupoId) {
      const imoveis = await Imovel.find({ usuario: usuarioId }).populate('grupo');
      return res.status(200).json(imoveis);
    }

    const imoveis = await Imovel.find({ grupo: grupoId }).populate('grupo');
    return res.status(200).json(imoveis);
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
};

// Imóvel por ID

export const imovelPorId = async (req, res) => {
  try {
    const { id } = req.params;

    const imovel = await Imovel.findById(id).populate('grupo');
    if (!imovel) {
      return res.status(404).json({ erro: 'Imóvel não encontrado' });
    }

    res.status(200).json(imovel);
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
}