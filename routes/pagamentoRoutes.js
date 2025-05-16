import express from 'express';
import {
    criarPagamento,
    listarPagamentosPorContrato,
    contarPagamentosPorContrato
} from '../controllers/PagamentoController.js';

const router = express.Router();

router.post('/', criarPagamento);
router.get('/contrato/:contratoId', listarPagamentosPorContrato);
router.get('/contrato/:contratoId/contagem', contarPagamentosPorContrato);

export default router;
