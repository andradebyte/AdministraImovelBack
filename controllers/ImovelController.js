import { Imovel } from '../models/Imovel.js';
import { Grupo } from '../models/Grupo.js';

export const criarImovel = async (req, res) => {
  try {
    const { grupoId, nome, cep, tipo, rua, numero, bairro, complemento } = req.body;

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
      grupo: grupoId
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

// ✅ Adicione esta função para corrigir o erro

export const listarImovelPorGrupoOuTodos = async (req, res) => {
  try {
    const { grupoId, usuarioId } = req.body;

    let imoveis;

    if (grupoId === 'todos') {
      // Busca todos os grupos do usuário
      const gruposDoUsuario = await Grupo.find({ usuario: usuarioId }).select('_id');
      const idsDosGrupos = gruposDoUsuario.map(grupo => grupo._id);

      // Busca todos os imóveis desses grupos
      imoveis = await Imovel.find({ grupo: { $in: idsDosGrupos } }).populate({
        path: 'grupo',
        populate: { path: 'usuario', select: 'nome email' }
      });
    } else {
      // Busca apenas imóveis do grupo específico
      imoveis = await Imovel.find({ grupo: grupoId }).populate({
        path: 'grupo',  
        populate: { path: 'usuario', select: 'nome email' }
      });
    }

    res.status(200).json(imoveis);
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
};
