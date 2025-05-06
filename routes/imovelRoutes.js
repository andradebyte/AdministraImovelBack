import express from 'express';
import { criarImovel, listarImoveis } from '../controllers/imovelController.js';

const router = express.Router();

router.post('/', criarImovel); // espera: { usuarioId, nome, tipo, etc. }
router.get('/', listarImoveis);

export default router;