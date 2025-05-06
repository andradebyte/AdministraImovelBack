import { Usuario } from '../models/Usuario.js';
import { Grupo } from '../models/Grupo.js';

export const criarUsuario = async (req, res) => {
  try {
    // 1. Cria o usuário
    const novoUsuario = new Usuario(req.body);
    await novoUsuario.save();

    // 2. Cria o grupo default associado ao novo usuário
    const grupoPadrao = new Grupo({
      nome: 'default',
      usuario: novoUsuario._id
    });
    await grupoPadrao.save();

    res.status(201).json({
      usuario: novoUsuario,
      //grupoPadrao: grupoPadrao
    });
  } catch (err) {
    res.status(400).json({ erro: err.message });
  }
};