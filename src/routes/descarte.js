import { Router } from 'express';
import { DescarteController } from '../controllers/Descarte.js';

const route = Router( );

route.post('/', DescarteController.store);
route.get('/', DescarteController.index);


export default route;