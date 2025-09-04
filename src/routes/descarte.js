import { Router } from 'express';
import { DescarteController } from '../controllers/descarte.js';

const route = Router( );

Router.post('/', DescarteController.store);

export default route;