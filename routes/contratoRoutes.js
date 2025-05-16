import express from 'express';
import {
    criarContrato,
    listarContratoAtivoPorImovel,
    listarContratosInativosPorImovel,
    listarContratosPorUsuario,
    inativarContrato
} from '../controllers/contratoController.js';

const router = express.Router();

router.post('/', criarContrato);
router.get('/imovel/:imovelId/ativo', listarContratoAtivoPorImovel);
router.get('/imovel/:imovelId/historico', listarContratosInativosPorImovel);
router.get('/usuario/:usuarioId', listarContratosPorUsuario);
router.put('/:contratoId/inativar', inativarContrato);

export default router;
