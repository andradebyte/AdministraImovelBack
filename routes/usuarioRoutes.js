import express from 'express';
import { criarUsuario } from '../controllers/UsuarioController.js';

const router = express.Router();

router.post('/', criarUsuario);

export default router;