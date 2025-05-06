import mongoose from 'mongoose';
import express from 'express';
import dotenv from 'dotenv';

import usuarioRoutes from './routes/usuarioRoutes.js';
import grupoRoutes from './routes/grupoRoutes.js';
import imovelRoutes from './routes/imovelRoutes.js';
import contratoRoutes from './routes/contratoRoutes.js';
import pagamentoRoutes from './routes/pagamentoRoutes.js';

dotenv.config();

const app = express();
app.use(express.json());

// Conexão com o MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('🟢 MongoDB conectado'))
    .catch((err) => console.error('🔴 Erro ao conectar MongoDB:', err));

// Rotas
app.use('/usuarios', usuarioRoutes);
app.use('/grupos', grupoRoutes);
app.use('/imoveis', imovelRoutes);
app.use('/contratos', contratoRoutes);
app.use('/pagamentos', pagamentoRoutes);


app.get('/', (req, res) => {
    const { nome, email, senha } = req.body;
    res.json({ nome, email, senha });
});

// Inicialização
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando na porta ${PORT}`);
});
