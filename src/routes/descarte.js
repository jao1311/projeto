import { Router } from 'express';
import { DescarteController } from '../controllers/descarte.js';

const route = Router( );

route.post('/', DescarteController.store);

export default route;