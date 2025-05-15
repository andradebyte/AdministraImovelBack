import express from 'express';
import { criarImovel, listarImoveis, listarImovelPorGrupoOuTodos } from '../controllers/ImovelController.js';

const router = express.Router();

router.post('/', criarImovel); // espera: { usuarioId, nome, tipo, etc. }
router.get('/', listarImoveis);
router.post('/imoveisPorGrupo', listarImovelPorGrupoOuTodos);

export default router;