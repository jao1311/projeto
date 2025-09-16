import { Router } from 'express';
import { DescarteController } from '../controllers/descarte.js';

const route = Router( );

route.post('/', DescarteController.store);
route.post('/', DescarteController.index);


export default route;