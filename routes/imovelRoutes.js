import express from 'express';
import { criarImovel, listarImoveis } from '../controllers/ImovelController.js';

const router = express.Router();

router.post('/', criarImovel);
router.get('/', listarImoveis);

export default router;