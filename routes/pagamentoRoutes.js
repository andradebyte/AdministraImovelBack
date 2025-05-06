import express from 'express';
import { criarPagamento, listarPagamentos } from '../controllers/pagamentoController.js';

const router = express.Router();

router.post('/', criarPagamento);
router.get('/', listarPagamentos);

export default router;
