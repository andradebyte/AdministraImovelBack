import express from 'express';
import { criarContrato, listarContratos } from '../controllers/contratoController.js';

const router = express.Router();

router.post('/', criarContrato);
router.get('/', listarContratos);

export default router;
