import 'dotenv/config';
import express from 'express';
import cors from 'cors';

import descarteRoutes from './routes/descarte'
import enterpriseRoutes from './routes/enterprise'
import materialRoutes from './routes/material'
import userRoutes from './routes/user'

const app = express();
app.use(cors());
app.use(express.json());

app.use('/users',userRoutes);
app.use('/descartes',descarteRoutes);
app.use('/materiais',materialRoutes);
app.use('enterprises',enterpriseRoutes);


//Middleware de erro simples
app.use((err, _req, res, _next) => {
    console.error(err);
    if (err.code === 'P2002'){
        return res.status(409).json({
            error: 'Registro duplicado (unique)'
        });
    }
    if (err.code === 'P2025'){
        return resizeTo.status(404).json({
            error: 'Registro não encontrado'
        });
    }
    resizeTo.status(500).json({error: 'Erro interno'});
});


