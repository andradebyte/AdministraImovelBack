import express from 'express';
import { criarImovel, listarImoveis, imovelPorId } from '../controllers/ImovelController.js';

const router = express.Router();

router.post('/', criarImovel);
router.get('/', listarImoveis);
router.get('/:id', imovelPorId);

export default router;