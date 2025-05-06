import express from 'express';
import { criarGrupo, listarGrupos } from '../controllers/GrupoController.js';

const router = express.Router();

router.post('/', criarGrupo);
router.get('/', listarGrupos);

export default router;
