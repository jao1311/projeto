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


